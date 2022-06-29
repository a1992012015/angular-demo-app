import { EContainerType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { ContainerAbstract } from '../containerAbstract';

export class UnknownContainer extends ContainerAbstract {
  type = EContainerType.UNKNOWN;

  protected component: Type<unknown> | null = null;
}
