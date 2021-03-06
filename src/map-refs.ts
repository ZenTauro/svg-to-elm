// source taken from https://github.com/levelhq/level/blob/master/lib/level/svg.ex
// huge thanks for the list of elements/attributes and the mappings!

export const elementsMap: { [x: string]: string | null } = {
  svg: 'svg',
  foreignObject: 'foreignObject',
  circle: 'circle',
  ellipse: 'ellipse',
  image: 'image',
  line: 'line',
  path: 'Svg.path',
  polygon: 'polygon',
  polyline: 'polyline',
  rect: 'rect',
  use: 'use',
  animate: 'animate',
  animatecolor: 'animateColor',
  animatenotion: 'animateMotion',
  animatetransform: 'animateTransform',
  mpath: 'mpath',
  set: 'set',
  desc: 'desc',
  metadata: 'metadata',
  a: 'a',
  defs: 'defs',
  g: 'g',
  marker: 'marker',
  mask: 'mask',
  pattern: 'pattern',
  switch: 'switch',
  symbol: 'symbol',
  altglyph: 'altGlyph',
  altglyphdef: 'altGlyphDef',
  altglyphitem: 'altGlyphItem',
  glyph: 'glyph',
  glyphref: 'glyphRef',
  textpath: 'textPath',
  text: 'text_',
  tref: 'tref',
  tspan: 'tspan',
  font: 'font',
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient',
  stop: 'stop',
  feblend: 'feBlend',
  fecolormatrix: 'feColorMatrix',
  fecomponenttransfer: 'feComponentTransfer',
  fecomposite: 'feComposite',
  feconvolvematrix: 'feConvolveMatrix',
  fediffuselighting: 'feDiffuseLighting',
  fedisplacementmap: 'feDisplacementMap',
  feflood: 'feFlood',
  fefunca: 'feFuncA',
  fefuncb: 'feFuncB',
  fefuncg: 'feFuncG',
  fefuncr: 'feFuncR',
  fegaussianblur: 'feGaussianBlur',
  feimage: 'feImage',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  femorphology: 'feMorphology',
  feoffset: 'feOffset',
  fespecularlighting: 'feSpecularLighting',
  fetile: 'feTile',
  feturbulence: 'feTurbulence',
  fedistantlight: 'feDistantLight',
  fepointlight: 'fePointLight',
  fespotlight: 'feSpotLight',
  clippath: 'clipPath',
  'color-profile': 'colorProfile',
  cursor: 'cursor',
  filter: 'filter',
  style: 'style',
  view: 'view',
  title: null,
};

export const attributesMap: { [x: string]: string } = {
  'accent-height': 'accentHeight',
  accelerate: 'accelerate',
  additive: 'additive',
  alphabetic: 'alphabetic',
  allowreorder: 'allowReorder',
  amplitude: 'amplitude',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  'cap-height': 'capHeight',
  class: 'class',
  clippathunits: 'clipPathUnits',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  divisor: 'divisor',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  'glyph-name': 'glyphName',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  height: 'height',
  'horiz-adv-x': 'horizAdvX',
  'horiz-origin-x': 'horizOriginX',
  'horiz-origin-y': 'horizOriginY',
  id: 'id',
  ideographic: 'ideographic',
  in: 'in_',
  in2: 'in2',
  intercept: 'intercept',
  k: 'k',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lang: 'lang',
  lengthadjust: 'lengthAdjust',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerheight: 'markerHeight',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  max: 'max',
  media: 'media',
  method: 'method',
  min: 'min',
  mode: 'mode',
  name: 'name',
  numoctaves: 'numOctaves',
  offset: 'offset',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  'overline-position': 'overlinePosition',
  'overline-thickness': 'overlineThickness',
  'panose-1': 'panose1',
  path: 'Svg.Attributes.path',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointorder: 'pointOrder',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  restart: 'restart',
  result: 'result',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  seed: 'seed',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  'strikethrough-position': 'strikethroughPosition',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  style: 'style',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  target: 'target',
  targetx: 'targetX',
  targety: 'targetY',
  textlength: 'textLength',
  title: 'title',
  to: 'to',
  transform: 'transform',
  type_: 'type_',
  u1: 'u1',
  u2: 'u2',
  'underline-position': 'underlinePosition',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  'unicode-range': 'unicodeRange',
  'units-per-em': 'unitsPerEm',
  'v-alphabetic': 'vAlphabetic',
  'v-hanging': 'vHanging',
  'v-ideographic': 'vIdeographic',
  'v-mathematical': 'vMathematical',
  values: 'values',
  version: 'version',
  'vert-adv-y': 'vertAdvY',
  'vert-origin-x': 'vertOriginX',
  'vert-origin-y': 'vertOriginY',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  width: 'width',
  widths: 'widths',
  x: 'x',
  xheight: 'xHeight',
  x1: 'x1',
  x2: 'x2',
  xchannelselector: 'xChannelSelector',
  xlinkactuate: 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  xlinkrole: 'xlinkRole',
  xlinkshow: 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  xlinktype: 'xlinkType',
  xmlbase: 'xmlBase',
  xmllang: 'xmlLang',
  xmlspace: 'xmlSpace',
  y: 'y',
  y1: 'y1',
  y2: 'y2',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomAndPan: 'zoomAndPan',
  'alignment-baseline': 'alignmentBaseline',
  'baseline-shift': 'baselineShift',
  'clip-path': 'clipPath',
  'clip-rule': 'clipRule',
  clip: 'clip',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'color-interpolation': 'colorInterpolation',
  'color-profile': 'colorProfile',
  'color-rendering': 'colorRendering',
  color: 'color',
  cursor: 'cursor',
  direction: 'direction',
  display: 'display',
  'dominant-baseline': 'dominantBaseline',
  'enable-background': 'enableBackground',
  'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule',
  fill: 'fill',
  filter: 'filter',
  'flood-color': 'floodColor',
  'flood-opacity': 'floodOpacity',
  'font-family': 'fontFamily',
  'font-size-adjust': 'fontSizeAdjust',
  'font-size': 'fontSize',
  'font-stretch': 'fontStretch',
  'font-style': 'fontStyle',
  'font-variant': 'fontVariant',
  'font-weight': 'fontWeight',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  'image-rendering': 'imageRendering',
  kerning: 'kerning',
  'letter-spacing': 'letterSpacing',
  'lighting-color': 'lightingColor',
  'marker-end': 'markerEnd',
  'marker-mid': 'markerMid',
  'marker-start': 'markerStart',
  mask: 'mask',
  opacity: 'opacity',
  overflow: 'overflow',
  'pointer-events': 'pointerEvents',
  'shape-rendering': 'shapeRendering',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-opacity': 'strokeOpacity',
  'stroke-width': 'strokeWidth',
  stroke: 'stroke',
  'text-anchor': 'textAnchor',
  'text-decoration': 'textDecoration',
  'text-rendering': 'textRendering',
  'unicode-bidi': 'unicodeBidi',
  visibility: 'visibility',
  'word-spacing': 'wordSpacing',
  'writing-mode': 'writingMode',
};
