const fs = require('fs');
const DICTIONARY_EN_US = require('./card-dictionary.en_US.ts');
const DICTIONARY_ES_AR = require('./card-dictionary.es_AR.ts');

// const localId = 'en_US';
const localId = 'es_AR';
const DICTIONARY = localId === 'en_US' ? DICTIONARY_EN_US : DICTIONARY_ES_AR;
const cardConfig = [
  {
    'cardType': 'keyValueCard',
    'cardTitle': {
      'title': 'Índice de Productividad de Cultivos',
      'subtitle': '',
      'icon': 'iconPlantvolume',
      'color': '#FF8D02',
    },
    'sectionView': [
      {
        'sectionTitle': {
          'title': '',
        },
        'extractFunctionName': 'extractArrayValueByArraySection',
        'extractParams': [
          {
            'dataPath': [
              'payload',
              'crop_productivity_index_data',
              'productivity_index',
            ],
            'dataTrait': [
              {
                'key': 'data_type',
                'rule': 'equal',
                'value': [
                  38,
                ],
              },
            ],
            'extractKey': [
              'crop_category',
              'index',
            ],
            'editKey': [],
          },
        ],
        'sectionName': 'keyValue',
        'dictionary': [
          {
            'attrKey': 'crop_category',
            'order': 1,
            'editOrder': 1,
          },
          {
            'attrKey': 'index',
            'order': 2,
            'editOrder': 2,
          },
        ],
        'defaultEditKey': [],
      },
    ],
  },
  {
    'cardType': 'keyValueCard',
    'cardTitle': {
      'title': 'Frecuencia de inundación',
      'icon': 'iconFlood',
      'color': '#F23A30',
    },
    'sectionView': [
      {
        'sectionTitle': {
          'title': '',
        },
        'extractFunctionName': 'extractObjectByArraySection',
        'extractParams': [
          {
            'dataPath': [
              'payload',
              'flooding_data',
            ],
            'dataTrait': [
              {
                'key': 'data_type',
                'rule': 'equal',
                'value': [
                  36,
                ],
              },
            ],
            'extractKey': [
              'dominant_frequency',
              'max_frequency',
              'duration',
            ],
            'editKey': [],
          },
        ],
        'sectionName': 'keyValue',
        'dictionary': [
          {
            'attrKey': 'dominant_frequency',
            'order': 1,
            'editOrder': 1,
          },
          {
            'attrKey': 'max_frequency',
            'order': 2,
            'editOrder': 2,
          },
          {
            'attrKey': 'duration',
            'order': 3,
            'editOrder': 3,
          },
        ],
        'defaultEditKey': [],
      },
    ],
  },
  {
    'cardType': 'soilComponentCard',
    'cardTitle': {
      'title': 'Suelo',
      'icon': 'iconSoil',
      'color': '#6E4B3F',
    },
    'sectionView': [
      {
        'sectionTitle': {
          'title': '',
          'subtitle': '',
        },
        'extractFunctionName': 'extractObjectByArraySection',
        'extractParams': [
          {
            'dataPath': [
              'payload',
              'soil_component_data',
            ],
            'dataTrait': [
              {
                'key': 'data_type',
                'rule': 'equal',
                'value': [
                  31,
                ],
              },
            ],
            'extractKey': [
              'soil_texture_type',
            ],
            'editKey': [],
          },
        ],
        'sectionName': 'image',
        'dictionary': [
          {
            'attrKey': 'soil_texture_type',
            'order': 1,
            'editOrder': 1,
          },
        ],
        'defaultEditKey': [],
      },
      {
        'sectionTitle': {
          'title': '',
          'subtitle': '',
        },
        'extractFunctionName': 'extractArrayValueByArraySection',
        'extractParams': [
          {
            'dataPath': [
              'payload',
              'soil_component_data',
              'soil_component',
            ],
            'dataTrait': [
              {
                'key': 'data_type',
                'rule': 'equal',
                'value': [
                  31,
                ],
              },
            ],
            'extractKey': [
              'soil_depth_range',
              'soil_depth_level',
              'component_percentage',
              'sand_fraction',
              'silt_fraction',
              'clay_fraction',
              'ph_level',
              'nitrogen_in_ppm',
            ],
            'editKey': [],
          },
        ],
        'sectionName': 'keyValue',
        'dictionary': [
          {
            'attrKey': 'soil_depth_range',
            'decimal': 2,
            'modifier': 1,
            'displayName': {
              'soil_depth_range': 'Rango de Profundidad del Suelo',
            },
            'displayType': 'soil_depth_range',
            'unit': {},
            'validationRules': {},
            'order': 1,
            'editOrder': 1,
          },
          {
            'attrKey': 'soil_depth_level',
            'decimal': 2,
            'modifier': 1,
            'displayName': {
              'soil_depth_level': 'Nivel de Profundidad del Suelo',
            },
            'displayType': 'string',
            'unit': {},
            'validationRules': {},
            'order': 2,
            'editOrder': 2,
          },
          {
            'attrKey': 'component_percentage',
            'order': 3,
            'editOrder': 3,
          },
          {
            'attrKey': 'sand_fraction',
            'order': 4,
            'editOrder': 4,
          },
          {
            'attrKey': 'silt_fraction',
            'order': 5,
            'editOrder': 5,
          },
          {
            'attrKey': 'clay_fraction',
            'order': 6,
            'editOrder': 6,
          },
          {
            'attrKey': 'ph_level',
            'order': 7,
            'editOrder': 7,
          },
          {
            'attrKey': 'nitrogen_in_ppm',
            'order': 8,
            'editOrder': 8,
          },
        ],
        'defaultEditKey': [],
      },
      {
        'sectionTitle': {
          'title': '',
          'subtitle': '',
        },
        'extractFunctionName': 'extractArrayValueByArraySection',
        'extractParams': [
          {
            'dataPath': [
              'payload',
              'soil_component_data',
              'soil_component',
            ],
            'dataTrait': [
              {
                'key': 'data_type',
                'rule': 'equal',
                'value': [
                  31,
                ],
              },
            ],
            'extractKey': [
              'component_name',
            ],
            'editKey': [],
          },
        ],
        'sectionName': 'massage',
        'dictionary': [
          {
            'attrKey': 'component_name',
            'order': 1,
            'editOrder': 1,
          },
        ],
        'defaultEditKey': [],
      },
    ],
  },
];

const editConfig = cardConfig.map((config) => {
  config.sectionView = config.sectionView.map((section) => {
    section.dictionary = section.dictionary.map((dic) => {
      const defaultDic = DICTIONARY.find((d) => d.attrKey === dic.attrKey);
      const mergeDic = defaultDic ? Object.assign(defaultDic, dic) : dic;
      dic.requiredKey = mergeDic.displayName ? Object.keys(mergeDic.displayName) : [mergeDic.attrKey];
      return dic;
    });
    return section;
  });
  return config;
});

const filePath = './src/scripts/config.json';
fs.writeFile(filePath, JSON.stringify({data: editConfig}), (err) => {
  if (err) {
    throw err;
  }
  console.log('追加后的数据 --> success');
});
