import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSliderComponent } from './view-slider/view-slider.component';
import { MeetTimerComponent } from './meet-timer/meet-timer.component';
import { ViewChartComponent } from './view-chart/view-chart.component';
import { MagikarpCodeComponent } from './magikarp-code/magikarp-code.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'meet-timer' },
  { path: 'meet-timer', component: MeetTimerComponent },
  { path: 'range-slider', component: ViewSliderComponent },
  { path: 'line-chart', component: ViewChartComponent },
  { path: 'magikarp-code', component: MagikarpCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
