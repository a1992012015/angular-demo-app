import { EValueType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { ValueAbstract } from '../valueAbstract';

export class UnknownValue extends ValueAbstract {
  type = EValueType.UNKNOWN;

  protected component: Type<unknown> | null = null;
}
