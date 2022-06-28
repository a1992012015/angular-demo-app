import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { featureRoute } from '../dictionary/router-dictionary';

const routes: Routes = [
  {
    path: featureRoute.features.root,
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  // {
  //   path: otherRoute.other.root,
  //   loadChildren: () => import('./others/others.module').then((m) => m.OthersModule)
  // },
  { path: '**', redirectTo: featureRoute.features.root, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
