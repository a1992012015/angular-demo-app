
/**
 * Dictionary
 */
export interface DictionaryInterface {
  attrKey?: string;
  order?: number;
  editOrder?: number;
  decimal?: number;
  modifier?: number;
  displayName?: DisplayNameInterface;
  nameUnit?: NameUnitInterface;
  displayType?: DisplayType;
  unit?: DisplayUnitInterface;
  validationRules?: { [key: string]: ValidationRulesInterface[] };
  requiredKey?: string[];
  tooltip?: string;
}

/**
 * display name
 */
export interface NameUnitInterface {
  [key: string]: string[];
}

/**
 * Validation Rules
 */
export interface ValidationRulesInterface {
  key: string;
  params: Array<string | number | boolean>;
}

/**
 * display name
 */
export interface DisplayNameInterface {
  [key: string]: string;
}

/**
 * display unit
 */
export interface DisplayUnitInterface {
  [key: string]: string;
}

/**
 * display type
 */
export enum DisplayType {
  LIVESTOCK_OPERATION_TYPE,
  COVER_CROP_TERMINATION,
  FIXED_WIDTH_HISTOGRAM,
  COVER_CROP_SEEDING,
  SOIL_TEXTURE_TYPE,
  CYCLE_DURATION,
  TARGET_RESULT,
  AVERAGE_RANGE,
  TEXTURE_TYPE,
  FEATURE_NAME,
  MULTI_SELECT,
  TILLAGE_TYPE,
  VOLUME_MASS,
  COVER_CROP,
  COST_TYPE,
  CROP_TYPE,
  FREQUENCY,
  LOCATION,
  DURATION,
  AVERAGE,
  MASSAGE,
  ELEMENT,
  STRING,
  NUMBER,
  SELECT,
  MONEY,
  DATE,
  RETE,
  CHIP
}
