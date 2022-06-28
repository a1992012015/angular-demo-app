import { MatDesignModule } from '@angular-demo-app/mat-design';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeaturesRoutingModule } from './features-routing.module';

import { HeroService } from './multiple-instance/services/hero.service';
import { LoggerService } from './multiple-instance/services/logger.service';
import { HeroCacheService } from './multiple-instance/services/hero-cache.service';

import { FeaturesComponent } from './features.component';
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
    DashboardComponent,
    FormFieldComponent,
    CssSelectorComponent,
    HeroContactComponent,
    AnimationFrameComponent,
    MultipleInstanceComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, MatDesignModule],
  providers: [HeroService, HeroCacheService, LoggerService]
})
export class FeaturesModule {}