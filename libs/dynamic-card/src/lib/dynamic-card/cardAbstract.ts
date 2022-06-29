import { ECardType, ICardConfig, IContentConfig, ISectionConfig } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { IDynamicComponent } from '../interfaces/dynamic.interface';

export abstract class CardAbstract {
  abstract type: ECardType;

  protected abstract component: Type<unknown> | null;

  constructor(private config: ICardConfig) {
  }

  get contents(): IContentConfig[] {
    return this.config.contents
  }

  cardComponent(props: Record<string, unknown> = {}): IDynamicComponent {
    return { component: this.component, props: { ...props } };
  }
}
