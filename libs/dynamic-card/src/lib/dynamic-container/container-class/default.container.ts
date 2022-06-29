import { EContainerType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { ContainerAbstract } from '../containerAbstract';
import { DefaultContainerComponent } from '../container-component/default-container/default-container.component';

export class DefaultContainer extends ContainerAbstract {
  type = EContainerType.DEFAULT;

  protected component: Type<unknown> = DefaultContainerComponent;
}
