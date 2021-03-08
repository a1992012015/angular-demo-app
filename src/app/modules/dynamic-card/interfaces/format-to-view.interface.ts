import { ExtractValueInterface, ExtractValueType } from './extract-config.interface';
import { DisplayType } from './dictionary.interface';

/**
 * format to view
 */
export interface FormatToViewInterface {
  displayKey: string;
  displayName: string;
  displayType: DisplayType;
  displayOrder: number;
  displayValue: DisplayValueInterface;
}

/**
 * display value
 */
export interface DisplayValueInterface {
  benchmarkValue: InitialValueInterface;
  value: string | number | { [key: string]: number };
  unit: string;
  decimal: number;
  modifier: number;
  tooltip: string;
  rate?: number;
  color?: string;
  icon?: string;
  currencyCode?: string;
  percentage?: number;
}

/**
 * initial vale inteface
 */
export interface InitialValueInterface {
  value: ExtractValueType;
  key: string;
}

/**
 * cost edit view interface
 */
export interface CostEditViewInterface {
  view: FormatToViewInterface;
  status: string;
  data: ExtractValueInterface[];
}
