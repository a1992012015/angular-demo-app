const fs = require('fs');
const DICTIONARY_EN_US = require('./card-dictionary.en_US.ts');
const DICTIONARY_ES_AR = require('./card-dictionary.es_AR.ts');

// const localId = 'en_US';
const localId = 'es_AR';
const DICTIONARY = localId === 'en_US' ? DICTIONARY_EN_US : DICTIONARY_ES_AR;
const cardConfig = [
  {
    cardType: 'keyValueCard',
    cardTitle: {
      title: 'Índice de Productividad de Cultivos',
      subtitle: '',
      icon: 'iconPlantvolume',
      color: '#FF8D02'
    },
    sectionView: [
      {
        sectionTitle: {
          title: ''
        },
        extractFunctionName: 'extractArrayValueByArraySection',
        extractParams: [
          {
            dataPath: ['payload', 'crop_productivity_index_data', 'productivity_index'],
            dataTrait: [
              {
                key: 'data_type',
                rule: 'equal',
                value: [38]
              }
            ],
            extractKey: ['crop_category', 'index'],
            editKey: []
          }
        ],
        sectionName: 'keyValue',
        dictionary: [
          {
            attrKey: 'crop_category',
            order: 1,
            editOrder: 1,
            requiredKey: ['crop_category']
          },
          {
            attrKey: 'index',
            order: 2,
            editOrder: 2,
            requiredKey: ['index']
          }
        ],
        defaultEditKey: []
      }
    ]
  },
  {
    cardType: 'keyValueCard',
    cardTitle: {
      title: 'Frecuencia de inundación',
      icon: 'iconFlood',
      color: '#F23A30'
    },
    sectionView: [
      {
        sectionTitle: {
          title: ''
        },
        extractFunctionName: 'extractObjectByArraySection',
        extractParams: [
          {
            dataPath: ['payload', 'flooding_data'],
            dataTrait: [
              {
                key: 'data_type',
                rule: 'equal',
                value: [36]
              }
            ],
            extractKey: ['dominant_frequency', 'max_frequency', 'duration'],
            editKey: []
          }
        ],
        sectionName: 'keyValue',
        dictionary: [
          {
            attrKey: 'dominant_frequency',
            order: 1,
            editOrder: 1,
            requiredKey: ['dominant_frequency']
          },
          {
            attrKey: 'max_frequency',
            order: 2,
            editOrder: 2,
            requiredKey: ['max_frequency']
          },
          {
            attrKey: 'duration',
            order: 3,
            editOrder: 3,
            requiredKey: ['duration']
          }
        ],
        defaultEditKey: []
      }
    ]
  },
  {
    cardType: 'soilComponentCard',
    cardTitle: {
      title: 'Suelo',
      icon: 'iconSoil',
      color: '#6E4B3F'
    },
    sectionView: [
      {
        sectionTitle: {
          title: '',
          subtitle: ''
        },
        extractFunctionName: 'extractObjectByArraySection',
        extractParams: [
          {
            dataPath: ['payload', 'soil_component_data'],
            dataTrait: [
              {
                key: 'data_type',
                rule: 'equal',
                value: [31]
              }
            ],
            extractKey: ['soil_texture_type'],
            editKey: []
          }
        ],
        sectionName: 'image',
        dictionary: [
          {
            attrKey: 'soil_texture_type',
            order: 1,
            editOrder: 1,
            requiredKey: ['soil_texture_type']
          }
        ],
        defaultEditKey: []
      },
      {
        sectionTitle: {
          title: '',
          subtitle: ''
        },
        extractFunctionName: 'extractArrayValueByArraySection',
        extractParams: [
          {
            dataPath: ['payload', 'soil_component_data', 'soil_component'],
            dataTrait: [
              {
                key: 'data_type',
                rule: 'equal',
                value: [31]
              }
            ],
            extractKey: [
              'soil_depth_range',
              'soil_depth_level',
              'component_percentage',
              'sand_fraction',
              'silt_fraction',
              'clay_fraction',
              'ph_level',
              'nitrogen_in_ppm'
            ],
            editKey: []
          }
        ],
        sectionName: 'keyValue',
        dictionary: [
          {
            attrKey: 'soil_depth_range',
            decimal: 2,
            modifier: 1,
            displayName: {
              soil_depth_range: 'Rango de Profundidad del Suelo'
            },
            displayType: 'soil_depth_range',
            unit: {},
            validationRules: {},
            order: 1,
            editOrder: 1,
            requiredKey: ['soil_depth_range']
          },
          {
            attrKey: 'soil_depth_level',
            decimal: 2,
            modifier: 1,
            displayName: {
              soil_depth_level: 'Nivel de Profundidad del Suelo'
            },
            displayType: 'string',
            unit: {},
            validationRules: {},
            order: 2,
            editOrder: 2,
            requiredKey: ['soil_depth_level']
          },
          {
            attrKey: 'component_percentage',
            order: 3,
            editOrder: 3,
            requiredKey: ['component_percentage']
          },
          {
            attrKey: 'sand_fraction',
            order: 4,
            editOrder: 4,
            requiredKey: ['sand_fraction']
          },
          {
            attrKey: 'silt_fraction',
            order: 5,
            editOrder: 5,
            requiredKey: ['silt_fraction']
          },
          {
            attrKey: 'clay_fraction',
            order: 6,
            editOrder: 6,
            requiredKey: ['clay_fraction']
          },
          {
            attrKey: 'ph_level',
            order: 7,
            editOrder: 7,
            requiredKey: ['ph_level']
          },
          {
            attrKey: 'nitrogen_in_ppm',
            order: 8,
            editOrder: 8,
            requiredKey: ['nitrogen_in_ppm']
          }
        ],
        defaultEditKey: []
      },
      {
        sectionTitle: {
          title: '',
          subtitle: ''
        },
        extractFunctionName: 'extractArrayValueByArraySection',
        extractParams: [
          {
            dataPath: ['payload', 'soil_component_data', 'soil_component'],
            dataTrait: [
              {
                key: 'data_type',
                rule: 'equal',
                value: [31]
              }
            ],
            extractKey: ['component_name'],
            editKey: []
          }
        ],
        sectionName: 'massage',
        dictionary: [
          {
            attrKey: 'component_name',
            order: 1,
            editOrder: 1,
            requiredKey: ['component_name']
          }
        ],
        defaultEditKey: []
      }
    ]
  }
];

const editConfig = cardConfig.map((config) => {
  config.sectionView = config.sectionView.map((section) => {
    // section.dictionary = section.dictionary.map((dic) => {
    //   const defaultDic = DICTIONARY.find((d) => d.attrKey === dic.attrKey);
    //   const mergeDic = defaultDic ? Object.assign(defaultDic, dic) : dic;
    //   dic.requiredKey = mergeDic.displayName ? Object.keys(mergeDic.displayName) : [mergeDic.attrKey];
    //   return dic;
    // });
    section.showOption = true;
    section.clickEvent = false;
    return section;
  });
  return config;
});

const dictionary = [
  {
    attrKey: 'start',
    decimal: 0,
    displayName: {
      start: 'Fecha de fungicida',
    },
    displayType: 'date',
    unit: {},
    validationRules: {
      start: [
        {
          key: 'chemicalApplication',
          params: ['start'],
        },
      ],
    },
    order: 1,
    editOrder: 1,
    requiredKey: ['start'],
  },
  {
    attrKey: 'type',
    decimal: 0,
    displayName: {
      type: 'Tipo de fungicida',
    },
    displayType: 'string',
    unit: {},
    validationRules: {
      type: [
        {
          key: 'chemicalApplication',
          params: ['type'],
        },
      ],
    },
    order: 2,
    editOrder: 2,
    requiredKey: ['type'],
  },
  {
    attrKey: 'average_dose_per_m2',
    order: 3,
    editOrder: 3,
    requiredKey: ['average_dose_per_m2', 'volume_liter', 'mass_kg'],
  },
  {
    attrKey: 'epidemic_type',
    order: 5,
    editOrder: 5,
    requiredKey: ['epidemic_type'],
  },
  {
    attrKey: 'epidemic_fraction',
    order: 6,
    editOrder: 6,
    requiredKey: ['epidemic_fraction'],
  },
  {
    attrKey: 'area_ha',
    order: 4,
    editOrder: 4,
    requiredKey: ['area_ha', 'target', 'result'],
  },
  {
    attrKey: 'phenological_state',
    order: 7,
    editOrder: 7,
    requiredKey: ['phenological_state'],
  },
  {
    attrKey: 'application_name',
    order: 8,
    editOrder: 8,
    requiredKey: ['application_name'],
  },
  {
    attrKey: 'application_type',
    order: 9,
    editOrder: 9,
    requiredKey: ['application_type'],
  },
  {
    attrKey: 'application_method',
    order: 10,
    editOrder: 10,
    requiredKey: ['application_method'],
  },
  {
    attrKey: 'material_unit',
    order: 11,
    editOrder: 11,
    requiredKey: ['material_unit'],
  },
  {
    attrKey: 'total_material',
    order: 12,
    editOrder: 12,
    requiredKey: ['total_material', 'target', 'result'],
  },
  {
    attrKey: 'average_material_per_ha',
    order: 13,
    editOrder: 13,
    requiredKey: ['average_material_per_ha', 'target', 'result'],
  },
  {
    attrKey: 'average_speed_km_per_hour',
    order: 14,
    editOrder: 14,
    requiredKey: ['average_speed_km_per_hour', 'target', 'result'],
  },
];

const dictionaryConfig = dictionary.map((dic, index) => {
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
