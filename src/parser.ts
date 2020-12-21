import {
  parseString
} from 'xml2js';
import * as fs from 'fs';
import { promises } from 'fs';
import * as util from 'util';
import Svg, {
  Attribute,
  Child
} from './svg';
import {
  ElmModule
} from './types';

import {
  elementsMap,
  attributesMap
} from './map-refs';
import writeElmToDisk from './write-elm-to-disk';
import chalk from 'chalk';

export interface ParsingError {
  message: string;
  success: boolean;
}

export type ParserResult = ElmModule | ParsingError;

interface XmlAttributes {
  [x: string]: string;
}

interface GenericXmlElements {
  [x: string]: XmlElement[];
}

type XmlElement = GenericXmlElements & {
  $: XmlAttributes;
};

interface XmlToJsResult {
  svg: XmlElement;
}

const ATTRIBUTE_BLACKLIST = ['xmlns', 'xmlns:xlink'];

const notOnBlacklist = (key: string) => ATTRIBUTE_BLACKLIST.indexOf(key) === -1;

const parseAttributesFromElement = (element: XmlElement): Attribute[] =>
  Object.keys(element.$)
  .filter(notOnBlacklist)
  .map(key => {
    return {
      name: attributesMap[key.toLowerCase()],
      value: element.$[key]
    };
  });

const parseChildren = (element: XmlElement): Child[] =>
  Object.keys(element)
  .filter(key => key !== '$')
  .filter(key => elementsMap[key] !== null)
  .map(key => {
    const elmElementName: string = elementsMap[key] as string;
    if (!elmElementName) {
      throw Error('Unknown element name ' + key);
    }

    return element[key].map(child => ({
      element: key,
      attributes: parseAttributesFromElement(child),
      children: parseChildren(child),
    }));

  })
  .reduce((acc, iter) => acc.concat(iter), []);

/**
 * @param {string} str The string to be converted to camel case
 * @returns {string} The string converted to camel case
 */
function camelize(str: string): string {
  const arr = str.split('-').map(v => v.split(' ')).flat();
  const capital = arr.map(
    item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );

  return capital.join("");
}

/**
 * @param {string} str The path to the directory tha contains the svg files
 * @returns {Array<string>} An array with the svg filenames
 */
async function read_dir(str: string): Promise < string[] > {
  const dir = await (promises as any).opendir(str);

  let files = [];
  for await (const direntry of dir) {
    let f = direntry.name;
    files.push(f.slice(0, f.length - 4));
  }

  return files.sort();
}

class Parser {
  parse(
    filePath: string,
    options: {
      moduleName: string
    },
  ): Promise < ParserResult > {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, {
        encoding: 'utf8'
      }, (err, contents) => {
        if (err) {
          reject({
            success: false,
            message: err.message
          });
        }

        this.parseSvg(contents)
          .then(svg => {
            resolve(svg.toElm(options.moduleName));
          })
          .catch(err => {
            reject({
              success: false,
              message: err.message
            });
          });
      });
    });
    return Promise.resolve({
      message: 'blah',
      success: false
    });
  }

  parseSvg(contents: string): Promise < Svg > {
    return new Promise(resolve => {
      parseString(contents, (err, result: XmlToJsResult) => {
        const parentAttrs = parseAttributesFromElement(result.svg);
        const children = parseChildren(result.svg);

        resolve(new Svg(parentAttrs, children));
      });
    });
  }

  async process_dir(argv: any, inDir: string, outDir: string, modulePrefix: string): Promise < void > {
    const src_dir = inDir;
    const output_dir = outDir;

    const files = await read_dir(src_dir);

    const taskArray = files.map(f => {
      const camelized = camelize(f);
      const from = `${src_dir}/${f}.svg`;
      const to = `${output_dir}/${camelized}.elm`;

      return {
        from,
        to,
        camelized
      }
    });

    await Promise.all(taskArray.map(async ({
      from,
      to,
      camelized
    }) => {
      await fs.promises.readFile(from, {
        encoding: 'utf8'
      });

      this.parse(from, {
          moduleName: `${modulePrefix}.${camelized}`,
        })
        .then(result => {
          if (result.success) {
            return writeElmToDisk(result as ElmModule, {
              outputPath: to,
              elmFormatElmVersion: argv.elmVersion,
              elmFormatPath: argv.elmFormatPath,
              banner: argv.b || '',
            });
          } else {
            throw (result as ParsingError).message;
          }
        })
        .then(result => {
          if (result.success) {
            console.log(
              chalk.green('Success!'),
              chalk.blue(from),
              'parsed and saved as',
              chalk.blue(to),
            );
          } else {
            throw result;
          }
        })
        .catch(err => {
          console.log('Error parsing svg:', chalk.red(err.message));
        });
    }));
  }
}

export default Parser;