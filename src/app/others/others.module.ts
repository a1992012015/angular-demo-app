import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';

import { OthersComponent } from './others.component';
import { PrintTestComponent } from './print-test/print-test.component';

/**
 * others module
 */
@NgModule({
  declarations: [
    OthersComponent,
    PrintTestComponent
  ],
  imports: [
    CommonModule,
    OthersRoutingModule
  ]
})
export class OthersModule { }
