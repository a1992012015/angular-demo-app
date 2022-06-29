import { Type } from '@angular/core';

export enum EValueType {
  UNKNOWN,
  DEFAULT
}

export abstract class ValueAbstract {
  abstract type: EValueType;

  protected abstract component: Type<unknown>;
}

export const valueDictionary = {
  // [EValueType.DEFAULT]: DefaultContainer
};
