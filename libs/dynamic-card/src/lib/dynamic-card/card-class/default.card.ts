import { ECardType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { CardAbstract } from '../cardAbstract';
import { DefaultCardComponent } from '../card-component/default-card/default-card.component';

export class DefaultCard extends CardAbstract {
  type: ECardType = ECardType.DEFAULT

  protected component: Type<unknown> | null = DefaultCardComponent
}
