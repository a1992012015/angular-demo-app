import { Type } from '@angular/core';

export interface IDynamicComponent {
  component: Type<unknown> | null;
  props?: Record<string, unknown>;
}
