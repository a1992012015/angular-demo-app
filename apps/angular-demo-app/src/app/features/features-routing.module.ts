import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { featureRoute } from '../../interfaces/routing-interface';

import { FeaturesComponent } from './features.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartTestComponent} from "./chart-test/chart-test.component";
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { RemComputeComponent } from './rem-compute/rem-compute.component';
import { AnimationFrameComponent } from './animation-frame/animation-frame.component';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MultipleInstanceComponent } from './multiple-instance/multiple-instance.component';
import { ToastViewComponent } from './toast-view/toast-view.component';

const routes: Routes = [
  {
    path: featureRoute.features.init,
    component: FeaturesComponent,
    children: [
      { path: featureRoute.features.children.dashboard, component: DashboardComponent },
      { path: featureRoute.features.children.chartTest, component: ChartTestComponent },
      { path: featureRoute.features.children.remCompute, component: RemComputeComponent },
      { path: featureRoute.features.children.cssSelector, component: CssSelectorComponent },
      { path: featureRoute.features.children.animationFrame, component: AnimationFrameComponent },
      { path: featureRoute.features.children.webWorker, component: WebWorkerComponent },
      { path: featureRoute.features.children.selectFilter, component: FilterSelectComponent },
      { path: featureRoute.features.children.googleMap, component: GoogleMapComponent },
      { path: featureRoute.features.children.multipleInstance, component: MultipleInstanceComponent },
      { path: featureRoute.features.children.toastMassage, component: ToastViewComponent },
      { path: '**', redirectTo: featureRoute.features.children.dashboard, pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: featureRoute.features.init, pathMatch: 'full' }
];

/**
 * features routing module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {
}
