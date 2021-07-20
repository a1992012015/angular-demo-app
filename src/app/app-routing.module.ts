import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CssSelectorComponent } from './features/css-selector/css-selector.component';
import { BaseRemComputeComponent } from './features/base-rem-compute/base-rem-compute.component';
import { GoogleChartComponent } from './features/google-chart/google-chart.component';
import { GapiReadyResolverGuard } from './guard/gapi-ready-resolver.guard';
import { RequestAnimationFrameComponent } from './features/request-animation-frame/request-animation-frame.component';
import { GoogleMapSvgComponent } from './features/google-map-svg/google-map-svg.component';
import { FilterSelectComponent } from './features/filter-select/filter-select.component';
import { ViewCardComponent } from './features/view-card/view-card.component';
import { ControlAccessorComponent } from './features/control-accessor/control-accessor.component';
import { ToastViewComponent } from './features/toast-view/toast-view.component';
import { MultipleInstanceComponent } from './features/multiple-instance/multiple-instance.component';

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
  {
    path: 'request-animation-frame',
    component: RequestAnimationFrameComponent,
  },
  {
    path: 'google-map-svg',
    component: GoogleMapSvgComponent,
  },
  {
    path: 'filter-select',
    component: FilterSelectComponent,
  },
  {
    path: 'control-accessor',
    component: ControlAccessorComponent
  },
  {
    path: 'view-card',
    component: ViewCardComponent
  },
  {
    path: 'toast-view',
    component: ToastViewComponent
  },
  {
    path: 'multiple-instance',
    component: MultipleInstanceComponent
  }
];

/**
 * asas
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
