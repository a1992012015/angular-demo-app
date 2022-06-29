import { MatDesignModule } from '@angular-demo-app/mat-design';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@angular-demo-app/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeaturesRoutingModule } from './features-routing.module';

import { HeroService } from './multiple-instance/services/hero.service';
import { LoggerService } from './multiple-instance/services/logger.service';
import { HeroCacheService } from './multiple-instance/services/hero-cache.service';

import { FeaturesComponent } from './features.component';
import { TodosApiComponent } from './todos-api/todos-api.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { HeroBioComponent } from './multiple-instance/hero-bio/hero-bio.component';
import { HeroItemComponent } from './multiple-instance/hero-item/hero-item.component';
import { AnimationFrameComponent } from './animation-frame/animation-frame.component';
import { MultipleInstanceComponent } from './multiple-instance/multiple-instance.component';
import { HeroContactComponent } from './multiple-instance/hero-contact/hero-contact.component';

@NgModule({
  declarations: [
    HeroBioComponent,
    FeaturesComponent,
    HeroItemComponent,
    TodosApiComponent,
    DashboardComponent,
    FormFieldComponent,
    CssSelectorComponent,
    HeroContactComponent,
    AnimationFrameComponent,
    MultipleInstanceComponent,
  ],
  imports: [CommonModule, HttpClientModule, FeaturesRoutingModule, MatDesignModule, UiModule],
  providers: [HeroService, HeroCacheService, LoggerService],
})
export class FeaturesModule {}
