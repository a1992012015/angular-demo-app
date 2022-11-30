import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { featureRoute } from '../../dictionary/router-dictionary';

import { FeaturesComponent } from './features.component';
import { TodosApiComponent } from './todos-api/todos-api.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { ImmutableDataComponent } from './immutable-data/immutable-data.component';
import { AnimationFrameComponent } from './animation-frame/animation-frame.component';
import { MultipleInstanceComponent } from './multiple-instance/multiple-instance.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

const routes: Routes = [
  {
    path: featureRoute.features.init,
    component: FeaturesComponent,
    children: [
      { path: featureRoute.features.children.todosApi, component: TodosApiComponent },
      { path: featureRoute.features.children.dragDrop, component: DragDropComponent },
      { path: featureRoute.features.children.dashboard, component: DashboardComponent },
      { path: featureRoute.features.children.formField, component: FormFieldComponent },
      { path: featureRoute.features.children.chartDemo, component: ChartDemoComponent },
      { path: featureRoute.features.children.cssSelector, component: CssSelectorComponent },
      { path: featureRoute.features.children.immutableData, component: ImmutableDataComponent },
      { path: featureRoute.features.children.animationFrame, component: AnimationFrameComponent },
      { path: featureRoute.features.children.multipleInstance, component: MultipleInstanceComponent },
      { path: featureRoute.features.children.dynamicComponent, component: DynamicComponentComponent },
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
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
