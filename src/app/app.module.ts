import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatDesignModule } from './module/mat-design.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { MeetTimerComponent } from './meet-timer/meet-timer.component';
import { ViewSliderComponent } from './view-slider/view-slider.component';
import { ViewChartComponent } from './view-chart/view-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    RangeSliderComponent,
    MeetTimerComponent,
    ViewSliderComponent,
    ViewChartComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDesignModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
