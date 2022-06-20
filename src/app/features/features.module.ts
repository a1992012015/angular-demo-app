import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { FeaturesRoutingModule } from './features-routing.module';
import { MatDesignModule } from '../mat-design/mat-design.module';
import { SharesModule } from '../shares/shares.module';

import { FeaturesComponent } from './features.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RemComputeComponent } from './rem-compute/rem-compute.component';
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { GoogleChartTestComponent } from './google-chart-test/google-chart-test.component';
import { AnimationFrameComponent } from './animation-frame/animation-frame.component';
import { MapSvgCutComponent } from './map-svg-cut/map-svg-cut.component';
import { MatSelectFilterComponent } from './filter-select/mat-select-filter/mat-select-filter.component';
import { MatSelectContainerComponent } from './filter-select/mat-select-container/mat-select-container.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MultipleInstanceComponent } from './multiple-instance/multiple-instance.component';
import { HeroBioComponent } from './multiple-instance/hero-bio/hero-bio.component';
import { HeroContactComponent } from './multiple-instance/hero-contact/hero-contact.component';
import { HeroItemComponent } from './multiple-instance/hero-item/hero-item.component';
import { ToastViewComponent } from './toast-view/toast-view.component';

import { HeroService } from './multiple-instance/services/hero.service';
import { HeroCacheService } from './multiple-instance/services/hero-cache.service';
import { LoggerService } from './multiple-instance/services/logger.service';
import { SelectMenuComponent } from './select-menu/select-menu.component';
import { DynamicLoadComponent } from './dynamic-load/dynamic-load.component';
import { DynamicContainerComponent } from './dynamic-load/dynamic-container/dynamic-container.component';
import { DynamicDefaultComponent } from './dynamic-load/dynamic-default/dynamic-default.component';
import { AddHostDirective } from './dynamic-load/add-host.directive';
import { TypescriptTestComponent } from './typescript-test/typescript-test.component';

/**
 * features module
 */
@NgModule({
  declarations: [
    FeaturesComponent,
    DashboardComponent,
    RemComputeComponent,
    CssSelectorComponent,
    GoogleChartTestComponent,
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
    SelectMenuComponent,
    DynamicLoadComponent,
    DynamicContainerComponent,
    DynamicDefaultComponent,
    AddHostDirective,
    TypescriptTestComponent
  ],
  imports: [
    CommonModule,
    GoogleChartsModule,
    FeaturesRoutingModule,
    MatDesignModule,
    ReactiveFormsModule,
    FormsModule,
    SharesModule.forRoot()
  ],
  providers: [HeroService, HeroCacheService, LoggerService]
})
export class FeaturesModule {
}
