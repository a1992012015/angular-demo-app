import { EContentType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { ContentAbstract } from '../contentAbstract';

export class UnknownContent extends ContentAbstract {
  type = EContentType.UNKNOWN;

  protected component: Type<unknown> | null = null;
}
