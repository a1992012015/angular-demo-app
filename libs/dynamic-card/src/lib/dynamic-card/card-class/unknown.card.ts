import { ECardType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { CardAbstract } from '../cardAbstract';

export class UnknownCard extends CardAbstract {
  type: ECardType = ECardType.UNKNOWN

  protected component: Type<unknown> | null = null
}
