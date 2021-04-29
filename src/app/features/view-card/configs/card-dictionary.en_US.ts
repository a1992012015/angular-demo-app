import { DictionaryInterface, DisplayType } from '../../../modules/dynamic-card/interfaces/dictionary.interface';

export const CARD_DICTIONARY_EN_US: DictionaryInterface[] = [
  {
    attrKey: 'genetics',
    decimal: 0,
    modifier: 1,
    displayName: { genetics: 'Seed type/genotype' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'genetic_event',
    decimal: 0,
    modifier: 1,
    displayName: { genetic_event: 'Genetic Event' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'previous_crop',
    decimal: 0,
    modifier: 1,
    displayName: { previous_crop: 'Previous Crops' },
    displayType: DisplayType.CROP_TYPE,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'seed_protector',
    decimal: 0,
    modifier: 1,
    displayName: { seed_protector: 'Seed Protector' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'seed_protector_description',
    decimal: 0,
    modifier: 1,
    displayName: { seed_protector_description: 'Protector Description' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'space_between_rows_m',
    decimal: 0,
    modifier: 1,
    displayName: { space_between_rows_m: 'Space Between Rows' },
    displayType: DisplayType.NUMBER,
    unit: { space_between_rows_m: 'cm' },
    validationRules: {
      space_between_rows_m: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ]
    }
  },
  {
    attrKey: 'seeds_per_m2',
    decimal: 2,
    modifier: 1,
    displayName: {
      seeds_per_m2: 'Seed Density',
      target: 'Seed Density - Target',
      result: 'Seed Density - Actual'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: { seeds_per_m2: 'seeds_per_m2', target: 'seeds_per_m2', result: 'seeds_per_m2' },
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'kg_per_m2',
    decimal: 2,
    modifier: 1,
    displayName: {
      kg_per_m2: 'Seed Weight',
      target: 'Seed Weight - Target',
      result: 'Seed Weight - Actual'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: { kg_per_m2: 'kg_per_ha', target: 'kg_per_ha', result: 'kg_per_ha' },
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'plant_per_m2',
    decimal: 2,
    modifier: 1,
    displayName: {
      plant_per_m2: 'Plant Density',
      target: 'Plant Density - Target',
      result: 'Plant Density - Actual'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: { plant_per_m2: 'plants_per_m2', target: 'plants_per_m2', result: 'plants_per_m2' },
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'achievement_coefficiency',
    decimal: 2,
    modifier: 100,
    displayName: {
      achievement_coefficiency: 'Achievement Coefficiency',
      target: 'Achievement Coefficiency - Target',
      result: 'Achievement Coefficiency - Actual'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: { achievement_coefficiency: 'percentage', target: 'percentage', result: 'percentage' },
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, false, true] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'kg_per_1000_seeds',
    decimal: 3,
    modifier: 1,
    displayName: { kg_per_1000_seeds: '1000 Seed Weight' },
    displayType: DisplayType.NUMBER,
    unit: { kg_per_1000_seeds: 'kg', target: 'kg', result: 'kg' },
    validationRules: {
      kg_per_1000_seeds: [
        { key: 'decimal', params: [0, 3] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'germinative_power',
    decimal: 2,
    modifier: 100,
    displayName: { germinative_power: 'Germinative Power' },
    displayType: DisplayType.NUMBER,
    unit: { germinative_power: 'percentage', target: 'percentage', result: 'percentage' },
    validationRules: {
      germinative_power: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'uniformity',
    decimal: 2,
    modifier: 100,
    displayName: { uniformity: 'Uniformity of Sowing' },
    displayType: DisplayType.NUMBER,
    unit: { uniformity: 'percentage', target: 'percentage', result: 'percentage' },
    validationRules: {
      uniformity: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, false, true] }
      ]
    }
  },
  {
    attrKey: 'crop_class',
    decimal: 0,
    modifier: 1,
    displayName: { crop_class: 'Crop Class' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'expected_yield_kg_per_m2',
    decimal: 0,
    modifier: 1,
    displayName: { expected_yield_kg_per_m2: 'Expected Yield' },
    displayType: DisplayType.NUMBER,
    unit: { expected_yield_kg_per_m2: 'kg_per_ha', target: 'kg_per_ha', result: 'kg_per_ha' },
    validationRules: {
      expected_yield_kg_per_m2: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ]
    }
  },
  {
    attrKey: 'cycle_duration',
    decimal: 0,
    modifier: 1,
    displayName: { cycle_duration: 'Cycle Duration' },
    displayType: DisplayType.CYCLE_DURATION,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'dose_kg_per_m2',
    decimal: 3,
    modifier: 1,
    displayName: {
      dose_kg_per_m2: 'Fertilizer Dose',
      target: 'Fertilizer Dose - Target',
      result: 'Fertilizer Dose - Actual'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: { dose_kg_per_m2: 'kg_per_ha', target: 'kg_per_ha', result: 'kg_per_ha' },
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 3] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ],
      result: [
        { key: 'decimal', params: [0, 3] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ]
    }
  },
  {
    attrKey: 'nitrogen_fraction',
    decimal: 2,
    modifier: 100,
    displayName: { nitrogen_fraction: 'Nitrogen' },
    displayType: DisplayType.NUMBER,
    unit: { nitrogen_fraction: 'percentage' },
    validationRules: {
      nitrogen_fraction: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'phosphate_fraction',
    decimal: 2,
    modifier: 100,
    displayName: { phosphate_fraction: 'Phosphate' },
    displayType: DisplayType.NUMBER,
    unit: { phosphate_fraction: 'percentage' },
    validationRules: {
      phosphate_fraction: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'sulphur_fraction',
    decimal: 2,
    modifier: 100,
    displayName: { sulphur_fraction: 'Sulfur' },
    displayType: DisplayType.NUMBER,
    unit: { sulphur_fraction: 'percentage' },
    validationRules: {
      sulphur_fraction: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'potash_fraction',
    decimal: 2,
    modifier: 100,
    displayName: { potash_fraction: 'Potash' },
    displayType: DisplayType.NUMBER,
    unit: { potash_fraction: 'percentage' },
    validationRules: {
      potash_fraction: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'actual_yield',
    decimal: 0,
    modifier: 1,
    displayName: {
      actual_yield: 'Actual Yield',
      volume_liter: 'Actual Yield Volume',
      mass_kg: 'Actual Yield Weight'
    },
    displayType: DisplayType.VOLUME_MASS,
    unit: {
      volume_liter: 'L_per_ha',
      mass_kg: 'kg_per_ha'
    },
    validationRules: {}
  },
  {
    attrKey: 'predicted_yield',
    decimal: 0,
    modifier: 1,
    displayName: {
      predicted_yield: 'Predicted Yield',
      volume_liter: 'Predicted Yield Volume',
      mass_kg: 'Predicted Yield Weight'
    },
    displayType: DisplayType.VOLUME_MASS,
    unit: {
      volume_liter: 'L_per_ha',
      mass_kg: 'kg_per_ha'
    },
    validationRules: {
      volume_liter: [{ key: 'range', params: [0, 'MAX', true, false] }],
      mass_kg: [{ key: 'range', params: [0, 'MAX', true, false] }]
    }
  },
  {
    attrKey: 'yield_driver_element',
    decimal: 0,
    modifier: 1,
    displayName: {},
    displayType: DisplayType.ELEMENT,
    unit: { yield_driver_element: 'kg_per_ha' },
    validationRules: {}
  },
  {
    attrKey: 'yield_rate',
    decimal: 2,
    modifier: 100,
    displayName: { yield_rate: 'Yield Rate prediction' },
    displayType: DisplayType.RETE,
    unit: { yield_rate: 'percentage' },
    validationRules: {
      yield_rate: [{ key: 'range', params: [0, 'MAX', true, false] }]
    }
  },
  {
    attrKey: 'yield_kg_per_ha',
    decimal: 0,
    modifier: 1,
    displayName: { yield_kg_per_ha: 'Yield' },
    displayType: DisplayType.NUMBER,
    unit: { yield_kg_per_ha: 'kg_per_ha' },
    validationRules: {
      yield_kg_per_ha: [{ key: 'range', params: [0, 'MAX', true, false] }]
    }
  },
  {
    attrKey: 'disease_reason',
    decimal: 0,
    modifier: 1,
    displayName: { disease_reason: 'Disease Reason' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'disease_type',
    decimal: 0,
    modifier: 1,
    displayName: { disease_type: 'Disease Type' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'disease_controlled',
    decimal: 0,
    modifier: 1,
    displayName: { disease_controlled: 'Disease Controlled' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'application_name',
    decimal: 0,
    modifier: 1,
    displayName: { application_name: 'Application Name' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'application_type',
    decimal: 0,
    modifier: 1,
    displayName: { application_type: 'Application Type' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'application_method',
    decimal: 0,
    modifier: 1,
    displayName: { application_method: 'Application Method' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'material_unit',
    decimal: 0,
    modifier: 1,
    displayName: { material_unit: 'Material Unit' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'total_material',
    decimal: 2,
    modifier: 1,
    displayName: {
      total_material: 'Total Material',
      target: 'Total Material - Target',
      result: 'Total Material - Result'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: {},
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'average_material_per_ha',
    decimal: 2,
    modifier: 1,
    displayName: {
      average_material_per_ha: 'Avg. Material',
      target: 'Avg. Material - Target',
      result: 'Avg. Material - Result'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: {},
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'average_speed_km_per_hour',
    decimal: 2,
    modifier: 1,
    displayName: {
      average_speed_km_per_hour: 'Avg. Speed',
      target: 'Avg. Speed - Target',
      result: 'Avg. Speed - Result'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: {
      average_speed_km_per_hour: 'km_per_hour',
      target: 'km_per_hour',
      result: 'km_per_hour'
    },
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'area_ha',
    decimal: 2,
    modifier: 1,
    displayName: {
      area_ha: 'Area',
      target: 'Area - Target',
      result: 'Area - Result'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: { area_ha: 'ha', target: 'ha', result: 'ha' },
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'crop_descripiton',
    decimal: 0,
    modifier: 1,
    displayName: { crop_descripiton: 'Crop Description' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'yield_per_m2_planted',
    decimal: 0,
    modifier: 1,
    displayName: {
      yield_per_m2_planted: 'Planted Yield',
      volume_liter: 'Planted Yield Volume',
      mass_kg: 'Planted Yield Weight'
    },
    displayType: DisplayType.VOLUME_MASS,
    unit: { volume_liter: 'L_per_ha_to_bushel', mass_kg: 'kg_per_ha' },
    validationRules: {
      volume_liter: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ],
      mass_kg: [
        { key: 'decimal', params: [0, 1] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'yield_per_m2_harvested',
    decimal: 0,
    modifier: 1,
    displayName: {
      yield_per_m2_harvested: 'Harvested Yield',
      volume_liter: 'Harvested Yield Volume',
      mass_kg: 'Harvested Yield Weight'
    },
    displayType: DisplayType.VOLUME_MASS,
    unit: { volume_liter: 'L_per_ha_to_bushel', mass_kg: 'kg_per_ha' },
    validationRules: {
      volume_liter: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ],
      mass_kg: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'total_production',
    decimal: 0,
    modifier: 1,
    displayName: {
      total_production: 'Total Production',
      volume_liter: 'Total Production Volume',
      mass_kg: 'Total Production Weight'
    },
    displayType: DisplayType.VOLUME_MASS,
    unit: { volume_liter: 'L_per_ha', mass_kg: 'kg_per_ha' },
    validationRules: {
      volume_liter: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ],
      mass_kg: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'wet_yield_per_m2_planted',
    decimal: 0,
    modifier: 1,
    displayName: {
      wet_yield_per_m2_planted: 'Planted Wet Yield',
      volume_liter: 'Planted Wet Yield Volume',
      mass_kg: 'Planted Wet Yield Weight'
    },
    displayType: DisplayType.VOLUME_MASS,
    unit: { volume_liter: 'L_per_ha', mass_kg: 'kg_per_ha' },
    validationRules: {
      volume_liter: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ],
      mass_kg: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'wet_yield_per_m2_harvested',
    decimal: 0,
    modifier: 1,
    displayName: {
      wet_yield_per_m2_harvested: 'Harvested Wet Yield',
      volume_liter: 'Harvested Wet Yield Volume',
      mass_kg: 'Harvested Wet Yield Weight'
    },
    displayType: DisplayType.VOLUME_MASS,
    unit: { volume_liter: 'L_per_ha', mass_kg: 'kg_per_ha' },
    validationRules: {
      volume_liter: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ],
      mass_kg: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'wet_total_yield',
    decimal: 0,
    modifier: 1,
    displayName: {
      wet_total_yield: 'Wet Total Production',
      volume_liter: 'Wet Total Production Volume',
      mass_kg: 'Wet Total Production Weight'
    },
    displayType: DisplayType.VOLUME_MASS,
    unit: { volume_liter: 'L_per_ha', mass_kg: 'kg_per_ha' },
    validationRules: {
      volume_liter: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ],
      mass_kg: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'average_moisture',
    decimal: 2,
    modifier: 1,
    displayName: { average_moisture: 'Harvest Average Moisture' },
    displayType: DisplayType.NUMBER,
    unit: { average_moisture: 'percentage' },
    validationRules: {
      average_moisture: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'number_of_spikes_per_m2',
    decimal: 2,
    modifier: 1,
    displayName: { number_of_spikes_per_m2: 'Spike Density' },
    displayType: DisplayType.NUMBER,
    unit: { number_of_spikes_per_m2: 'spikes_per_m2' },
    validationRules: {
      number_of_spikes_per_m2: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'number_of_beads_per_spike',
    decimal: 2,
    modifier: 1,
    displayName: { number_of_beads_per_spike: 'Beads Density on Spike' },
    displayType: DisplayType.NUMBER,
    unit: { number_of_beads_per_spike: 'beads_per_spike' },
    validationRules: {
      number_of_beads_per_spike: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'gluten',
    decimal: 2,
    modifier: 100,
    displayName: { gluten: 'Gluten Percentage' },
    displayType: DisplayType.NUMBER,
    unit: { gluten: 'percentage' },
    validationRules: {
      gluten: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'protein',
    decimal: 2,
    modifier: 100,
    displayName: { protein: 'Protein Percentage' },
    displayType: DisplayType.NUMBER,
    unit: { protein: 'percentage' },
    validationRules: {
      protein: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'caliber',
    decimal: 2,
    modifier: 100,
    displayName: { caliber: 'Caliber Percentage' },
    displayType: DisplayType.NUMBER,
    unit: { caliber: 'percentage' },
    validationRules: {
      caliber: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'fat_matter_fraction',
    decimal: 2,
    modifier: 100,
    displayName: { fat_matter_fraction: 'Fat Matter Percentage' },
    displayType: DisplayType.NUMBER,
    unit: { fat_matter_fraction: 'percentage' },
    validationRules: {
      fat_matter_fraction: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'sand_fraction_in_topsoil',
    decimal: 2,
    modifier: 100,
    displayName: { sand_fraction_in_topsoil: 'Topsoil Sand Fraction' },
    displayType: DisplayType.NUMBER,
    unit: { sand_fraction_in_topsoil: 'percentage' },
    validationRules: {
      sand_fraction_in_topsoil: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'lime_fraction_in_topsoil',
    decimal: 2,
    modifier: 100,
    displayName: { lime_fraction_in_topsoil: 'Topsoil Lime Fraction' },
    displayType: DisplayType.NUMBER,
    unit: { lime_fraction_in_topsoil: 'percentage' },
    validationRules: {
      lime_fraction_in_topsoil: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'clay_fraction_in_topsoil',
    decimal: 2,
    modifier: 100,
    displayName: { clay_fraction_in_topsoil: 'Topsoil Clay Fraction' },
    displayType: DisplayType.NUMBER,
    unit: { clay_fraction_in_topsoil: 'percentage' },
    validationRules: {
      clay_fraction_in_topsoil: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'organic_matter_fraction_in_topsoil',
    decimal: 2,
    modifier: 100,
    displayName: { organic_matter_fraction_in_topsoil: 'Topsoil Organic Matter Fraction' },
    displayType: DisplayType.NUMBER,
    unit: { organic_matter_fraction_in_topsoil: 'percentage' },
    validationRules: {
      organic_matter_fraction_in_topsoil: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'p_in_top_soil_ppm',
    decimal: 2,
    modifier: 1,
    displayName: {
      p_in_top_soil_ppm: 'Topsoil Phosphate',
      target: 'Topsoil Phosphate - Target',
      result: 'Topsoil Phosphate - Actual'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: {
      p_in_top_soil_ppm: 'ppm',
      target: 'ppm',
      result: 'ppm'
    },
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 1000000, false, true] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 1000000, true, true] }
      ]
    }
  },
  {
    attrKey: 'n_in_soil_kg_per_m2',
    decimal: 2,
    modifier: 1,
    displayName: {
      n_in_soil_kg_per_m2: 'Soil Nitrogen',
      target: 'Soil Nitrogen - Target',
      result: 'Soil Nitrogen - Actual'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: {
      n_in_soil_kg_per_m2: 'kg_per_ha',
      target: 'kg_per_ha',
      result: 'kg_per_ha'
    },
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'n_in_top_soil_ppm',
    decimal: 2,
    modifier: 1,
    displayName: { n_in_top_soil_ppm: 'Topsoil Nitrogen' },
    displayType: DisplayType.NUMBER,
    unit: { n_in_top_soil_ppm: 'ppm' },
    validationRules: {
      n_in_top_soil_ppm: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 1000000, true, true] }
      ]
    }
  },
  {
    attrKey: 'n_in_mid_soil_ppm',
    decimal: 2,
    modifier: 1,
    displayName: { n_in_mid_soil_ppm: 'Midsoil Nitrogen' },
    displayType: DisplayType.NUMBER,
    unit: { n_in_mid_soil_ppm: 'ppm' },
    validationRules: {
      n_in_mid_soil_ppm: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 1000000, true, true] }
      ]
    }
  },
  {
    attrKey: 'n_in_bottom_soil_ppm',
    decimal: 2,
    modifier: 1,
    displayName: { n_in_bottom_soil_ppm: 'Bottomsoil Nitrogen' },
    displayType: DisplayType.NUMBER,
    unit: { n_in_bottom_soil_ppm: 'ppm' },
    validationRules: {
      n_in_bottom_soil_ppm: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 1000000, true, true] }
      ]
    }
  },
  {
    attrKey: 's_in_topsoil_ppm',
    decimal: 2,
    modifier: 1,
    displayName: {
      s_in_topsoil_ppm: 'Topsoil Sulfur',
      target: 'Topsoil Sulfur - Target',
      result: 'Topsoil Sulfur - Actual'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: {
      s_in_topsoil_ppm: 'ppm',
      target: 'ppm',
      result: 'ppm'
    },
    validationRules: {
      target: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 1000000, false, true] }
      ],
      result: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 1000000, true, true] }
      ]
    }
  },
  {
    attrKey: 'ph_in_topsoil',
    decimal: 2,
    modifier: 1,
    displayName: { ph_in_topsoil: 'Topsoil pH' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {
      ph_in_topsoil: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 14, true, true] }
      ]
    }
  },
  {
    attrKey: 'ph_in_midsoil',
    decimal: 2,
    modifier: 1,
    displayName: { ph_in_midsoil: 'Midsoil pH' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {
      ph_in_midsoil: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 14, true, true] }
      ]
    }
  },
  {
    attrKey: 'ph_in_bottomsoil',
    decimal: 2,
    modifier: 1,
    displayName: { ph_in_bottomsoil: 'Bottomsoil pH' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {
      ph_in_bottomsoil: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 14, true, true] }
      ]
    }
  },
  {
    attrKey: 'water_in_midsoil',
    decimal: 2,
    modifier: 1,
    displayName: { water_in_midsoil: 'Midsoil Water' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {
      water_in_midsoil: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'ground_water_depth_m',
    decimal: 2,
    modifier: 1,
    displayName: { ground_water_depth_m: 'Ground Water Depth' },
    displayType: DisplayType.NUMBER,
    unit: { ground_water_depth_m: 'm' },
    validationRules: {
      ground_water_depth_m: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'analysis_ion',
    decimal: 0,
    modifier: 1,
    displayName: { analysis_ion: 'Analysis Ion' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'average_dose_per_m2',
    decimal: 3,
    modifier: 1,
    displayName: {
      average_dose_per_m2: 'Average Fungicide Dose',
      volume_liter: 'Average Fungicide Dose Volume',
      mass_kg: 'Average Fungicide Dose Weight'
    },
    displayType: DisplayType.VOLUME_MASS,
    unit: { average_dose_per_m2: 'kg_per_ha', volume_liter: 'kg_per_ha', mass_kg: 'kg_per_ha' },
    validationRules: {
      volume_liter: [
        { key: 'decimal', params: [0, 3] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ],
      mass_kg: [
        { key: 'decimal', params: [0, 3] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ]
    }
  },
  {
    attrKey: 'phenological_state',
    decimal: 0,
    modifier: 1,
    displayName: { phenological_state: 'Phenological State' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'epidemic_type',
    decimal: 0,
    modifier: 1,
    displayName: { epidemic_type: 'Epidemic Type' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'epidemic_fraction',
    decimal: 2,
    modifier: 100,
    displayName: { epidemic_fraction: 'Epidemic Fraction' },
    displayType: DisplayType.NUMBER,
    unit: { epidemic_fraction: 'percentage' },
    validationRules: {
      epidemic_fraction: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, true, true] }
      ]
    }
  },
  {
    attrKey: 'min_temperature_in_celsius_degrees',
    decimal: 0,
    modifier: 1,
    displayName: { min_temperature_in_celsius_degrees: 'Minimal Temperature (°F)' },
    displayType: DisplayType.NUMBER,
    unit: { min_temperature_in_celsius_degrees: 'C_degree' },
    validationRules: {
      min_temperature_in_celsius_degrees: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [-70, 60, true, true] }
      ]
    }
  },
  {
    attrKey: 'max_temperature_in_celsius_degrees',
    decimal: 0,
    modifier: 1,
    displayName: { max_temperature_in_celsius_degrees: 'Maximal Temperature (°F)' },
    displayType: DisplayType.NUMBER,
    unit: { max_temperature_in_celsius_degrees: 'C_degree' },
    validationRules: {
      max_temperature_in_celsius_degrees: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [-70, 60, true, true] }
      ]
    }
  },
  {
    attrKey: 'precipitation_accumulation_in_mms',
    decimal: 2,
    modifier: 1,
    displayName: { precipitation_accumulation_in_mms: 'Precipitation Accumulation (mm)' },
    displayType: DisplayType.NUMBER,
    unit: { precipitation_accumulation_in_mms: 'mm' },
    validationRules: {
      precipitation_accumulation_in_mms: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'soil_moisture_in_mms',
    decimal: 2,
    modifier: 1,
    displayName: { soil_moisture_in_mms: 'Soil Moisture (mm)' },
    displayType: DisplayType.NUMBER,
    unit: { soil_moisture_in_mms: 'mm' },
    validationRules: {
      soil_moisture_in_mms: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'actual_evapotranspiration_in_mms',
    decimal: 2,
    modifier: 1,
    displayName: { actual_evapotranspiration_in_mms: 'Evapotranspiration (mm)' },
    displayType: DisplayType.NUMBER,
    unit: { actual_evapotranspiration_in_mms: 'mm' },
    validationRules: {
      actual_evapotranspiration_in_mms: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'reference_evapotranspiration_in_mms',
    decimal: 2,
    modifier: 1,
    displayName: { reference_evapotranspiration_in_mms: 'Reference Evapotranspiration (mm)' },
    displayType: DisplayType.NUMBER,
    unit: { reference_evapotranspiration_in_mms: 'mm' },
    validationRules: {
      reference_evapotranspiration_in_mms: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'climate_water_deficit_in_mms',
    decimal: 2,
    modifier: 1,
    displayName: { climate_water_deficit_in_mms: 'Climate Water Deficit (mm)' },
    displayType: DisplayType.NUMBER,
    unit: { climate_water_deficit_in_mms: 'mm' },
    validationRules: {
      climate_water_deficit_in_mms: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: ['MIN', 0, true, false] }
      ]
    }
  },
  {
    attrKey: 'vapor_pressure_in_kpa',
    decimal: 2,
    modifier: 1,
    displayName: { vapor_pressure_in_kpa: 'Vapor Pressure (kPa)' },
    displayType: DisplayType.NUMBER,
    unit: { vapor_pressure_in_kpa: 'kPa' },
    validationRules: {
      vapor_pressure_in_kpa: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'vapor_pressure_deficit_in_kpa',
    decimal: 2,
    modifier: 1,
    displayName: { vapor_pressure_deficit_in_kpa: 'Vapor Pressure Deficit (kPa)' },
    displayType: DisplayType.NUMBER,
    unit: { vapor_pressure_deficit_in_kpa: 'kPa' },
    validationRules: {
      vapor_pressure_deficit_in_kpa: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: ['MIN', 0, true, false] }
      ]
    }
  },
  {
    attrKey: 'palmer_drought_severity_index',
    decimal: 2,
    modifier: 1,
    displayName: { palmer_drought_severity_index: 'Palmer Drought Severity' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {
      palmer_drought_severity_index: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [-10, 10, true, true] }
      ]
    }
  },
  {
    attrKey: 'downward_surface_shortwave_radiation_in_watt_per_m2',
    decimal: 2,
    modifier: 1,
    displayName: {
      downward_surface_shortwave_radiation_in_watt_per_m2:
        'Downward Surface Shortwave Radiation (W/m²)'
    },
    displayType: DisplayType.NUMBER,
    unit: { downward_surface_shortwave_radiation_in_watt_per_m2: 'watt_per_m2' },
    validationRules: {
      downward_surface_shortwave_radiation_in_watt_per_m2: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'wind_speed_in_meter_per_second',
    decimal: 2,
    modifier: 1,
    displayName: { wind_speed_in_meter_per_second: 'Wind Speed (m/s)' },
    displayType: DisplayType.NUMBER,
    unit: { wind_speed_in_meter_per_second: 'm_per_second' },
    validationRules: {
      wind_speed_in_meter_per_second: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'water_runoff_in_mms',
    decimal: 2,
    modifier: 1,
    displayName: { water_runoff_in_mms: 'Water Runoff (mm)' },
    displayType: DisplayType.NUMBER,
    unit: { water_runoff_in_mms: 'mm' },
    validationRules: {
      water_runoff_in_mms: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'snow_water_equivalent_in_mms',
    decimal: 2,
    modifier: 1,
    displayName: { snow_water_equivalent_in_mms: 'Snow Water (mm)' },
    displayType: DisplayType.NUMBER,
    unit: { snow_water_equivalent_in_mms: 'mm' },
    validationRules: {
      snow_water_equivalent_in_mms: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'yield_decrease',
    decimal: 2,
    modifier: 100,
    displayName: { yield_decrease: 'Percentage Yield Loss' },
    displayType: DisplayType.NUMBER,
    unit: { yield_decrease: 'percentage' },
    validationRules: {
      yield_decrease: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, false, true] },
        { key: 'chemicalApplication', params: ['yield_decrease'] }
      ]
    }
  },
  {
    attrKey: 'crop_type',
    decimal: 0,
    modifier: 1,
    displayName: { crop_type: 'Crops' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'field_size',
    decimal: 2,
    modifier: 1,
    displayName: { field_size: 'Field Size' },
    displayType: DisplayType.NUMBER,
    unit: { field_size: 'ha' },
    validationRules: {
      field_size: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'is_crop_rotated',
    decimal: 0,
    modifier: 1,
    displayName: { is_crop_rotated: 'Crop Rotation' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'rotated_crop_types',
    decimal: 0,
    modifier: 1,
    displayName: { rotated_crop_types: 'Rotation Pattern' },
    displayType: DisplayType.CROP_TYPE,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'confidence',
    decimal: 0,
    modifier: 100,
    displayName: { confidence: 'Rotation Accuracy' },
    displayType: DisplayType.NUMBER,
    unit: { confidence: 'percentage' },
    validationRules: {}
  },
  {
    attrKey: 'elevation_meter',
    decimal: 2,
    modifier: 1,
    displayName: { elevation_meter: 'Elevation' },
    displayType: DisplayType.NUMBER,
    unit: { elevation_meter: 'm' },
    validationRules: {
      elevation_meter: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 20000, true, true] }
      ]
    }
  },
  {
    attrKey: 'slope_degree',
    decimal: 2,
    modifier: 1,
    displayName: { slope_degree: 'Slope' },
    displayType: DisplayType.NUMBER,
    unit: { slope_degree: 'degree' },
    validationRules: {
      slope_degree: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 90, true, true] }
      ]
    }
  },
  {
    attrKey: 'area_in_hectares',
    decimal: 2,
    modifier: 1,
    displayName: { area_in_hectares: 'Area' },
    displayType: DisplayType.NUMBER,
    unit: { area_in_hectares: 'ha' },
    validationRules: {
      area_in_hectares: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'compactness',
    decimal: 2,
    modifier: 1,
    displayName: { compactness: 'Compactness' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {
      compactness: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 1, true, true] }
      ]
    }
  },
  {
    attrKey: 'rectangularity',
    decimal: 2,
    modifier: 1,
    displayName: { rectangularity: 'Rectangularity' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {
      rectangularity: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 1, true, true] }
      ]
    }
  },
  {
    attrKey: 'owner_name',
    decimal: 0,
    modifier: 1,
    displayName: { owner_name: 'Ownership Name' },
    displayType: DisplayType.MULTI_SELECT,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'address_line',
    decimal: 0,
    modifier: 1,
    displayName: { address_line: 'Address Line' },
    displayType: DisplayType.MULTI_SELECT,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'city_name',
    decimal: 0,
    modifier: 1,
    displayName: { city_name: 'City Name' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'state_name',
    decimal: 0,
    modifier: 1,
    displayName: { state_name: 'State Name' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'zipcode',
    decimal: 0,
    modifier: 1,
    displayName: { zipcode: 'Zipcode' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'distance_to_water_in_meters',
    decimal: 2,
    modifier: 1,
    displayName: { distance_to_water_in_meters: 'Distance to Water' },
    displayType: DisplayType.NUMBER,
    unit: { distance_to_water_in_meters: 'km' },
    validationRules: {
      distance_to_water_in_meters: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'distance_to_road_in_meters',
    decimal: 2,
    modifier: 1,
    displayName: { distance_to_road_in_meters: 'Distance to Road' },
    displayType: DisplayType.NUMBER,
    unit: { distance_to_road_in_meters: 'km' },
    validationRules: {
      distance_to_road_in_meters: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'distance_to_town_in_meters',
    decimal: 2,
    modifier: 1,
    displayName: { distance_to_town_in_meters: 'Distance to Town' },
    displayType: DisplayType.NUMBER,
    unit: { distance_to_town_in_meters: 'km' },
    validationRules: {
      distance_to_town_in_meters: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'crop_category',
    decimal: 0,
    modifier: 1,
    displayName: { crop_category: 'Crop Category' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'index',
    decimal: 2,
    modifier: 1,
    displayName: { index: 'Index' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'dominant_frequency',
    decimal: 0,
    modifier: 1,
    displayName: { dominant_frequency: 'Dominant Frequency' },
    displayType: DisplayType.FREQUENCY,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'max_frequency',
    decimal: 0,
    modifier: 1,
    displayName: { max_frequency: 'Max Frequency' },
    displayType: DisplayType.FREQUENCY,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'duration',
    decimal: 0,
    modifier: 1,
    displayName: { duration: 'Duration' },
    displayType: DisplayType.DURATION,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'soil_texture_type',
    decimal: 0,
    modifier: 1,
    displayName: { soil_texture_type: 'Soil Texture Type' },
    displayType: DisplayType.SOIL_TEXTURE_TYPE,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'organic_carbon',
    decimal: 1,
    modifier: 1,
    displayName: { organic_carbon: 'Soil Organic Carbon (%)' },
    displayType: DisplayType.AVERAGE,
    unit: { organic_carbon: 'percentage' },
    validationRules: {}
  },
  {
    attrKey: 'histogram_of_ndvi',
    decimal: 0,
    modifier: 1,
    displayName: { histogram_of_ndvi: 'average NDVI' },
    displayType: DisplayType.FIXED_WIDTH_HISTOGRAM,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'growing_degrees_day',
    decimal: 0,
    modifier: 1,
    displayName: { growing_degrees_day: 'Growing Degree Days' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {
      growing_degrees_day: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'last_frost_time',
    decimal: 0,
    modifier: 1,
    displayName: { last_frost_time: 'Last Frost Date' },
    displayType: DisplayType.DATE,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'first_frost_time',
    decimal: 0,
    modifier: 1,
    displayName: { first_frost_time: 'First Frost Date' },
    displayType: DisplayType.DATE,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'hierarchical_label',
    decimal: 1,
    modifier: 1,
    displayName: { hierarchical_label: 'Hierarchical Label' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'cluster_annotation',
    decimal: 0,
    modifier: 1,
    displayName: { cluster_annotation: 'Cluster Annotation' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'component_name',
    decimal: 0,
    modifier: 1,
    displayName: { component_name: 'Component Name' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'component_percentage',
    decimal: 0,
    modifier: 1,
    displayName: { component_percentage: 'Component Percentage' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'sand_fraction',
    decimal: 0,
    modifier: 1,
    displayName: { sand_fraction: 'Sand' },
    displayType: DisplayType.AVERAGE,
    unit: { sand_fraction: 'percentage' },
    validationRules: {}
  },
  {
    attrKey: 'silt_fraction',
    decimal: 0,
    modifier: 1,
    displayName: { silt_fraction: 'Silt' },
    displayType: DisplayType.AVERAGE,
    unit: { silt_fraction: 'percentage' },
    validationRules: {}
  },
  {
    attrKey: 'clay_fraction',
    decimal: 0,
    modifier: 1,
    displayName: { clay_fraction: 'Clay' },
    displayType: DisplayType.AVERAGE,
    unit: { clay_fraction: 'percentage' },
    validationRules: {}
  },
  {
    attrKey: 'ph_level',
    decimal: 1,
    modifier: 1,
    displayName: { ph_level: 'pH level' },
    displayType: DisplayType.AVERAGE_RANGE,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'nitrogen_in_ppm',
    decimal: 1,
    modifier: 100,
    displayName: { nitrogen_in_ppm: 'Nitrogen' },
    displayType: DisplayType.NUMBER,
    unit: { nitrogen_in_ppm: 'percentage' },
    validationRules: {}
  },
  {
    attrKey: 'last_frost_time',
    decimal: 0,
    modifier: 0,
    displayName: { last_frost_time: 'Last Frost Time' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'first_frost_time',
    decimal: 0,
    modifier: 0,
    displayName: { first_frost_time: 'First Frost Time' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'planted_area_in_acres',
    decimal: 0,
    modifier: 1,
    displayName: { planted_area_in_acres: 'Planted Area' },
    displayType: DisplayType.NUMBER,
    unit: { planted_area_in_acres: 'ha' },
    validationRules: {
      planted_area_in_acres: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'harvest_area_in_acres',
    decimal: 0,
    modifier: 1,
    displayName: { harvest_area_in_acres: 'Havested Area' },
    displayType: DisplayType.NUMBER,
    unit: { harvest_area_in_acres: 'ha' },
    validationRules: {
      harvest_area_in_acres: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'yield_total_in_bushels',
    decimal: 2,
    modifier: 1,
    displayName: { yield_total_in_bushels: 'Yield Total' },
    displayType: DisplayType.NUMBER,
    unit: { yield_total_in_bushels: 'kg_to_bushel' },
    validationRules: {
      yield_total_in_bushels: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'yield_total_in_kg',
    decimal: 2,
    modifier: 1,
    displayName: { yield_total_in_kg: 'Yield Total' },
    displayType: DisplayType.NUMBER,
    unit: { yield_total_in_kg: 'kg_to_bushel' },
    validationRules: {
      yield_total_in_kg: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'yield_per_acre_in_bushels',
    decimal: 0,
    modifier: 1,
    displayName: { yield_per_acre_in_bushels: 'Average Yield' },
    displayType: DisplayType.NUMBER,
    unit: { yield_per_acre_in_bushels: 'kg_per_ha_to_bushel' },
    validationRules: {
      yield_per_acre_in_bushels: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'yield_per_hacter_in_kg',
    decimal: 0,
    modifier: 1,
    displayName: { yield_per_hacter_in_kg: 'Average Yield' },
    displayType: DisplayType.NUMBER,
    unit: { yield_per_hacter_in_kg: 'kg_per_ha_to_bushel' },
    validationRules: {
      yield_per_hacter_in_kg: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'statistical_value',
    decimal: 0,
    modifier: 1,
    displayName: { statistical_value: 'NDVI' },
    displayType: DisplayType.AVERAGE,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'material_type',
    decimal: 0,
    modifier: 1,
    displayName: { material_type: 'Material Type' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'cost_type',
    decimal: 2,
    modifier: 0.000001,
    displayName: { cost_type: 'Cost' },
    displayType: DisplayType.COST_TYPE,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'cost_total',
    decimal: 2,
    modifier: 0.000001,
    displayName: { cost_total: 'Cost Category' },
    displayType: DisplayType.MONEY,
    unit: {
      cost_total: 'cost_per_acre'
    },
    validationRules: {
      cost_type: [{ key: 'required', params: [] }],
      cost_total: [
        { key: 'required', params: [] },
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'species',
    decimal: 0,
    modifier: 1,
    displayName: { species: 'Species' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'seeding_methods',
    decimal: 0,
    modifier: 1,
    displayName: { seeding_methods: 'Seeding Methods' },
    displayType: DisplayType.COVER_CROP_SEEDING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'termination_methods',
    decimal: 0,
    modifier: 1,
    displayName: { termination_methods: 'Termination Methods' },
    displayType: DisplayType.COVER_CROP_TERMINATION,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'cover_crop_type',
    decimal: 0,
    modifier: 1,
    displayName: { cover_crop_type: 'Cove Crop Type' },
    displayType: DisplayType.COVER_CROP,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'tillage_type',
    decimal: 0,
    modifier: 1,
    displayName: { tillage_type: 'Tillage Type' },
    displayType: DisplayType.TILLAGE_TYPE,
    unit: {},
    validationRules: {
      tillage_type: [{ key: 'chemicalApplication', params: ['tillage_type'] }]
    }
  },
  {
    attrKey: 'depth_m',
    decimal: 2,
    modifier: 1,
    displayName: {
      depth_m: 'Depth',
      target: 'Depth - Target',
      result: 'Depth - Actual'
    },
    displayType: DisplayType.TARGET_RESULT,
    unit: { depth_m: 'm', target: 'm', result: 'm' },
    validationRules: {
      target: [
        { key: 'chemicalApplication', params: ['target'] },
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, false] }
      ],
      result: [
        { key: 'chemicalApplication', params: ['result'] },
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'types',
    decimal: 0,
    modifier: 1,
    displayName: { types: 'Types of Livestock' },
    displayType: DisplayType.CHIP,
    unit: {},
    validationRules: {
      types: [{ key: 'chemicalApplication', params: ['types'] }]
    }
  },
  {
    attrKey: 'livestock_operations',
    decimal: 0,
    modifier: 1,
    displayName: { livestock_operations: 'Operations' },
    displayType: DisplayType.LIVESTOCK_OPERATION_TYPE,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'feed_sources',
    decimal: 0,
    modifier: 1,
    displayName: { feed_sources: 'Livestock Feed Sources' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'livestock_number',
    decimal: 0,
    modifier: 1,
    displayName: { livestock_number: 'Livestock Number' },
    displayType: DisplayType.NUMBER,
    unit: {},
    validationRules: {
      livestock_number: [
        { key: 'decimal', params: [0, 0] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'livestock_averged_weight_kg',
    decimal: 2,
    modifier: 1,
    displayName: { livestock_averged_weight_kg: 'Average Weight' },
    displayType: DisplayType.NUMBER,
    unit: { livestock_averged_weight_kg: 'kg' },
    validationRules: {
      livestock_averged_weight_kg: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'paddock_size_m2',
    decimal: 2,
    modifier: 1,
    displayName: { paddock_size_m2: 'Paddock Size' },
    displayType: DisplayType.NUMBER,
    unit: { paddock_size_m2: 'ha' },
    validationRules: {
      paddock_size_m2: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 'MAX', false, true] }
      ]
    }
  },
  {
    attrKey: 'residual_forage_percent',
    decimal: 2,
    modifier: 100,
    displayName: { residual_forage_percent: 'Residual Forage Percent' },
    displayType: DisplayType.NUMBER,
    unit: { residual_forage_percent: 'percentage' },
    validationRules: {
      residual_forage_percent: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, false, true] }
      ]
    }
  },
  {
    attrKey: 'residual_forage_percent_out',
    decimal: 2,
    modifier: 100,
    displayName: { residual_forage_percent_out: 'Residual Forage Percent Out' },
    displayType: DisplayType.NUMBER,
    unit: { residual_forage_percent_out: 'percentage' },
    validationRules: {
      residual_forage_percent_out: [
        { key: 'decimal', params: [0, 2] },
        { key: 'isNumber', params: [] },
        { key: 'range', params: [0, 100, false, true] }
      ]
    }
  },
  {
    attrKey: 'note',
    decimal: 0,
    modifier: 1,
    displayName: { note: 'Notes' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'images',
    decimal: 0,
    modifier: 1,
    displayName: { images: 'Images' },
    displayType: DisplayType.STRING,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'location',
    decimal: 0,
    modifier: 1,
    displayName: { location: 'Location' },
    displayType: DisplayType.LOCATION,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'texture_type',
    decimal: 0,
    modifier: 1,
    displayName: { texture_type: 'Soil Texture Type' },
    displayType: DisplayType.TEXTURE_TYPE,
    unit: {},
    validationRules: {}
  },
  {
    attrKey: 'feature_name',
    decimal: 1,
    modifier: 1,
    displayName: { feature_name: '' },
    displayType: DisplayType.FEATURE_NAME,
    unit: {},
    validationRules: {}
  }
];
