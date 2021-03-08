import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapSvgComponent } from './features/google-map-svg/google-map-svg.component';
import { CssSelectorComponent } from './features/css-selector/css-selector.component';
import { GoogleChartComponent } from './features/google-chart/google-chart.component';
import { BaseRemComputeComponent } from './features/base-rem-compute/base-rem-compute.component';
import { RequestAnimationFrameComponent } from './features/request-animation-frame/request-animation-frame.component';
import { FilterSelectComponent } from './features/filter-select/filter-select.component';
import { MatSelectFilterComponent } from './features/filter-select/mat-select-filter/mat-select-filter.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MatDesignModule } from './modules/mat-design.module';
import { GoogleChartsModule } from './modules/google-chart/google-charts.module';

@NgModule({
  declarations: [
    AppComponent,
    CssSelectorComponent,
    DashboardComponent,
    BaseRemComputeComponent,
    GoogleChartComponent,
    RequestAnimationFrameComponent,
    GoogleMapSvgComponent,
    FilterSelectComponent,
    MatSelectFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDesignModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
