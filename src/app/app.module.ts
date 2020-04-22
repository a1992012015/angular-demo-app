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

@NgModule({
  declarations: [
    AppComponent,
    CssSelectorComponent,
    DashboardComponent,
    BaseRemComputeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDesignModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
