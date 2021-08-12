import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./others/others.module').then((m) => m.OthersModule)
  },
  { path: '**', redirectTo: 'features', pathMatch: 'full' }
];

/**
 * app routing module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
