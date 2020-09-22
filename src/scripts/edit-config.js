const fs = require('fs');
const DICTIONARY_EN_US = require('./card-dictionary.en_US.ts');
const DICTIONARY_ES_AR = require('./card-dictionary.es_AR.ts');

// const localId = 'en_US';
const localId = 'es_AR';
const DICTIONARY = localId === 'en_US' ? DICTIONARY_EN_US : DICTIONARY_ES_AR;
const cardConfig = [];

// const editConfig = cardConfig.map((config) => {
//   config.sectionView = config.sectionView.map((section) => {
//     section.dictionary = section.dictionary.map((dic) => {
//       const defaultDic = DICTIONARY.find((d) => d.attrKey === dic.attrKey);
//       const mergeDic = defaultDic ? Object.assign(defaultDic, dic) : dic;
//       dic.requiredKey = mergeDic.displayName ? Object.keys(mergeDic.displayName) : [mergeDic.attrKey];
//       return dic;
//     });
//     return section;
//   });
//   return config;
// });

const dictionary = [
  {
    attrKey: 'start',
    decimal: 0,
    displayName: {
      start: 'Fecha de fungicida'
    },
    displayType: 'date',
    unit: {},
    validationRules: {
      start: [
        {
          key: 'chemicalApplication',
          params: ['start']
        }
      ]
    },
    order: 1,
    editOrder: 1,
    requiredKey: ['start']
  },
  {
    attrKey: 'type',
    decimal: 0,
    displayName: {
      type: 'Tipo de fungicida'
    },
    displayType: 'string',
    unit: {},
    validationRules: {
      type: [
        {
          key: 'chemicalApplication',
          params: ['type']
        }
      ]
    },
    order: 2,
    editOrder: 2,
    requiredKey: ['type']
  },
  {
    attrKey: 'average_dose_per_m2',
    order: 3,
    editOrder: 3,
    requiredKey: ['average_dose_per_m2', 'volume_liter', 'mass_kg']
  },
  {
    attrKey: 'epidemic_type',
    order: 5,
    editOrder: 5,
    requiredKey: ['epidemic_type']
  },
  {
    attrKey: 'epidemic_fraction',
    order: 6,
    editOrder: 6,
    requiredKey: ['epidemic_fraction']
  },
  {
    attrKey: 'area_ha',
    order: 4,
    editOrder: 4,
    requiredKey: ['area_ha', 'target', 'result']
  },
  {
    attrKey: 'phenological_state',
    order: 7,
    editOrder: 7,
    requiredKey: ['phenological_state']
  },
  {
    attrKey: 'application_name',
    order: 8,
    editOrder: 8,
    requiredKey: ['application_name']
  },
  {
    attrKey: 'application_type',
    order: 9,
    editOrder: 9,
    requiredKey: ['application_type']
  },
  {
    attrKey: 'application_method',
    order: 10,
    editOrder: 10,
    requiredKey: ['application_method']
  },
  {
    attrKey: 'material_unit',
    order: 11,
    editOrder: 11,
    requiredKey: ['material_unit']
  },
  {
    attrKey: 'total_material',
    order: 12,
    editOrder: 12,
    requiredKey: ['total_material', 'target', 'result']
  },
  {
    attrKey: 'average_material_per_ha',
    order: 13,
    editOrder: 13,
    requiredKey: ['average_material_per_ha', 'target', 'result']
  },
  {
    attrKey: 'average_speed_km_per_hour',
    order: 14,
    editOrder: 14,
    requiredKey: ['average_speed_km_per_hour', 'target', 'result']
  }
];

const editConfig = dictionary.map((dic, index) => {
  const order = index + 1;
  dic.order = order;
  dic.editOrder = order;
  return dic;
});

const filePath = './src/scripts/config.json';
fs.writeFile(filePath, JSON.stringify({ data: editConfig }), (err) => {
  if (err) {
    throw err;
  }
  console.log('追加后的数据 --> success');
});
