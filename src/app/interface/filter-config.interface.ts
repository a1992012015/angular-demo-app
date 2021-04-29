import { FormControl, FormGroup } from '@angular/forms';

/**
 * view filter config interface
 */
export interface FilterListInterface {
  label: string;
  unit: string;
  step: number;
  tooltip: string;
  precision: number;
  display: Function;
  extractKey: string[];
  defaultView: boolean;
  defaultValue: object;
  viewType: FilterViewType;
  extractType: FilterExtractType;
  filterValue: FilterValueInterface;
}

/**
 * filter view type interface
 */
export enum FilterViewType {
  RANGE,
  SELECT,
  SUB_RANGE
}

/**
 * extract type interface
 */
export enum FilterExtractType {
  AEZ,
  YEARS,
  RANGE,
  CROP_TYPE,
  FREQUENCY,
  OWNERSHIP,
  YIELD_AREA,
  TILLAGE_TYPE,
  PRODUCTIVITY,
  CROP_ROTATION,
  COVER_CROP_TYPE,
  SOIL_TEXTURE_TYPE,
  MONTHLY_TEMPERATURE,
  QUARTERLY_TEMPERATURE
}

/**
 * range option interface
 */
export interface FilterValueInterface {
  range: object;
  form: FormControl | FormGroup;
}

/**
 * Range Value Interface
 */
export interface RangeValueInterface {
  start: number;
  end: number;
}
