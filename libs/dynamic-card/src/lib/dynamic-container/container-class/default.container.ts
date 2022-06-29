import { Type } from '@angular/core';

import { ContainerAbstract } from '../contentAbstract';
import { EContainerType } from '../container-dictionary';
import { DefaultContainerComponent } from '../container-component/default-container/default-container.component';

export class DefaultContainer extends ContainerAbstract {
  type = EContainerType.DEFAULT;

  protected component: Type<unknown> = DefaultContainerComponent;

  title = 'Default Container';
}
