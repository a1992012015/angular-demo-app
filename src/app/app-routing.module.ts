import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { BaseRemComputeComponent } from './base-rem-compute/base-rem-compute.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'css-selector',
    component: CssSelectorComponent
  },
  {
    path: 'rem-compute',
    component: BaseRemComputeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
