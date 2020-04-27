/**
 * AnyBase
 */
export type AnyBase = string | number | object | symbol | boolean | null | undefined;

/**
 * AnyObject
 */
export interface AnyObject {
  [key: string]: AnyType | AnyObject;
}

/**
 * AnyType
 */
export type AnyType = AnyBase[] | AnyBase | AnyObject;
