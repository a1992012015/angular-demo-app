import { EContainerType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { IDynamicComponent } from '../interfaces/dynamic.interface';

export abstract class ContainerAbstract {
  abstract type: EContainerType;

  protected abstract component: Type<unknown> | null;

  containerComponent(props: Record<string, unknown> = {}): IDynamicComponent {
    return { component: this.component, props: { ...props } };
  }
}
