import { ESectionType } from '@angular-demo-app/data';

import { DefaultSection } from './section-class/default.section';
import { UnknownSection } from './section-class/unknown.section';

export const sectionDictionary = {
  [ESectionType.UNKNOWN]: UnknownSection,
  [ESectionType.DEFAULT]: DefaultSection
};
