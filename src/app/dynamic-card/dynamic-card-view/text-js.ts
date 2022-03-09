import { DisplayType, ValidationRuleType } from 'app/app.component';

const dictionary = [
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
        { rule: ValidationRuleType.DECIMAL, params: [0, 2] },
        { rule: ValidationRuleType.IS_NUMBER, params: [] },
        { rule: ValidationRuleType.RANGE, params: [0, 'MAX', false, false] }
      ],
      result: [
        { rule: ValidationRuleType.DECIMAL, params: [0, 2] },
        { rule: ValidationRuleType.IS_NUMBER, params: [] },
        { rule: ValidationRuleType.RANGE, params: [0, 'MAX', true, false] }
      ]
    }
  },
  {
    attrKey: 'previous_crop',
    decimal: 0,
    modifier: 1,
    displayName: { previous_crop: 'Previous Crops' },
    displayType: DisplayType.CROP_TYPES,
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
        { rule: ValidationRuleType.DECIMAL, params: [0, 2] },
        { rule: ValidationRuleType.IS_NUMBER, params: [] },
        { rule: ValidationRuleType.RANGE, params: [0, 'MAX', false, false] }
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
        { rule: ValidationRuleType.DECIMAL, params: [0, 2] },
        { rule: ValidationRuleType.IS_NUMBER, params: [] },
        { rule: ValidationRuleType.RANGE, params: [0, 'MAX', false, false] }
      ],
      result: [
        { rule: ValidationRuleType.DECIMAL, params: [0, 2] },
        { rule: ValidationRuleType.IS_NUMBER, params: [] },
        { rule: ValidationRuleType.RANGE, params: [0, 'MAX', true, false] }
      ]
    }
  }
];
