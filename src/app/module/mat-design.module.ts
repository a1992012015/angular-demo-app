import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';

const allModule = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatSliderModule,
  MatTabsModule,
  DragDropModule,
];

/**
 * Material design module
 */
@NgModule({
  imports: [
    ...allModule,
  ],
  exports: [
    ...allModule,
  ],
})
export class MatDesignModule {
}
