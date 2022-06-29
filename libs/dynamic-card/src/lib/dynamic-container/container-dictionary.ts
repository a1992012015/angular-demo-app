import { EContainerType } from '@angular-demo-app/data';

import { UnknownContainer } from './container-class/unknown.container';
import { DefaultContainer } from './container-class/default.container';

export const containerDictionary = {
  [EContainerType.UNKNOWN]: UnknownContainer,
  [EContainerType.DEFAULT]: DefaultContainer
};
