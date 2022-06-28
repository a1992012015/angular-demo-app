import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OthersComponent } from './others.component';
import { otherRoute } from '../../dictionary/router-dictionary';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {

    path: otherRoute.other.init,
    component: OthersComponent,
    children: [
      { path: otherRoute.other.children.dashboard, component: DashboardComponent },
      { path: '**', redirectTo: otherRoute.other.children.dashboard, pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: otherRoute.other.init, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule {
}
