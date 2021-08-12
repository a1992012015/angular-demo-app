import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { routeDictionary } from './interfaces/routing-interface';

import { FeaturesComponent } from './features.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RemComputeComponent } from './rem-compute/rem-compute.component';
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { GoogleChartTestComponent } from './google-chart-test/google-chart-test.component';
import { AnimationFrameComponent } from './animation-frame/animation-frame.component';
import { MapSvgCutComponent } from './map-svg-cut/map-svg-cut.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MultipleInstanceComponent } from './multiple-instance/multiple-instance.component';
import { ToastViewComponent } from './toast-view/toast-view.component';

const routes: Routes = [
  {
    path: routeDictionary.features.root,
    component: FeaturesComponent,
    children: [
      { path: routeDictionary.features.children.dashboard, component: DashboardComponent },
      { path: routeDictionary.features.children.remCompute, component: RemComputeComponent },
      { path: routeDictionary.features.children.cssSelector, component: CssSelectorComponent },
      { path: routeDictionary.features.children.googleChart, component: GoogleChartTestComponent },
      { path: routeDictionary.features.children.animationFrame, component: AnimationFrameComponent },
      { path: routeDictionary.features.children.mapSvgCut, component: MapSvgCutComponent },
      { path: routeDictionary.features.children.selectFilter, component: FilterSelectComponent },
      { path: routeDictionary.features.children.googleMap, component: GoogleMapComponent },
      { path: routeDictionary.features.children.multipleInstance, component: MultipleInstanceComponent },
      { path: routeDictionary.features.children.toastMassage, component: ToastViewComponent },
      { path: '**', redirectTo: routeDictionary.features.children.dashboard, pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'core', pathMatch: 'full' }
];

/**
 * features routing modulez
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
