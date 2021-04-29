import { DisplayType } from '../../../modules/dynamic-card/interfaces/dictionary.interface';
import {
  CardConfigInterface,
  CardType,
  ExtractType,
  RuleType,
  SectionName
} from '../../../modules/dynamic-card/interfaces/card-config.interface';

// tslint:disable
export const PUBLIC_CROP_TYPE_EN_US: CardConfigInterface[] = [
  // {
  //   cardType: CardType.YIELD_DRIVER_MODEL_CARD,
  //   cardTitle: {
  //     title: 'Yield Effect',
  //     icon: 'iconYieldDrivers',
  //     color: '#4285F4'
  //   },
  //   sectionConfig: [
  //     {
  //       sectionTitle: { title: 'Yield Drivers' },
  //       extractType: ExtractType.ALONE_API_DATA_TO_ALONE_SECTION,
  //       extractParams: [
  //         {
  //           dataPath: ['payload'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: RuleType.EQUAL,
  //               value: [26]
  //             },
  //             {
  //               key: 'domain_key',
  //               rule: RuleType.NOT_INCLUDED,
  //               value: ['ce_corn', 'ce_soybean', 'oes_corn', 'oes_soybean']
  //             }
  //           ],
  //           extractKey: ['yield_driver_model'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: SectionName.KEY_VALUE,
  //       dictionary: [
  //         {
  //           attrKey: 'yield_rate',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['yield_rate']
  //         },
  //         {
  //           attrKey: 'yield_driver_model',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['yield_driver_model']
  //         },
  //         {
  //           attrKey: 'yield_driver_element',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['yield_driver_element']
  //         },
  //         {
  //           attrKey: 'feature_name',
  //           order: 4,
  //           editOrder: 4,
  //           requiredKey: ['feature_name']
  //         }
  //       ],
  //       defaultEditKey: []
  //     }
  //   ],
  //   alwaysShow: false,
  //   cardFooter: { title: '' }
  // },
  {
    cardType: CardType.YIELD_MATRIX_CARD,
    cardTitle: {
      title: 'Estimated Yield',
      icon: 'iconYieldDrivers',
      color: '#009FF2'
    },
    sectionConfig: [
      {
        sectionTitle: { title: '' },
        extractType: ExtractType.ALONE_API_DATA_TO_ALONE_SECTION,
        extractParams: [
          {
            dataPath: ['time_range'],
            dataTrait: [
              {
                key: 'data_type',
                rule: RuleType.EQUAL,
                value: [25]
              }
            ],
            extractKey: ['start'],
            editKey: []
          },
          {
            dataPath: ['payload', 'yield_data', 'yield_matrix'],
            dataTrait: [
              {
                key: 'data_type',
                rule: RuleType.EQUAL,
                value: [25]
              }
            ],
            extractKey: [
              'planted_area_in_acres',
              'harvest_area_in_acres',
              'yield_total_in_bushels',
              'yield_per_acre_in_bushels',
              'yield_per_hacter_in_kg'
            ],
            editKey: []
          },
          {
            dataPath: ['payload', 'yield_data'],
            dataTrait: [
              {
                key: 'data_type',
                rule: RuleType.EQUAL,
                value: [25]
              }
            ],
            extractKey: ['per_crop_yield'],
            editKey: []
          }
        ],
        sectionName: SectionName.KEY_VALUE,
        dictionary: [
          {
            attrKey: 'start',
            order: 1,
            editOrder: 1,
            requiredKey: ['start']
          },
          {
            attrKey: 'per_crop_yield',
            order: 2,
            editOrder: 2,
            requiredKey: ['per_crop_yield']
          },
          {
            attrKey: 'crop_type',
            order: 3,
            editOrder: 3,
            requiredKey: ['crop_type']
          },
          {
            attrKey: 'planted_area_in_acres',
            order: 4,
            editOrder: 4,
            requiredKey: ['planted_area_in_acres']
          },
          {
            attrKey: 'harvest_area_in_acres',
            order: 5,
            editOrder: 5,
            requiredKey: ['harvest_area_in_acres']
          },
          {
            attrKey: 'yield_total_in_bushels',
            order: 6,
            editOrder: 6,
            requiredKey: ['yield_total_in_bushels']
          },
          {
            attrKey: 'yield_total_in_kg',
            order: 7,
            editOrder: 7,
            requiredKey: ['yield_total_in_kg']
          },
          {
            attrKey: 'yield_per_acre_in_bushels',
            order: 8,
            editOrder: 8,
            requiredKey: ['yield_per_acre_in_bushels']
          },
          {
            attrKey: 'yield_per_hacter_in_kg',
            order: 9,
            editOrder: 9,
            requiredKey: ['yield_per_hacter_in_kg']
          }
        ],
        defaultEditKey: []
      },
      {
        sectionTitle: { title: '' },
        extractType: ExtractType.NOT_EXTRACT,
        extractParams: [],
        sectionName: SectionName.MASSAGE,
        dictionary: [
          {
            attrKey: 'massage',
            decimal: 0,
            displayName: {
              massage: 'Yield Data is derived from FieldBrowser\'s modeling technology.'
            },
            displayType: DisplayType.MASSAGE,
            unit: {},
            validationRules: {},
            order: 1,
            editOrder: 1,
            requiredKey: ['massage']
          }
        ],
        defaultEditKey: []
      }
    ],
    alwaysShow: false,
    cardFooter: { title: '' }
  }
  // {
  //   cardType: 'keyValueCard',
  //   cardTitle: {
  //     title: 'Planted Crop',
  //     icon: 'iconPlantvolume',
  //     color: '#F33196'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractCropTypeStatsSection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'crop_type_stats_data', 'crop_type_stats'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [3]
  //             }
  //           ],
  //           extractKey: ['crop_type', 'field_size'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'keyValue',
  //       dictionary: [
  //         {
  //           attrKey: 'crop_type',
  //           decimal: 2,
  //           modifier: 1,
  //           displayName: {
  //             crop_type: 'Crop Types'
  //           },
  //           displayType: 'crop_type',
  //           unit: {},
  //           validationRules: {},
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['crop_type']
  //         },
  //         {
  //           attrKey: 'field_size',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['field_size']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'cropRotationCard',
  //   cardTitle: {
  //     title: 'Crop Rotation',
  //     icon: 'iconCroprotation',
  //     color: '#23B60B'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'crop_rotation_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [28]
  //             }
  //           ],
  //           extractKey: ['confidence', 'rotated_crop_types'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'keyValue',
  //       dictionary: [
  //         {
  //           attrKey: 'rotated_crop_types',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['rotated_crop_types']
  //         },
  //         {
  //           attrKey: 'confidence',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['confidence']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'Rotation History',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [2]
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'crop_types_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [2]
  //             }
  //           ],
  //           extractKey: ['crop_types'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'cropType',
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Crop Type Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'crop_types',
  //           decimal: 2,
  //           modifier: 1,
  //           displayName: {
  //             crop_types: 'Crop Types'
  //           },
  //           displayType: 'crop_type',
  //           unit: {},
  //           validationRules: {
  //             crop_types: [
  //               {
  //                 key: 'required',
  //                 params: []
  //               }
  //             ]
  //           },
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['crop_types']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'cropRotationCard',
  //   cardTitle: {
  //     title: 'Tillage',
  //     icon: 'iconTillage',
  //     color: '#6E4B3F'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [22]
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'tillage'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [22]
  //             }
  //           ],
  //           extractKey: ['tillage_type'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'tillageType',
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Tillage Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'tillage_type',
  //           decimal: 2,
  //           modifier: 1,
  //           displayName: {
  //             tillage_type: 'Tillage Types'
  //           },
  //           displayType: 'tillage_type',
  //           unit: {},
  //           validationRules: {
  //             tillage_type: [
  //               {
  //                 key: 'required',
  //                 params: []
  //               }
  //             ]
  //           },
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['tillage_type']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'cropRotationCard',
  //   cardTitle: {
  //     title: 'Cover Crop',
  //     icon: 'iconCoverCrop',
  //     color: '#6E4B3F'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [34]
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'cover_crop_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [34]
  //             }
  //           ],
  //           extractKey: ['cover_crop_type'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'coverType',
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Cover Crop Type Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'cover_crop_type',
  //           decimal: 2,
  //           modifier: 1,
  //           displayName: {
  //             cover_crop_type: 'Cover Crop Type'
  //           },
  //           displayType: 'cover_crop',
  //           unit: {},
  //           validationRules: {
  //             cover_crop_type: [
  //               {
  //                 key: 'required',
  //                 params: []
  //               }
  //             ]
  //           },
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['cover_crop_type']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'keyValueCard',
  //   cardTitle: {
  //     title: 'Elevation',
  //     icon: 'iconElevation',
  //     color: '#E00ACB'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'elevation_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [5]
  //             }
  //           ],
  //           extractKey: ['elevation_meter', 'slope_degree'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'keyValue',
  //       dictionary: [
  //         {
  //           attrKey: 'elevation_meter',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['elevation_meter']
  //         },
  //         {
  //           attrKey: 'slope_degree',
  //           order: 2,
  //           tooltip:
  //             'Slope is the rate of elevation change. It is calculated using the average gradient between each pixel and its 4 connected neighbors at a resolution of 90M using DEM.',
  //           editOrder: 2,
  //           requiredKey: ['slope_degree']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'keyValueCard',
  //   cardTitle: {
  //     title: 'Field Dimensions',
  //     icon: 'iconstreetview',
  //     color: '#009CA6',
  //     button: 'rotation3D'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'field_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [29]
  //             }
  //           ],
  //           extractKey: ['area_in_hectares', 'compactness', 'rectangularity'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'keyValue',
  //       dictionary: [
  //         {
  //           attrKey: 'area_in_hectares',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['area_in_hectares']
  //         },
  //         {
  //           attrKey: 'compactness',
  //           order: 2,
  //           tooltip:
  //             'Compactness is normalized to an index between 0 to 1. The larger the index, the more compact the field. The calculation for compactness is perimeter² / (4 * π * area).',
  //           editOrder: 2,
  //           requiredKey: ['compactness']
  //         },
  //         {
  //           attrKey: 'rectangularity',
  //           order: 3,
  //           tooltip:
  //             'Squareness is normalized to an index between 0 to 1. At a squareness value of 1, the field is perfectly square.',
  //           editOrder: 3,
  //           requiredKey: ['rectangularity']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'keyValueCard',
  //   cardTitle: {
  //     title: 'Ownership',
  //     icon: 'iconOwnership',
  //     color: '#0066FF'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'ownership_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [39]
  //             }
  //           ],
  //           extractKey: ['owner_name', 'address_line', 'city_name', 'state_name', 'zipcode'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'keyValue',
  //       dictionary: [
  //         {
  //           attrKey: 'owner_name',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['owner_name']
  //         },
  //         {
  //           attrKey: 'address_line',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['address_line']
  //         },
  //         {
  //           attrKey: 'city_name',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['city_name']
  //         },
  //         {
  //           attrKey: 'state_name',
  //           order: 4,
  //           editOrder: 4,
  //           requiredKey: ['state_name']
  //         },
  //         {
  //           attrKey: 'zipcode',
  //           order: 5,
  //           editOrder: 5,
  //           requiredKey: ['zipcode']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'keyValueCard',
  //   cardTitle: {
  //     title: 'Distance',
  //     icon: 'iconDistance',
  //     color: '#6E4B3F'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'distance_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [4]
  //             }
  //           ],
  //           extractKey: [
  //             'distance_to_water_in_meters',
  //             'distance_to_road_in_meters',
  //             'distance_to_town_in_meters'
  //           ],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'keyValue',
  //       dictionary: [
  //         {
  //           attrKey: 'distance_to_water_in_meters',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['distance_to_water_in_meters']
  //         },
  //         {
  //           attrKey: 'distance_to_road_in_meters',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['distance_to_road_in_meters']
  //         },
  //         {
  //           attrKey: 'distance_to_town_in_meters',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['distance_to_town_in_meters']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'keyValueCard',
  //   cardTitle: {
  //     title: 'Crop Productivity Index',
  //     icon: 'iconPlantvolume',
  //     color: '#FF8D02'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractArrayByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'crop_productivity_index_data', 'productivity_index'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [38]
  //             }
  //           ],
  //           extractKey: ['crop_category', 'index'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'table',
  //       dictionary: [
  //         {
  //           attrKey: 'crop_category',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['crop_category']
  //         },
  //         {
  //           attrKey: 'index',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['index']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'keyValueCard',
  //   cardTitle: {
  //     title: 'Flood Frequency',
  //     icon: 'iconFlood',
  //     color: '#F23A30'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'flooding_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [36]
  //             }
  //           ],
  //           extractKey: ['dominant_frequency', 'max_frequency', 'duration'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'keyValue',
  //       dictionary: [
  //         {
  //           attrKey: 'dominant_frequency',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['dominant_frequency']
  //         },
  //         {
  //           attrKey: 'max_frequency',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['max_frequency']
  //         },
  //         {
  //           attrKey: 'duration',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['duration']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'soilComponentCard',
  //   cardTitle: {
  //     title: 'Soil',
  //     icon: 'iconSoil',
  //     color: '#6E4B3F'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'soil_component_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [31]
  //             }
  //           ],
  //           extractKey: ['soil_texture_type'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'image',
  //       dictionary: [
  //         {
  //           attrKey: 'soil_texture_type',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['soil_texture_type']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractArrayValueByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'soil_component_data', 'soil_component'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [31]
  //             }
  //           ],
  //           extractKey: [
  //             'soil_depth_range',
  //             'soil_depth_level',
  //             'component_percentage',
  //             'sand_fraction',
  //             'silt_fraction',
  //             'clay_fraction',
  //             'ph_level',
  //             'nitrogen_in_ppm',
  //             'texture_type'
  //           ],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'keyValue',
  //       dictionary: [
  //         {
  //           attrKey: 'soil_depth_range',
  //           decimal: 2,
  //           modifier: 1,
  //           displayName: {
  //             soil_depth_range: 'Soil Depth Range'
  //           },
  //           displayType: 'soil_depth_range',
  //           unit: {},
  //           validationRules: {},
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['soil_depth_range']
  //         },
  //         {
  //           attrKey: 'soil_depth_level',
  //           decimal: 2,
  //           modifier: 1,
  //           displayName: {
  //             soil_depth_level: 'Soil Depth Level'
  //           },
  //           displayType: 'string',
  //           unit: {},
  //           validationRules: {},
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['soil_depth_level']
  //         },
  //         {
  //           attrKey: 'component_percentage',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['component_percentage']
  //         },
  //         {
  //           attrKey: 'sand_fraction',
  //           order: 4,
  //           editOrder: 4,
  //           requiredKey: ['sand_fraction']
  //         },
  //         {
  //           attrKey: 'silt_fraction',
  //           order: 5,
  //           editOrder: 5,
  //           requiredKey: ['silt_fraction']
  //         },
  //         {
  //           attrKey: 'clay_fraction',
  //           order: 6,
  //           editOrder: 6,
  //           requiredKey: ['clay_fraction']
  //         },
  //         {
  //           attrKey: 'ph_level',
  //           order: 7,
  //           editOrder: 7,
  //           requiredKey: ['ph_level']
  //         },
  //         {
  //           attrKey: 'nitrogen_in_ppm',
  //           order: 8,
  //           editOrder: 8,
  //           requiredKey: ['nitrogen_in_ppm']
  //         },
  //         {
  //           attrKey: 'texture_type',
  //           order: 9,
  //           editOrder: 9,
  //           requiredKey: ['texture_type']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractArrayValueByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'soil_component_data', 'soil_component'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [31]
  //             }
  //           ],
  //           extractKey: ['component_name'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'massage',
  //       dictionary: [
  //         {
  //           attrKey: 'component_name',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['component_name']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'keyValueCard',
  //   cardTitle: {
  //     title: 'Soil Organic Carbon (%)',
  //     icon: 'iconSoil',
  //     color: '#8B2806'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractArrayByArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'soil_organic_matter', 'soil_organic_matter'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [40]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'SOC',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['soil_depth_range', 'organic_carbon'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'table',
  //       dictionary: [
  //         {
  //           attrKey: 'soil_depth_range',
  //           decimal: 0,
  //           modifier: 1,
  //           displayName: {
  //             soil_depth_range: 'Depth'
  //           },
  //           displayType: 'soil_depth_range',
  //           unit: {
  //             soil_depth_range: 'inches'
  //           },
  //           validationRules: {},
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['soil_depth_range']
  //         },
  //         {
  //           attrKey: 'soil_depth_level',
  //           decimal: 0,
  //           modifier: 1,
  //           displayName: {
  //             soil_depth_level: 'Soil Depth Level'
  //           },
  //           displayType: 'string',
  //           unit: {},
  //           validationRules: {},
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['soil_depth_level']
  //         },
  //         {
  //           attrKey: 'organic_carbon',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['organic_carbon']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'chartCard',
  //   cardTitle: {
  //     title: 'Carbon Attributes',
  //     icon: 'iconSOC',
  //     color: '#2b2b2b'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: 'Estimated Yield (lbs/ac)',
  //         subtitle: '',
  //         tooltip: 'The yield estimation based on the soil components in lb/ac.'
  //       },
  //       extractFunctionName: 'extractArrayValueByMultiArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'soil_organic_matter', 'soil_organic_matter'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['yield_estimated_lb_per_acre'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'table',
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           displayType: 'date_year',
  //           displayName: { start: 'Year' },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'yield_estimated_lb_per_acre',
  //           displayName: { yield_estimated_lb_per_acre: 'Estimated Yield' },
  //           displayType: 'average',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['yield_estimated_lb_per_acre']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'Soil Moisture (m³/m³)',
  //         subtitle: '',
  //         tooltip: 'The soil moisture in m3/m3.'
  //       },
  //       extractFunctionName: 'extractArrayValueByMultiArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'soil_organic_matter', 'soil_organic_matter'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['soil_mositure_m3_per_m3'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           displayName: {
  //             start: 'Year'
  //           },
  //           displayType: 'date',
  //           order: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'soil_mositure_m3_per_m3',
  //           displayName: {
  //             soil_mositure_m3_per_m3: 'Soil Moisture(m³/m³)'
  //           },
  //           displayType: 'statistical_values',
  //           order: 2,
  //           modifier: 100,
  //           decimal: 2,
  //           unit: { soil_mositure_m3_per_m3: 'percentage' },
  //           requiredKey: ['soil_mositure_m3_per_m3']
  //         }
  //       ],
  //       sectionName: 'statisticValueChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'Soil Organic Carbon (gC/m²)',
  //         subtitle: '',
  //         tooltip: 'The organic carbon content in gC/m².'
  //       },
  //       extractFunctionName: 'extractArrayValueByMultiArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'soil_organic_matter', 'soil_organic_matter'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['organic_carbon_gc_per_m2'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           displayName: {
  //             start: 'Year'
  //           },
  //           displayType: 'date',
  //           order: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'organic_carbon_gc_per_m2',
  //           displayName: {
  //             organic_carbon_gc_per_m2: 'Soil Organic Carbon(gC/m²)'
  //           },
  //           displayType: 'statistical_values',
  //           order: 2,
  //           decimal: 0,
  //           requiredKey: ['organic_carbon_gc_per_m2']
  //         }
  //       ],
  //       sectionName: 'statisticValueChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'GHG Flux (CO₂e g/m²)',
  //         subtitle: '',
  //         tooltip:
  //           'Greenhouse gases constitute a group of gases contributing to global warming and climate change. Converted them to carbon dioxide equivalents from the non-fluorinated gases (co1, ch4, and n2o).'
  //       },
  //       extractFunctionName: 'extractArrayValueByMultiArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'soil_organic_matter', 'soil_organic_matter'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: [
  //             'ch4_flux_gc_per_m2_day',
  //             'co2_flux_gc_per_m2_day',
  //             'n2o_flux_gn_per_m2_day'
  //           ],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           displayName: {
  //             start: 'Year'
  //           },
  //           displayType: 'date',
  //           order: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'co2_flux_gc_per_m2_day',
  //           displayName: {
  //             co2_flux_gc_per_m2_day: 'GHG flux (g/m²)'
  //           },
  //           displayType: 'statistical_values',
  //           order: 2,
  //           decimal: 2,
  //           requiredKey: ['co2_flux_gc_per_m2_day']
  //         },
  //         {
  //           attrKey: 'ch4_flux_gc_per_m2_day',
  //           displayName: {
  //             ch4_flux_gc_per_m2_day: 'GHG flux (g/m²)'
  //           },
  //           displayType: 'statistical_values',
  //           order: 3,
  //           decimal: 2,
  //           requiredKey: ['ch4_flux_gc_per_m2_day']
  //         },
  //         {
  //           attrKey: 'n2o_flux_gn_per_m2_day',
  //           displayName: {
  //             n2o_flux_gn_per_m2_day: 'GHG flux (g/m²)'
  //           },
  //           displayType: 'statistical_values',
  //           order: 4,
  //           decimal: 2,
  //           requiredKey: ['n2o_flux_gn_per_m2_day']
  //         }
  //       ],
  //       sectionName: 'statisticGHGFluxChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'Gross Primary Production of Carbon (gC/m²)',
  //         subtitle: '',
  //         tooltip: 'The gross primary production of carbon in gC/m²/day.'
  //       },
  //       extractFunctionName: 'extractArrayValueByMultiArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'soil_organic_matter', 'soil_organic_matter'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['gross_primary_production_gc_m2_day'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           displayName: {
  //             start: 'Year'
  //           },
  //           displayType: 'date',
  //           order: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'gross_primary_production_gc_m2_day',
  //           displayName: {
  //             gross_primary_production_gc_m2_day: 'Gross Primary Production of Carbon (gC/m²)'
  //           },
  //           displayType: 'statistical_values',
  //           order: 2,
  //           decimal: 2,
  //           requiredKey: ['gross_primary_production_gc_m2_day']
  //         }
  //       ],
  //       sectionName: 'statisticValueChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'Autotrophic Respiration (gC/m²)',
  //         subtitle: '',
  //         tooltip: 'Autotrophic respiration (Ra) in gC/m²/day.'
  //       },
  //       extractFunctionName: 'extractArrayValueByMultiArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'soil_organic_matter', 'soil_organic_matter'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['autotrophic_respiration_gc_m2_day'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           displayName: {
  //             start: 'Year'
  //           },
  //           displayType: 'date',
  //           order: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'autotrophic_respiration_gc_m2_day',
  //           displayName: {
  //             autotrophic_respiration_gc_m2_day: 'Autotrophic Respiration (gC/m²)'
  //           },
  //           displayType: 'statistical_values',
  //           order: 2,
  //           decimal: 2,
  //           requiredKey: ['autotrophic_respiration_gc_m2_day']
  //         }
  //       ],
  //       sectionName: 'statisticValueChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'Heterotrophic Respiration (gC/m²)',
  //         subtitle: '',
  //         tooltip: 'Heterotrophic respiration (Rh) in gC/m²/day.'
  //       },
  //       extractFunctionName: 'extractArrayValueByMultiArraySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'soil_organic_matter', 'soil_organic_matter'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [DataType.SOIL_ORGANIC_MATTER_DATA]
  //             },
  //             {
  //               key: 'soil_organic_matter',
  //               rule: 'carbonAttribute',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['heterotrophic_respiration_gc_m2_day'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           displayName: {
  //             start: 'Year'
  //           },
  //           displayType: 'date',
  //           order: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'heterotrophic_respiration_gc_m2_day',
  //           displayName: {
  //             heterotrophic_respiration_gc_m2_day: 'Heterotrophic Respiration (gC/m²)'
  //           },
  //           displayType: 'statistical_values',
  //           order: 2,
  //           decimal: 2,
  //           requiredKey: ['heterotrophic_respiration_gc_m2_day']
  //         }
  //       ],
  //       sectionName: 'statisticValueChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'chartCard',
  //   cardTitle: {
  //     title: 'NDVI',
  //     icon: 'iconNDVI',
  //     color: '#F40067'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [18]
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'satellite_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [18]
  //             }
  //           ],
  //           extractKey: ['histogram_of_ndvi'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'histogram_of_ndvi',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['histogram_of_ndvi']
  //         }
  //       ],
  //       sectionName: 'columnChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'chartCard',
  //   cardTitle: {
  //     title: 'Daily NDVI',
  //     icon: 'iconNDVI',
  //     color: '#F40067',
  //     button: 'selectYears'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [45]
  //             },
  //             {
  //               key: 'data_source_tag',
  //               rule: 'equal',
  //               value: [2]
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'satellite_feature_data', 'histograms', '0', 'histogram'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [45]
  //             },
  //             {
  //               key: 'data_source_tag',
  //               rule: 'equal',
  //               value: [2]
  //             }
  //           ],
  //           extractKey: ['statistical_value'],
  //           editKey: []
  //         }
  //       ],
  //       sectionName: 'dayLineChart',
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'statistical_value',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['statistical_value']
  //         }
  //       ],
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'chartCard',
  //   cardTitle: {
  //     title: 'Growing Degree Days',
  //     icon: 'iconYieldDrivers',
  //     color: '#43A547'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [11]
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'growing_degrees_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [11]
  //             }
  //           ],
  //           extractKey: ['growing_degrees_day'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Year'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'growing_degrees_day',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['growing_degrees_day']
  //         }
  //       ],
  //       sectionName: 'columnChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'chartCard',
  //   cardTitle: {
  //     title: 'End-Start Frosting Date',
  //     icon: 'iconfrosting',
  //     color: '#0066FF'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [37]
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'frost_day_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [37]
  //             }
  //           ],
  //           extractKey: ['last_frost_time', 'first_frost_time'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'last_frost_time',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['last_frost_time']
  //         },
  //         {
  //           attrKey: 'first_frost_time',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['first_frost_time']
  //         }
  //       ],
  //       sectionName: 'timelineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'chartCard',
  //   cardTitle: {
  //     title: 'Climate',
  //     icon: 'iconChart',
  //     color: '#FFA800',
  //     button: 'selectYears'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: 'TEMPERATURE (°F)',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: [
  //             'min_temperature_in_celsius_degrees',
  //             'max_temperature_in_celsius_degrees'
  //           ],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'min_temperature_in_celsius_degrees',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['min_temperature_in_celsius_degrees']
  //         },
  //         {
  //           attrKey: 'max_temperature_in_celsius_degrees',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['max_temperature_in_celsius_degrees']
  //         }
  //       ],
  //       sectionName: 'monthLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'PRECIPITATION (mm)',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['precipitation_accumulation_in_mms'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'precipitation_accumulation_in_mms',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['precipitation_accumulation_in_mms']
  //         }
  //       ],
  //       sectionName: 'monthLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'EVAPOTRANSPIRATION (mm)',
  //         subtitle: '',
  //         tooltip:
  //           'Evapotranspiration is the rate at which evaporation from land surfaces and plant transpiration is transferred to the atmosphere.'
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['actual_evapotranspiration_in_mms', 'reference_evapotranspiration_in_mms'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'actual_evapotranspiration_in_mms',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['actual_evapotranspiration_in_mms']
  //         },
  //         {
  //           attrKey: 'reference_evapotranspiration_in_mms',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['reference_evapotranspiration_in_mms']
  //         }
  //       ],
  //       sectionName: 'monthLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'CLIMATE WATER DEFICIT (mm)',
  //         subtitle: '',
  //         tooltip:
  //           'Climate water deficit is the amount of water by which the expected evapotranspiration as determined by climate conditions exceeds actual evapotranspiration. Positive amounts represent a proxy for drought.'
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['climate_water_deficit_in_mms'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'climate_water_deficit_in_mms',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['climate_water_deficit_in_mms']
  //         }
  //       ],
  //       sectionName: 'monthLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'VAPOR PRESSURE (kPa)',
  //         subtitle: '',
  //         tooltip:
  //           'Vapor pressure deficit (VPD) is the difference between the amount of moisture in the air and the amount of moisture the air can hold. VPD is used by operators to prevent rot and avoid drying out the crop.'
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['vapor_pressure_in_kpa', 'vapor_pressure_deficit_in_kpa'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'vapor_pressure_in_kpa',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['vapor_pressure_in_kpa']
  //         },
  //         {
  //           attrKey: 'vapor_pressure_deficit_in_kpa',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['vapor_pressure_deficit_in_kpa']
  //         }
  //       ],
  //       sectionName: 'monthLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'PALMER DROUGHT SEVERITY',
  //         subtitle: '',
  //         tooltip:
  //           'The Palmer Drought Severity Index (PDSI) is an estimate of relative dryness. Index is normalized to a range of -10 (dry) to +10 (wet), though typical values are between -4 and 4. PDSI has been reasonably successful at quantifying long-term drought.'
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['palmer_drought_severity_index'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'palmer_drought_severity_index',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['palmer_drought_severity_index']
  //         }
  //       ],
  //       sectionName: 'monthLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'DOWNWARD SURFACE SHORTWAVE RADIATION (W/m²)',
  //         subtitle: '',
  //         tooltip:
  //           'Downward shortwave radiation is an estimate of the total amount of shortwave radiation (both direct and diffuse) that reaches the Earth’s surface.'
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['downward_surface_shortwave_radiation_in_watt_per_m2'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'downward_surface_shortwave_radiation_in_watt_per_m2',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['downward_surface_shortwave_radiation_in_watt_per_m2']
  //         }
  //       ],
  //       sectionName: 'monthLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'WIND SPEED (m/s)',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['wind_speed_in_meter_per_second'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'wind_speed_in_meter_per_second',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['wind_speed_in_meter_per_second']
  //         }
  //       ],
  //       sectionName: 'monthLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'SNOW WATER AND RUNOFF (mm)',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['water_runoff_in_mms', 'snow_water_equivalent_in_mms'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'water_runoff_in_mms',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['water_runoff_in_mms']
  //         },
  //         {
  //           attrKey: 'snow_water_equivalent_in_mms',
  //           order: 3,
  //           editOrder: 3,
  //           requiredKey: ['snow_water_equivalent_in_mms']
  //         }
  //       ],
  //       sectionName: 'monthLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     },
  //     {
  //       sectionTitle: {
  //         title: 'SOIL MOISTURE (mm)',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'monthLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['soil_moisture_in_mms'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'soil_moisture_in_mms',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['soil_moisture_in_mms']
  //         }
  //       ],
  //       sectionName: 'monthLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'chartCard',
  //   cardTitle: {
  //     title: 'Daily Precipitation',
  //     icon: 'iconChart',
  //     color: '#FFA800',
  //     button: 'selectYears'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractObjectBySection',
  //       extractParams: [
  //         {
  //           dataPath: ['time_range'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'dayLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['start'],
  //           editKey: []
  //         },
  //         {
  //           dataPath: ['payload', 'climate_data'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [21]
  //             },
  //             {
  //               key: 'time_range',
  //               rule: 'dayLine',
  //               value: []
  //             }
  //           ],
  //           extractKey: ['precipitation_accumulation_in_mms'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'start',
  //           decimal: 0,
  //           displayName: {
  //             start: 'Start Date'
  //           },
  //           displayType: 'date',
  //           unit: {},
  //           validationRules: {
  //             start: [
  //               {
  //                 key: 'chemicalApplication',
  //                 params: ['start']
  //               }
  //             ]
  //           },
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['start']
  //         },
  //         {
  //           attrKey: 'precipitation_accumulation_in_mms',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['precipitation_accumulation_in_mms']
  //         }
  //       ],
  //       sectionName: 'dayLineChart',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // },
  // {
  //   cardType: 'keyValueCard',
  //   cardTitle: {
  //     title: 'Agro Ecological Zone',
  //     icon: 'iconAZE',
  //     color: '#009CA6'
  //   },
  //   sectionView: [
  //     {
  //       sectionTitle: {
  //         title: '',
  //         subtitle: ''
  //       },
  //       extractFunctionName: 'extractAEZSection',
  //       extractParams: [
  //         {
  //           dataPath: ['payload', 'agro_ecology_zone_data', 'zones'],
  //           dataTrait: [
  //             {
  //               key: 'data_type',
  //               rule: 'equal',
  //               value: [44]
  //             }
  //           ],
  //           extractKey: ['cluster_annotation', 'hierarchical_label'],
  //           editKey: []
  //         }
  //       ],
  //       dictionary: [
  //         {
  //           attrKey: 'hierarchical_label',
  //           order: 1,
  //           editOrder: 1,
  //           requiredKey: ['hierarchical_label']
  //         },
  //         {
  //           attrKey: 'cluster_annotation',
  //           order: 2,
  //           editOrder: 2,
  //           requiredKey: ['cluster_annotation']
  //         }
  //       ],
  //       sectionName: 'keyValue',
  //       defaultEditKey: [],
  //       showOption: true,
  //       clickEvent: false
  //     }
  //   ]
  // }
];
