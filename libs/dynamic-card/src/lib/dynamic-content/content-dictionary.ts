import { EContentType } from '@angular-demo-app/data';

import { UnknownContent } from './content-class/unknown.content';
import { DefaultContent } from './content-class/default.content';

export const contentDictionary = {
  [EContentType.UNKNOWN]: UnknownContent,
  [EContentType.DEFAULT]: DefaultContent
};
