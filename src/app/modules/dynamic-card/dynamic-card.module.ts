import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDesignModule } from '../mat-design.module';
import { DynamicSectionComponent } from './dynamic-section/dynamic-section.component';
import { FormatToViewService } from './services/format-to-view.service';
import { ExtractConfigService } from './services/extract-config.service';
import { TitleSelectComponent } from './components/title-select/title-select.component';
import { YieldMatrixCardComponent } from './dynamic-card/yield-matrix-card/yield-matrix-card.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { KeyValueSectionComponent } from './dynamic-section/key-value-section/key-value-section.component';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { MassageSectionComponent } from './dynamic-section/massage-section/massage-section.component';
import { NumberValueComponent } from './dynamic-value/number-value/number-value.component';
import { MergeConfigService } from './services/merge-config.service';
import { GoogleChartsModule } from '../google-chart/google-charts.module';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { DynamicValueComponent } from './dynamic-value/dynamic-value.component';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { KeyValueCardComponent } from './dynamic-card/key-value-card/key-value-card.component';

/**
 * dynamic card
 */
@NgModule({
  declarations: [
    DynamicCardComponent,
    DynamicSectionComponent,
    DynamicValueComponent,
    DynamicContainerComponent,
    KeyValueCardComponent,
    YieldMatrixCardComponent,
    CardTitleComponent,
    TitleSelectComponent,
    KeyValueSectionComponent,
    MassageSectionComponent,
    SectionTitleComponent,
    NumberValueComponent
  ],
  imports: [CommonModule, MatDesignModule, GoogleChartsModule],
  providers: [MergeConfigService, ExtractConfigService, FormatToViewService],
  exports: [DynamicContainerComponent]
})
export class DynamicCardModule { }
