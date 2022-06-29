import { EContentType, IContentConfig, ISectionConfig } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { IDynamicComponent } from '../interfaces/dynamic.interface';


export abstract class ContentAbstract {
  abstract type: EContentType;

  protected abstract component: Type<unknown> | null;

  constructor(private config: IContentConfig) {
  }

  get sections(): ISectionConfig[] {
    return this.config.sections;
  }

  contentComponent(props: Record<string, unknown> = {}): IDynamicComponent {
    return { component: this.component, props: { ...props } };
  }
}
