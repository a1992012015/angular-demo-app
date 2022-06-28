import { MatDesignModule } from '@angular-demo-app/mat-design';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OthersComponent } from './others.component';
import { OthersRoutingModule } from './others-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [OthersComponent, DashboardComponent],
  imports: [CommonModule, OthersRoutingModule, MatDesignModule]
})
export class OthersModule {}
