import { Type } from '@angular/core';

import { EContainerType } from '../container-dictionary';
import { ContainerAbstract } from '../contentAbstract';

export class UnknownContainer extends ContainerAbstract {
  type = EContainerType.UNKNOWN;

  protected component: Type<unknown> | null = null;
}
