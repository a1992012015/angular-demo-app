import { EValueType } from '@angular-demo-app/data';

import { UnknownValue } from './value-class/unknown.value';
import { DefaultValue } from './value-class/default.value';

export const valueDictionary = {
  [EValueType.UNKNOWN]: UnknownValue,
  [EValueType.DEFAULT]: DefaultValue
};
