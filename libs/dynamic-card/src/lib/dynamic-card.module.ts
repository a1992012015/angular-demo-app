import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AttachHostDirective } from './services/attach-host.directive';
import { DynamicCardViewComponent } from './dynamic-card-view/dynamic-card-view.component';
import { DefaultCardComponent } from './dynamic-card/card-component/default-card/default-card.component';
import { DefaultValueComponent } from './dynamic-value/value-component/default-value/default-value.component';
import { DefaultContentComponent } from './dynamic-content/content-component/default-content/default-content.component';
import { DefaultSectionComponent } from './dynamic-section/section-component/default-section/default-section.component';
import { DefaultContainerComponent } from './dynamic-container/container-component/default-container/default-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DefaultContainerComponent,
    DynamicCardViewComponent,
    DefaultContentComponent,
    DefaultSectionComponent,
    DefaultValueComponent,
    DefaultCardComponent,
    AttachHostDirective
  ],
  exports: [DynamicCardViewComponent]
})
export class DynamicCardModule {}
