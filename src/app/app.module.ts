import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDesignModule } from './modules/mat-design.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapSvgComponent } from './features/google-map-svg/google-map-svg.component';
import { CssSelectorComponent } from './features/css-selector/css-selector.component';
import { GoogleChartComponent } from './features/google-chart/google-chart.component';
import { BaseRemComputeComponent } from './features/base-rem-compute/base-rem-compute.component';
import { RequestAnimationFrameComponent } from './features/request-animation-frame/request-animation-frame.component';
import { FilterSelectComponent } from './features/filter-select/filter-select.component';
import { MatSelectFilterComponent } from './features/filter-select/mat-select-filter/mat-select-filter.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { GoogleChartsModule } from './modules/google-chart/google-charts.module';
import { DynamicCardModule } from './modules/dynamic-card/dynamic-card.module';
import { ViewCardComponent } from './features/view-card/view-card.component';
import { PublicCropMetadataService } from './service/public-crop-metadata.service';
import { MatSelectContainerComponent } from './features/filter-select/mat-select-container/mat-select-container.component';
import { ControlAccessorComponent } from './features/control-accessor/control-accessor.component';
import { MatRangeInputComponent } from './features/control-accessor/mat-range-input/mat-range-input.component';
import { MatRangeSliderComponent } from './features/control-accessor/mat-range-slider/mat-range-slider.component';
import { ToastViewComponent } from './features/toast-view/toast-view.component';
import { ToastModule } from './modules/toast/toast.module';
import { MultipleInstanceComponent } from './features/multiple-instance/multiple-instance.component';
import { HeroBioComponent } from './features/multiple-instance/hero-bio/hero-bio.component';
import { HeroContactComponent } from './features/multiple-instance/hero-contact/hero-contact.component';
import { HeroCacheService } from './features/multiple-instance/services/hero-cache.service';
import { HeroService } from './features/multiple-instance/services/hero.service';
import { HeroItemComponent } from './features/multiple-instance/hero-item/hero-item.component';

/**
 * app
 */
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
    MatSelectFilterComponent,
    ViewCardComponent,
    MatSelectContainerComponent,
    ControlAccessorComponent,
    MatRangeInputComponent,
    MatRangeSliderComponent,
    ToastViewComponent,
    MultipleInstanceComponent,
    HeroBioComponent,
    HeroContactComponent,
    HeroItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDesignModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    DynamicCardModule,
    FormsModule,
    ToastModule.forRoot()
  ],
  providers: [PublicCropMetadataService, HeroCacheService, HeroService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
