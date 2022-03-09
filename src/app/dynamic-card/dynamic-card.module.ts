import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicCardViewComponent } from './dynamic-card-view/dynamic-card-view.component';
import { DynamicCardEditComponent } from './dynamic-card-edit/dynamic-card-edit.component';

/**
 * dynamic card module
 */
@NgModule({
  declarations: [
    DynamicCardViewComponent,
    DynamicCardEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DynamicCardModule {
}
