import { EValueType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { ValueAbstract } from '../valueAbstract';
import { DefaultValueComponent } from '../value-component/default-value/default-value.component';

export class DefaultValue extends ValueAbstract {
  type = EValueType.DEFAULT;

  protected component: Type<unknown> | null = DefaultValueComponent;
}
