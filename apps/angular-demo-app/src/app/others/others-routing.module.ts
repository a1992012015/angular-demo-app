import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { otherRoute } from '../../interfaces/routing-interface';

import { OthersComponent } from './others.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrintTestComponent } from './print-test/print-test.component';

const routes: Routes = [
  {
    path: otherRoute.other.init,
    component: OthersComponent,
    children: [
      { path: otherRoute.other.children.dashboard, component: DashboardComponent },
      { path: otherRoute.other.children.printTest, component: PrintTestComponent },
      { path: '**', redirectTo: otherRoute.other.children.dashboard, pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: otherRoute.other.init, pathMatch: 'full' }
];

/**
 * features routing module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule {
}
