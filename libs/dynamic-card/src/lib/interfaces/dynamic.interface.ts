import { Type } from '@angular/core';

import { EContainerType } from '../dynamic-container/container-dictionary';

export interface IDynamicParams {
  key: string;
  localeId: string;
  config: Map<string, object>;
  containerType: EContainerType;
}

export interface IDynamicComponent {
  component: Type<unknown> | null;
  props?: Record<string, unknown>;
}
