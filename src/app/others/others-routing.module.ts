import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { OthersComponent } from './others.component';

const routes: Routes = [
  {
    path: '',
    component: OthersComponent,
  },
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
