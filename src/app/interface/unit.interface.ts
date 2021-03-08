/**
 * Unit Interface
 */
export interface UnitInterface {
  value: number;
  unit: string;
}

/**
 * Area Interface
 * #Value property is depends on the language
 */
export interface AreaInterface extends UnitInterface {
  acre: number;
}
