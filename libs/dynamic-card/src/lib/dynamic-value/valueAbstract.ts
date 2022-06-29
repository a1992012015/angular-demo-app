import { EValueType, IValueConfig } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { IDynamicComponent } from '../interfaces/dynamic.interface';

export abstract class ValueAbstract {
  abstract type: EValueType;

  protected abstract component: Type<unknown> | null;

  constructor(private config: IValueConfig) {
  }

  get displayValue(): string {
    return this.config.value;
  }

  valueComponent(props: Record<string, unknown> = {}): IDynamicComponent {
    return { component: this.component, props: { ...props } };
  }
}
