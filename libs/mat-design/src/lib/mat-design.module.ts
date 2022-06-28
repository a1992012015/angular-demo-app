import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

const materialModule = [
  FormsModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatMomentDateModule
];

@NgModule({
  imports: [CommonModule, ...materialModule],
  exports: [...materialModule]
})
export class MatDesignModule {
}
