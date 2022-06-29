import { EContentType } from '@angular-demo-app/data';
import { Type } from '@angular/core';

import { ContentAbstract } from '../contentAbstract';
import { DefaultContentComponent } from '../content-component/default-content/default-content.component';

export class DefaultContent extends ContentAbstract {
  type = EContentType.DEFAULT;

  protected component: Type<unknown> | null = DefaultContentComponent;
}
