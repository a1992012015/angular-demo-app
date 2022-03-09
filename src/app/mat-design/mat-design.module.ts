import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';

const materialModule = [
  CdkAccordionModule,
  MatTabsModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  OverlayModule,
  MatButtonModule,
  MatSliderModule,
  MatIconModule,
  MatChipsModule,
  MatMenuModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatTooltipModule,
  MatExpansionModule,
  MatProgressSpinnerModule
];

/**
 * Material design module
 */
@NgModule({
  imports: [
    ...materialModule
  ],
  exports: [
    ...materialModule
  ]
})
export class MatDesignModule {
}
