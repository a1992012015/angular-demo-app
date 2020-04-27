import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDesignModule } from './modules/mat-design.module';
import { BaseRemComputeComponent } from './base-rem-compute/base-rem-compute.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { GoogleChartsModule } from './modules/google-chart/google-charts.module';

@NgModule({
  declarations: [
    AppComponent,
    CssSelectorComponent,
    DashboardComponent,
    BaseRemComputeComponent,
    GoogleChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDesignModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
