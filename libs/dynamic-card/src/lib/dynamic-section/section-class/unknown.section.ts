import { ESectionType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { SectionAbstract } from '../sectionAbstract';

export class UnknownSection extends SectionAbstract {
  type = ESectionType.UNKNOWN;

  protected component: Type<unknown> | null = null;
}
