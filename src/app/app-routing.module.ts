import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { BaseRemComputeComponent } from './base-rem-compute/base-rem-compute.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { GapiReadyResolverGuard } from './guard/gapi-ready-resolver.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'css-selector',
    component: CssSelectorComponent,
  },
  {
    path: 'rem-compute',
    component: BaseRemComputeComponent,
  },
  {
    path: 'google-chart',

    resolve: { gapi: GapiReadyResolverGuard },
    component: GoogleChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
