import { ECardType } from '@angular-demo-app/data';

import { UnknownCard } from './card-class/unknown.card';
import { DefaultCard } from './card-class/default.card';

export const cardDictionary = {
  [ECardType.UNKNOWN]: UnknownCard,
  [ECardType.DEFAULT]: DefaultCard,
}
