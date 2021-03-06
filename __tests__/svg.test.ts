import Svg from '../src/svg';

import { ElmModule } from '../src/types';

describe('Svg', () => {
  it('can output an Elm module', () => {
    const attributes = [
      { name: 'xmlns', value: 'http://www.w3.org/2000/svg' },
      { name: 'width', value: '24' },
      { name: 'height', value: '24' },
      { name: 'viewBox', value: '0 0 24 24' },
    ];

    const children = [
      {
        element: 'path',
        attributes: [
          {
            name: 'd',
            value:
              'M19.85352,19.14648l-4.42285-4.42285C16.40637,13.58636,17,12.11237,17,10.5C17,6.91602,14.08398,4,10.5,4 S4,6.91602,4,10.5S6.91602,17,10.5,17c1.61237,0,3.08636-0.59363,4.22363-1.56934l4.42285,4.42285 C19.24414,19.95117,19.37207,20,19.5,20s0.25586-0.04883,0.35352-0.14648C20.04883,19.6582,20.04883,19.3418,19.85352,19.14648z M5,10.5C5,7.46729,7.46729,5,10.5,5S16,7.46729,16,10.5S13.53271,16,10.5,16S5,13.53271,5,10.5z',
          },
        ],
        children: [],
      },
    ];

    const svg = new Svg(attributes, children);

    const expected: ElmModule = {
      viewBody: expect.any(String),
      moduleName: 'SearchIcon',
      moduleExposing: { kind: 'SOME', entries: ['view', 'viewWithAttributes'] },
      imports: [
        { module: 'Svg', exposing: { kind: 'ALL' } },
        { module: 'Svg.Attributes', exposing: { kind: 'ALL' } },
        { module: 'Html', exposing: { kind: 'SOME', entries: ['Html'] } },
      ],
      success: true,
    };
    expect(svg.toElm('SearchIcon')).toEqual(expected);

    expect(svg.toElm('SearchIcon').viewBody).toMatchInlineSnapshot(`
"view: Html msg
view =
  svg [xmlns \\"http://www.w3.org/2000/svg\\", width \\"24\\", height \\"24\\", viewBox \\"0 0 24 24\\"] [         Svg.path [d \\"M19.85352,19.14648l-4.42285-4.42285C16.40637,13.58636,17,12.11237,17,10.5C17,6.91602,14.08398,4,10.5,4 S4,6.91602,4,10.5S6.91602,17,10.5,17c1.61237,0,3.08636-0.59363,4.22363-1.56934l4.42285,4.42285 C19.24414,19.95117,19.37207,20,19.5,20s0.25586-0.04883,0.35352-0.14648C20.04883,19.6582,20.04883,19.3418,19.85352,19.14648z M5,10.5C5,7.46729,7.46729,5,10.5,5S16,7.46729,16,10.5S13.53271,16,10.5,16S5,13.53271,5,10.5z\\"] []         ]

viewWithAttributes: List (Html.Attribute msg) -> Html msg
viewWithAttributes attributes =
  svg ([xmlns \\"http://www.w3.org/2000/svg\\", width \\"24\\", height \\"24\\", viewBox \\"0 0 24 24\\"] ++ attributes) [         Svg.path [d \\"M19.85352,19.14648l-4.42285-4.42285C16.40637,13.58636,17,12.11237,17,10.5C17,6.91602,14.08398,4,10.5,4 S4,6.91602,4,10.5S6.91602,17,10.5,17c1.61237,0,3.08636-0.59363,4.22363-1.56934l4.42285,4.42285 C19.24414,19.95117,19.37207,20,19.5,20s0.25586-0.04883,0.35352-0.14648C20.04883,19.6582,20.04883,19.3418,19.85352,19.14648z M5,10.5C5,7.46729,7.46729,5,10.5,5S16,7.46729,16,10.5S13.53271,16,10.5,16S5,13.53271,5,10.5z\\"] []         ]"
`);
  });
});
