import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { MeetTimerComponent } from './meet-timer/meet-timer.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'meet-timer'},
  {path: 'meet-timer', component: MeetTimerComponent},
  {path: 'range-slider', component: RangeSliderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
