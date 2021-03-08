/**
 * crop type color from USDA
 */
import { UnitSystem } from './context.dictonary';
import { AreaInterface } from '../interface/unit.interface';
import { schema2 } from '../utilities/protobuf/defines';
import ITimeRange = schema2.ITimeRange;

export const CROP_COLORS = [
  {
    type: 'Corn',
    color: '#ffd300'
  },
  {
    type: 'Cotton',
    color: '#ff2626'
  },
  {
    type: 'Rice',
    color: '#00a8e2'
  },
  {
    type: 'Sorghum',
    color: '#ff9e0a'
  },
  {
    type: 'Soybeans',
    color: '#267000'
  },
  {
    type: 'Sunflower',
    color: '#ffff00'
  },
  {
    type: 'Peanuts',
    color: '#70a500'
  },
  {
    type: 'Tobacco',
    color: '#00af49'
  },
  {
    type: 'Sweet Corn',
    color: '#dda50a'
  },
  {
    type: 'Pop or Orn Corn',
    color: '#dda50a'
  },
  {
    type: 'Mint',
    color: '#7cd3ff'
  },
  {
    type: 'Barley',
    color: '#e2007c'
  },
  {
    type: 'Durum Wheat',
    color: '#896054'
  },
  {
    type: 'Wheat',
    color: '#896054'
  },
  {
    type: 'Spring Wheat',
    color: '#d8b56b'
  },
  {
    type: 'Winter Wheat',
    color: '#a57000'
  },
  {
    type: 'Other Small Grains',
    color: '#d69ebc'
  },
  {
    type: 'Dbl Crop WinWht/Soybeans',
    color: '#707000'
  },
  {
    type: 'Rye',
    color: '#aa007c'
  },
  {
    type: 'Oats',
    color: '#a05989'
  },
  {
    type: 'Millet',
    color: '#700049'
  },
  {
    type: 'Speltz',
    color: '#d69ebc'
  },
  {
    type: 'Canola',
    color: '#d1ff00'
  },
  {
    type: 'Flaxseed',
    color: '#7c99ff'
  },
  {
    type: 'Safflower',
    color: '#d6d600'
  },
  {
    type: 'Rape Seed',
    color: '#d1ff00'
  },
  {
    type: 'Mustard',
    color: '#00af49'
  },
  {
    type: 'Alfalfa',
    color: '#ffa5e2'
  },
  {
    type: 'Other Hay/Non Alfalfa',
    color: '#a5f28c'
  },
  {
    type: 'Camelina',
    color: '#00af49'
  },
  {
    type: 'Buckwheat',
    color: '#d69ebc'
  },
  {
    type: 'Sugarbeets',
    color: '#a800e2'
  },
  {
    type: 'Dry Beans',
    color: '#a50000'
  },
  {
    type: 'Potatoes',
    color: '#702600'
  },
  {
    type: 'Other Crops',
    color: '#00af49'
  },
  {
    type: 'Sugarcane',
    color: '#af7cff'
  },
  {
    type: 'Sweet Potatoes',
    color: '#702600'
  },
  {
    type: 'Misc Vegs & Fruits',
    color: '#ff6666'
  },
  {
    type: 'Watermelons',
    color: '#ff6666'
  },
  {
    type: 'Onions',
    color: '#ffcc66'
  },
  {
    type: 'Cucumbers',
    color: '#ff6666'
  },
  {
    type: 'Chick Peas',
    color: '#00af49'
  },
  {
    type: 'Lentils',
    color: '#00ddaf'
  },
  {
    type: 'Peas',
    color: '#54ff00'
  },
  {
    type: 'Tomatoes',
    color: '#f2a377'
  },
  {
    type: 'Caneberries',
    color: '#ff6666'
  },
  {
    type: 'Hops',
    color: '#00af49'
  },
  {
    type: 'Herbs',
    color: '#7cd3ff'
  },
  {
    type: 'Clover/Wildflowers',
    color: '#e8bfff'
  },
  {
    type: 'Sod/Grass Seed',
    color: '#afffdd'
  },
  {
    type: 'Switchgrass',
    color: '#00af49'
  },
  {
    type: 'Fallow Idle Cropland',
    color: '#bfbf77'
  },
  {
    type: 'Forest',
    color: '#93cc93'
  },
  {
    type: 'Shrubland',
    color: '#c6d69e'
  },
  {
    type: 'Barren',
    color: '#ccbfa3'
  },
  {
    type: 'Cherries',
    color: '#ff00ff'
  },
  {
    type: 'Peaches',
    color: '#ff8eaa'
  },
  {
    type: 'Apples',
    color: '#ba004f'
  },
  {
    type: 'Grapes',
    color: '#704489'
  },
  {
    type: 'Christmas Trees',
    color: '#007777'
  },
  {
    type: 'Other Tree Crops',
    color: '#af9970'
  },
  {
    type: 'Citrus',
    color: '#ffff7c'
  },
  {
    type: 'Pecans',
    color: '#b5705b'
  },
  {
    type: 'Almonds',
    color: '#00a582'
  },
  {
    type: 'Walnuts',
    color: '#e8d6af'
  },
  {
    type: 'Pears',
    color: '#af9970'
  },
  {
    type: 'Clouds/No Data',
    color: '#f2f2f2'
  },
  {
    type: 'Developed',
    color: '#999999'
  },
  {
    type: 'Water',
    color: '#4970a3'
  },
  {
    type: 'Wetlands',
    color: '#7cafaf'
  },
  {
    type: 'Nonag/Undefined',
    color: '#e8ffbf'
  },
  {
    type: 'Aquaculture',
    color: '#00ffff'
  },
  {
    type: 'Open Water',
    color: '#4970a3'
  },
  {
    type: 'Perennial Ice/Snow',
    color: '#d3e2f9'
  },
  {
    type: 'Developed/Open Space',
    color: '#999999'
  },
  {
    type: 'Developed/Low Intensity',
    color: '#999999'
  },
  {
    type: 'Developed/Med Intensity',
    color: '#999999'
  },
  {
    type: 'Developed/High Intensity',
    color: '#999999'
  },
  {
    type: 'Barren',
    color: '#ccbfa3'
  },
  {
    type: 'Deciduous Forest',
    color: '#93cc93'
  },
  {
    type: 'Evergreen Forest',
    color: '#93cc93'
  },
  {
    type: 'Mixed Forest',
    color: '#93cc93'
  },
  {
    type: 'Shrubland',
    color: '#c6d69e'
  },
  {
    type: 'Grassland Pasture',
    color: '#e8ffbf'
  },
  {
    type: 'Woody Wetlands',
    color: '#7cafaf'
  },
  {
    type: 'Herbaceous Wetlands',
    color: '#7cafaf'
  },
  {
    type: 'Pistachios',
    color: '#00ff8c'
  },
  {
    type: 'Triticale',
    color: '#d69ebc'
  },
  {
    type: 'Carrots',
    color: '#ff6666'
  },
  {
    type: 'Asparagus',
    color: '#ff6666'
  },
  {
    type: 'Garlic',
    color: '#ff6666'
  },
  {
    type: 'Cantaloupes',
    color: '#ff6666'
  },
  {
    type: 'Prunes',
    color: '#ff8eaa'
  },
  {
    type: 'Olives',
    color: '#334933'
  },
  {
    type: 'Oranges',
    color: '#e27026'
  },
  {
    type: 'Honeydew Melons',
    color: '#ff6666'
  },
  {
    type: 'Broccoli',
    color: '#ff6666'
  },
  {
    type: 'Peppers',
    color: '#ff6666'
  },
  {
    type: 'Pomegranates',
    color: '#af9970'
  },
  {
    type: 'Nectarines',
    color: '#ff8eaa'
  },
  {
    type: 'Greens',
    color: '#ff6666'
  },
  {
    type: 'Plums',
    color: '#ff8eaa'
  },
  {
    type: 'Strawberries',
    color: '#ff6666'
  },
  {
    type: 'Squash',
    color: '#ff6666'
  },
  {
    type: 'Apricots',
    color: '#ff8eaa'
  },
  {
    type: 'Vetch',
    color: '#00af49'
  },
  {
    type: 'Dbl Crop WinWht/Corn',
    color: '#ffd300'
  },
  {
    type: 'Dbl Crop Oats/Corn',
    color: '#ffd300'
  },
  {
    type: 'Lettuce',
    color: '#ff6666'
  },
  {
    type: 'Pumpkins',
    color: '#ff6666'
  },
  {
    type: 'Dbl Crop Lettuce/Durum Wht',
    color: '#896054'
  },
  {
    type: 'Dbl Crop Lettuce/Cantaloupe',
    color: '#ff6666'
  },
  {
    type: 'Dbl Crop Lettuce/Cotton',
    color: '#ff2626'
  },
  {
    type: 'Dbl Crop Lettuce/Barley',
    color: '#e2007c'
  },
  {
    type: 'Dbl Crop Durum Wht/Sorghum',
    color: '#ff9e0a'
  },
  {
    type: 'Dbl Crop Barley/Sorghum',
    color: '#ff9e0a'
  },
  {
    type: 'Dbl Crop WinWht/Sorghum',
    color: '#a57000'
  },
  {
    type: 'Dbl Crop Barley/Corn',
    color: '#ffd300'
  },
  {
    type: 'Dbl Crop WinWht/Cotton',
    color: '#a57000'
  },
  {
    type: 'Dbl Crop Soybeans/Cotton',
    color: '#267000'
  },
  {
    type: 'Dbl Crop Soybeans/Oats',
    color: '#267000'
  },
  {
    type: 'Dbl Crop Corn/Soybeans',
    color: '#ffd300'
  },
  {
    type: 'Blueberries',
    color: '#000099'
  },
  {
    type: 'Cabbage',
    color: '#ff6666'
  },
  {
    type: 'Cauliflower',
    color: '#ff6666'
  },
  {
    type: 'Celery',
    color: '#ff6666'
  },
  {
    type: 'Radishes',
    color: '#ff6666'
  },
  {
    type: 'Turnips',
    color: '#ff6666'
  },
  {
    type: 'Eggplants',
    color: '#ff6666'
  },
  {
    type: 'Gourds',
    color: '#ff6666'
  },
  {
    type: 'Cranberries',
    color: '#ff6666'
  },
  {
    type: 'Dbl Crop Barley/Soybeans',
    color: '#267000'
  }
];

/**
 * tillage type color from USDA
 */
export const TILLAGE_COLORS = [
  {
    type: 'Tilliage type unknown',
    color: '#F9E3DE'
  },
  {
    type: 'Not tillage',
    color: '#A57C6E'
  },
  {
    type: 'Conventional tillage',
    color: '#FFF7C1'
  },
  {
    type: 'Reduced tillage',
    color: '#D47A5B'
  },
  {
    type: 'Tillage not agriculture land',
    color: '#E8E6E6'
  },
  {
    type: 'No crop',
    color: '#C4C4C4'
  }
];

/**
 * cover crop type color from USDA
 */
export const COVER_CROP_COLORS = [
  {
    type: 'Cover crop unknown',
    color: '#F9E3DE'
  },
  {
    type: 'With cover crop',
    color: '#125B2E'
  },
  {
    type: 'With winter cover crop',
    color: '#0B6E8D'
  },
  {
    type: 'With spring cover crop',
    color: '#8D0B0B'
  },
  {
    type: 'Not cover crop',
    color: '#BEA79E'
  },
  {
    type: 'Cover crop not agriculture land',
    color: '#E8E6E6'
  }
];

/**
 * unit conversion ratio for crop type bushel
 * ratio is XX lbs/bushel
 */
export const CROP_BUSHEL_CONVERSION_RATIO = [
  {
    type: 'Alfalfa',
    ratio: 60
  },
  {
    type: 'Barley',
    ratio: 48
  },
  {
    type: 'Brome Grass',
    ratio: 14
  },
  {
    type: 'Buckwheat',
    ratio: 48
  },
  {
    type: 'Canary Seed',
    ratio: 50
  },
  {
    type: 'Canola',
    ratio: 50
  },
  {
    type: 'Coriander',
    ratio: 28
  },
  {
    type: 'Corn',
    ratio: 56
  },
  {
    type: 'Crested Wheat Grass',
    ratio: 22
  },
  {
    type: 'Flaxseed',
    ratio: 56
  },
  {
    type: 'Lentils',
    ratio: 60
  },
  {
    type: 'Linola',
    ratio: 56
  },
  {
    type: 'Millet',
    ratio: 50
  },
  {
    type: 'Mustard',
    ratio: 50
  },
  {
    type: 'Oats',
    ratio: 34
  },
  {
    type: 'Peas',
    ratio: 60
  },
  {
    type: 'Rye',
    ratio: 56
  },
  {
    type: 'Sorghum',
    ratio: 56
  },
  {
    type: 'Soybeans',
    ratio: 60
  },
  {
    type: 'Sunflower',
    ratio: 30
  },
  {
    type: 'Wheat',
    ratio: 60
  },
  {
    type: 'Winter Wheat',
    ratio: 60
  }
];

/**
 * color palette for AZE clusters
 */
export const AEZ_COLOR_PALETTE = [
  '#880044',
  '#ffbfcf',
  '#6b0032',
  '#ff97b2',
  '#e7006f',
  '#ff3978',
  '#ff859a',
  '#37000c',
  '#c6004a',
  '#ff3e6b',
  '#ffdedf',
  '#840029',
  '#181717',
  '#f1004f',
  '#ff3d5e',
  '#b70031',
  '#ff8787',
  '#ffc7c4',
  '#dc0030',
  '#ff5456',
  '#440300',
  '#ff2637',
  '#6e000d',
  '#ff8578',
  '#9a0013',
  '#210800',
  '#85000c',
  '#ffa391',
  '#430d00',
  '#dc000a',
  '#ff3216',
  '#661000',
  '#961400',
  '#ff6741',
  '#591400',
  '#3d1400',
  '#e03c00',
  '#d24000',
  '#932b00',
  '#ff7238',
  '#ffa87d',
  '#ffceb5',
  '#803300',
  '#d35d00',
  '#ff7501',
  '#341800',
  '#ff8f3f',
  '#964b00',
  '#542900',
  '#ffa65f',
  '#ff9732',
  '#db7d00',
  '#b56c00',
  '#c87a00',
  '#ffad45',
  '#ffb761',
  '#ffa715',
  '#895800',
  '#543600',
  '#de9800',
  '#ffce85',
  '#ffd89f',
  '#ffc86b',
  '#ffbc2c',
  '#dda600',
  '#9c7500',
  '#664d00',
  '#352800',
  '#ffd101',
  '#caa700',
  '#fff5df',
  '#716200',
  '#d0bd00',
  '#8d8100',
  '#ffeb64',
  '#fff094',
  '#7a7300',
  '#fff22f',
  '#4a4700',
  '#fff604',
  '#fffa85',
  '#fffac0',
  '#fdff47',
  '#a5ab00',
  '#949b00',
  '#bcc800',
  '#f9ff6b',
  '#6d7a00',
  '#ebff4b',
  '#1d1e00',
  '#b9d200',
  '#f4ffaf',
  '#485900',
  '#232a00',
  '#97bc00',
  '#7a9900',
  '#acdd00',
  '#e5ff8c',
  '#b3e700',
  '#639c00',
  '#b8ff54',
  '#0b1000',
  '#6ccc00',
  '#96ff49',
  '#2b6300',
  '#2b7700',
  '#bcff95',
  '#a8ff7e',
  '#98ff6a',
  '#102b00',
  '#3dcf00',
  '#24b000',
  '#094000',
  '#7aff67',
  '#004f06',
  '#d3ffcb',
  '#009c2a',
  '#006e1c',
  '#00310a',
  '#01df52',
  '#00a33e',
  '#50ff7d',
  '#ddffe0',
  '#01bc55',
  '#009243',
  '#007d3b',
  '#01d570',
  '#6bffa1',
  '#87ffb0',
  '#00ec85',
  '#006939',
  '#02bd73',
  '#003921',
  '#02b27a',
  '#beffde',
  '#97ffcf',
  '#3affbc',
  '#016a4d',
  '#77ffcd',
  '#01a581',
  '#008169',
  '#01ac94',
  '#a5ffeb',
  '#01d8bd',
  '#005c51',
  '#02fee9',
  '#ecfffc',
  '#004641',
  '#01e7e4',
  '#8effff',
  '#018a8d',
  '#00a4aa',
  '#00191a',
  '#63efff',
  '#00def1',
  '#017783',
  '#00a5b8',
  '#caf6ff',
  '#003139',
  '#005361',
  '#01aacf',
  '#0188a9',
  '#93dfff',
  '#cbecff',
  '#44c8ff',
  '#acdfff',
  '#00698e',
  '#0092c6',
  '#25b9ff',
  '#00324f',
  '#00182a',
  '#007bbe',
  '#0094e4',
  '#004169',
  '#30a6ff',
  '#b7d4ff',
  '#9ac5ff',
  '#027dce',
  '#3898ff',
  '#0059a3',
  '#004683',
  '#6ca0ff',
  '#00254d',
  '#4d8eff',
  '#7798ff',
  '#002960',
  '#003170',
  '#0072fb',
  '#013d95',
  '#abb1ff',
  '#0156d1',
  '#939bff',
  '#5c79ff',
  '#00174a',
  '#004cd6',
  '#070020',
  '#002386',
  '#003dd8',
  '#8373ff',
  '#001a92',
  '#0018ae',
  '#8d5dff',
  '#09005b',
  '#5229d3',
  '#ba8eff',
  '#c99eff',
  '#17002e',
  '#4600b5',
  '#ae68ff',
  '#af5aff',
  '#f2dbff',
  '#c672ff',
  '#ba44f6',
  '#9002ca',
  '#510074',
  '#16001a',
  '#680088',
  '#ac1dd8',
  '#f1b6ff',
  '#f0a7ff',
  '#9d00c0',
  '#ec7aff',
  '#8c0097',
  '#620066',
  '#ffc8fc',
  '#ff6af3',
  '#a4009b',
  '#3c0037',
  '#ff86ed',
  '#2e0029',
  '#ff47e7',
  '#bf00ab',
  '#24001e',
  '#fff4fc',
  '#9e008a',
  '#ee00d0',
  '#ffdcf5',
  '#540047',
  '#6b005a',
  '#860071',
  '#ff1fcf',
  '#ff8bda',
  '#ff55ce',
  '#ffb1e2',
  '#c9009a',
  '#830061',
  '#ff75c6',
  '#ff2ab4',
  '#820051',
  '#ff38a3',
  '#c60078',
  '#3a001e',
  '#4d0029',
  '#d50074',
  '#1f000b',
  '#ff70a3'
];

/**
 * Polygon fill color
 */
export const FIELD_PERFORMANCE_COLOR_SCHEMA = [
  {
    valueBounds: [-100, 0.4],
    color: '#E06109',
    fontIcon: 'icon-button'
  },
  {
    valueBounds: [0.4, 0.8],
    color: '#F4A92F',
    fontIcon: 'icon-button'
  },
  {
    valueBounds: [0.8, 1],
    color: '#F4D944',
    fontIcon: 'icon-middle'
  },
  {
    valueBounds: [1, 1.2],
    color: '#F4D944',
    fontIcon: 'icon-middle'
  },
  {
    valueBounds: [1.2, 1.6],
    color: '#A7CA30',
    fontIcon: 'icon-top'
  },
  {
    valueBounds: [1.6, 100],
    color: '#30CA58',
    fontIcon: 'icon-top'
  }
];

/**
 * average yield per acre in U.S.
 */
export const US_AVG_CROP_YIELD_LB_PER_ACRE = [
  {
    type: 'wheat',
    yield: [
      { year: 2019, value: 3102 },
      { year: 2018, value: 2856 },
      { year: 2017, value: 2784 }
    ]
  },
  {
    type: 'soybeans',
    yield: [
      { year: 2019, value: 2844 },
      { year: 2018, value: 3036 },
      { year: 2017, value: 2958 }
    ]
  },
  {
    type: 'corn',
    yield: [
      { year: 2019, value: 9408 },
      { year: 2018, value: 9878.4 },
      { year: 2017, value: 9889.6 }
    ]
  },
  {
    type: 'alfalfa',
    yield: [
      { year: 2019, value: 7232.4 },
      { year: 2018, value: 6989.85 },
      { year: 2017, value: 7232.4 }
    ]
  },
  {
    type: 'Barley',
    yield: [
      { year: 2019, value: 3729.6 },
      { year: 2018, value: 3720 },
      { year: 2017, value: 3504 }
    ]
  },
  {
    type: 'Canola',
    yield: [
      { year: 2019, value: 1781 },
      { year: 2018, value: 1861 },
      { year: 2017, value: 1526 }
    ]
  },
  {
    type: 'Flaxseed',
    yield: [
      { year: 2019, value: 1120 },
      { year: 2018, value: 1265.6 },
      { year: 2017, value: 789.6 }
    ]
  },
  {
    type: 'Millet',
    yield: [
      { year: 2019, value: 1785 },
      { year: 2018, value: 1485 },
      { year: 2017, value: 1845 }
    ]
  },
  {
    type: 'Oats',
    yield: [
      { year: 2019, value: 1920.8 },
      { year: 2018, value: 1730.4 },
      { year: 2017, value: 1915.2 }
    ]
  },
  {
    type: 'Rye',
    yield: [
      { year: 2019, value: 9408 },
      { year: 2018, value: 9878.4 },
      { year: 2017, value: 9889.6 }
    ]
  },
  {
    type: 'Sorghum',
    yield: [
      { year: 2019, value: 4088 },
      { year: 2018, value: 4037.6 },
      { year: 2017, value: 4015.2 }
    ]
  },
  {
    type: 'Sunflower',
    yield: [
      { year: 2019, value: 1562 },
      { year: 2018, value: 1731 },
      { year: 2017, value: 1603 }
    ]
  },
  {
    type: 'Winter Wheat',
    yield: [
      { year: 2019, value: 3216 },
      { year: 2018, value: 2874 },
      { year: 2017, value: 3012 }
    ]
  }
];

/**
 * unit symbos for imperial and metric
 */
export const unitSymbos: {
  [key: string]: { [id: number]: string; i18n?: { en_US: string[]; es_AR: string[] } };
} = {
  mm: {
    [UnitSystem.IMPERIAL]: 'mm',
    [UnitSystem.METRIC]: 'mm'
  },
  cm: {
    [UnitSystem.IMPERIAL]: 'in',
    [UnitSystem.METRIC]: 'cm'
  },
  centimeter: {
    [UnitSystem.IMPERIAL]: 'cm',
    [UnitSystem.METRIC]: 'cm'
  },
  inches: {
    [UnitSystem.IMPERIAL]: 'in',
    [UnitSystem.METRIC]: 'in'
  },
  m: {
    [UnitSystem.IMPERIAL]: 'ft',
    [UnitSystem.METRIC]: 'm'
  },
  km: {
    [UnitSystem.IMPERIAL]: 'mi',
    [UnitSystem.METRIC]: 'km'
  },
  m2: {
    [UnitSystem.IMPERIAL]: 'ft²',
    [UnitSystem.METRIC]: 'm²'
  },
  ha: {
    [UnitSystem.IMPERIAL]: 'ac',
    [UnitSystem.METRIC]: 'ha'
  },
  L: {
    [UnitSystem.IMPERIAL]: 'gal',
    [UnitSystem.METRIC]: 'L'
  },
  g: {
    [UnitSystem.IMPERIAL]: 'g',
    [UnitSystem.METRIC]: 'g'
  },
  kg: {
    [UnitSystem.IMPERIAL]: 'lb',
    [UnitSystem.METRIC]: 'kg'
  },
  kg_to_bushel: {
    [UnitSystem.IMPERIAL]: 'bu',
    [UnitSystem.METRIC]: 'kg'
  },
  ton: {
    [UnitSystem.IMPERIAL]: 't',
    [UnitSystem.METRIC]: 't'
  },
  m_per_second: {
    [UnitSystem.IMPERIAL]: 'm/s',
    [UnitSystem.METRIC]: 'm/s'
  },
  km_per_hour: {
    [UnitSystem.IMPERIAL]: 'mph',
    [UnitSystem.METRIC]: 'km/hr'
  },
  degree: {
    [UnitSystem.IMPERIAL]: '°',
    [UnitSystem.METRIC]: '°'
  },
  C_degree: {
    [UnitSystem.IMPERIAL]: '°F',
    [UnitSystem.METRIC]: '°C'
  },
  kPa: {
    [UnitSystem.IMPERIAL]: 'kPa',
    [UnitSystem.METRIC]: 'kPa'
  },
  kg_per_ha: {
    [UnitSystem.IMPERIAL]: 'lb/ac',
    [UnitSystem.METRIC]: 'kg/ha'
  },
  kilogram_per_hectare: {
    [UnitSystem.IMPERIAL]: 'kg/ha',
    [UnitSystem.METRIC]: 'kg/ha'
  },
  kg_per_ha_to_bushel: {
    [UnitSystem.IMPERIAL]: 'bu/ac',
    [UnitSystem.METRIC]: 'kg/ha'
  },
  L_per_m2: {
    [UnitSystem.IMPERIAL]: 'gal/ac',
    [UnitSystem.METRIC]: 'L/m²'
  },
  L_per_ha: {
    [UnitSystem.IMPERIAL]: 'gal/ac',
    [UnitSystem.METRIC]: 'L/ha'
  },
  L_per_ha_to_bushel: {
    [UnitSystem.IMPERIAL]: 'bu/ac',
    [UnitSystem.METRIC]: 'L/ha'
  },
  g_per_m2_per_day: {
    [UnitSystem.IMPERIAL]: 'g/m²/$',
    [UnitSystem.METRIC]: 'g/m²/$',
    i18n: {
      en_US: ['day'],
      es_AR: ['día']
    }
  },
  gc_per_m2_per_day: {
    [UnitSystem.IMPERIAL]: 'gC/m²/$',
    [UnitSystem.METRIC]: 'gC/m²/$',
    i18n: {
      en_US: ['day'],
      es_AR: ['día']
    }
  },
  seeds_per_m2: {
    [UnitSystem.IMPERIAL]: '$/ft²',
    [UnitSystem.METRIC]: '$/m²',
    i18n: {
      en_US: ['seeds'],
      es_AR: ['sem']
    }
  },
  plants_per_m2: {
    [UnitSystem.IMPERIAL]: '$/ft²',
    [UnitSystem.METRIC]: '$/m²',
    i18n: {
      en_US: ['plants'],
      es_AR: ['plantas']
    }
  },
  ppm: {
    [UnitSystem.IMPERIAL]: 'ppm',
    [UnitSystem.METRIC]: 'ppm'
  },
  cost_per_acre: {
    [UnitSystem.IMPERIAL]: '$/ac',
    [UnitSystem.METRIC]: '$/ac'
  },
  watt_per_m2: {
    [UnitSystem.IMPERIAL]: 'W/m²',
    [UnitSystem.METRIC]: 'W/m²'
  },
  percentage: {
    [UnitSystem.IMPERIAL]: '%',
    [UnitSystem.METRIC]: '%'
  },
  beads_per_spike: {
    [UnitSystem.IMPERIAL]: '$/$',
    [UnitSystem.METRIC]: '$/$',
    i18n: {
      en_US: ['beads', 'spike'],
      es_AR: ['granos', 'espiga']
    }
  },
  spikes_per_m2: {
    [UnitSystem.IMPERIAL]: '$/ft²',
    [UnitSystem.METRIC]: '$/m²',
    i18n: {
      en_US: ['spikes'],
      es_AR: ['espiga']
    }
  }
};

/**
 * profile
 */
export interface ProfileInterface {
  fieldId: string;
  cropTypes: string;
  thumbnail: string;
  timeRange: ITimeRange[];
  geoDataCount?: number;
  uuid?: string;
  location?: {
    lat: number;
    lng: number;
  };
  adminLevel?: string;
  fieldSize?: AreaInterface;
  key?: string;
  isGeoData?: boolean;
  ownerId?: string;
}
