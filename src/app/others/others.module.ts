import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { MatDesignModule } from '../mat-design/mat-design.module';

import { OthersComponent } from './others.component';
import { PrintTestComponent } from './print-test/print-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/**
 * others module
 */
@NgModule({
  declarations: [
    OthersComponent,
    PrintTestComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    OthersRoutingModule,
    MatDesignModule
  ]
})
export class OthersModule { }
