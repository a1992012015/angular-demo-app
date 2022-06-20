import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {FeaturesRoutingModule} from './features-routing.module';
import {MatDesignModule} from '../mat-design/mat-design.module';

import {FeaturesComponent} from './features.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RemComputeComponent} from './rem-compute/rem-compute.component';
import {CssSelectorComponent} from './css-selector/css-selector.component';
import {ChartTestComponent} from './chart-test/chart-test.component';
import {AnimationFrameComponent} from './animation-frame/animation-frame.component';
import {MapSvgCutComponent} from './map-svg-cut/map-svg-cut.component';
import {MatSelectFilterComponent} from './filter-select/mat-select-filter/mat-select-filter.component';
import {MatSelectContainerComponent} from './filter-select/mat-select-container/mat-select-container.component';
import {FilterSelectComponent} from './filter-select/filter-select.component';
import {GoogleMapComponent} from './google-map/google-map.component';
import {MultipleInstanceComponent} from './multiple-instance/multiple-instance.component';
import {HeroBioComponent} from './multiple-instance/hero-bio/hero-bio.component';
import {HeroContactComponent} from './multiple-instance/hero-contact/hero-contact.component';
import {HeroItemComponent} from './multiple-instance/hero-item/hero-item.component';
import {ToastViewComponent} from './toast-view/toast-view.component';
//
import {HeroService} from './multiple-instance/services/hero.service';
import {HeroCacheService} from './multiple-instance/services/hero-cache.service';
import {LoggerService} from './multiple-instance/services/logger.service';
import {ToastModule} from "../toast/toast.module";

/**
 * features module
 */
@NgModule({
  declarations: [
    FeaturesComponent,
    DashboardComponent,
    RemComputeComponent,
    CssSelectorComponent,
    ChartTestComponent,
    AnimationFrameComponent,
    MapSvgCutComponent,
    MatSelectFilterComponent,
    MatSelectContainerComponent,
    FilterSelectComponent,
    GoogleMapComponent,
    MultipleInstanceComponent,
    HeroBioComponent,
    HeroContactComponent,
    HeroItemComponent,
    ToastViewComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatDesignModule,
    ToastModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HeroService, HeroCacheService, LoggerService]
})
export class FeaturesModule {
}
