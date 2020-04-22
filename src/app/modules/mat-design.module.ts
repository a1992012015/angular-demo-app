import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const materialModule = [
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
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
