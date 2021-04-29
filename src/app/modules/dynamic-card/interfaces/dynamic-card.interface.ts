import { SectionInterface } from './extract-config.interface';

/**
 * jump to
 */
export interface JumpListInterface {
  name: string;
  icon: string;
  color: string;
  cardId: string;
  active: boolean;
}

/**
 * yield matrix
 */
export interface YieldMatrixInterface {
  year: number;
  yieldSections: SectionInterface[][];
}

/**
 * select option
 */
export interface SelectOptionInterface {
  value: object | string | number;
  view: string;
  icon?: string;
  show?: boolean;
  selected?: boolean;
}
