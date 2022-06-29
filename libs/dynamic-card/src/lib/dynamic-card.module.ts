import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DynamicCardViewComponent } from './dynamic-card-view/dynamic-card-view.component';
import { DefaultContainerComponent } from './dynamic-container/container-component/default-container/default-container.component';
import { AttachHostDirective } from './services/attach-host.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicCardViewComponent, DefaultContainerComponent, AttachHostDirective],
  exports: [DynamicCardViewComponent]
})
export class DynamicCardModule {}
