import { ESectionType, ISectionConfig, IValueConfig } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { IDynamicComponent } from '../interfaces/dynamic.interface';


export abstract class SectionAbstract {
  abstract type: ESectionType;

  protected abstract component: Type<unknown> | null;

  constructor(private config: ISectionConfig) {
  }

  get values(): IValueConfig[] {
    return this.config.values;
  }

  sectionComponent(props: Record<string, unknown> = {}): IDynamicComponent {
    return { component: this.component, props: { ...props } };
  }
}
