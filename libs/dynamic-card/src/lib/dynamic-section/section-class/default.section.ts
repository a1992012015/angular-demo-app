import { ESectionType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { SectionAbstract } from '../sectionAbstract';
import { DefaultSectionComponent } from '../section-component/default-section/default-section.component';

export class DefaultSection extends SectionAbstract {
  type = ESectionType.DEFAULT;

  protected component: Type<unknown> | null = DefaultSectionComponent;
}
