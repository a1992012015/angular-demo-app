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

const materialModule = [
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  OverlayModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatMenuModule,
  MatDialogModule,
];

/**
 * Material design module
 */
@NgModule({
  imports: [
    ...materialModule,
  ],
  exports: [
    ...materialModule,
  ],
})
export class MatDesignModule {
}
