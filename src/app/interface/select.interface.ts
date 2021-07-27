import { SafeResourceUrl } from '@angular/platform-browser';

/**
 * select option
 */
export interface SelectOptionInterface {
  value: object | string | number;
  view: string;
  show?: boolean;
  disabled?: boolean;
  selected?: boolean;
  icon?: SafeResourceUrl;
}
