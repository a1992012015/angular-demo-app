import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { BaseRemComputeComponent } from './base-rem-compute/base-rem-compute.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { GapiReadyResolverGuard } from './guard/gapi-ready-resolver.guard';
import { HideScrollbarComponent } from './hide-scrollbar/hide-scrollbar.component';
import { RequestAnimationFrameComponent } from './request-animation-frame/request-animation-frame.component';
import { ImagesStepComponent } from './images-step/images-step.component';
import { TextViewComponent } from './text-view/text-view.component';
import { DialogInputComponent } from './dialog-input/dialog-input.component';
import { GoogleMapSvgComponent } from './google-map-svg/google-map-svg.component';

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
    path: 'hide-scrollbar',
    component: HideScrollbarComponent,
  },
  {
    path: 'request-animation-frame',
    component: RequestAnimationFrameComponent,
  },
  {
    path: 'images-step',
    component: ImagesStepComponent,
  },
  {
    path: 'text-view',
    component: TextViewComponent,
  },
  {
    path: 'dialog-input',
    component: DialogInputComponent,
  },
  {
    path: 'google-map-svg',
    component: GoogleMapSvgComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
