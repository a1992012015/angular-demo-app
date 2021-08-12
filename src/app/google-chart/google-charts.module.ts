import { LOCALE_ID, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScriptLoaderService } from './script-loader/script-loader.service';
import { RawChartComponent } from './components/raw-chart.component';
import { GoogleChartComponent } from './components/google-chart.component';
import { GOOGLE_API_KEY } from './interfaces/events.interface';

/**
 * setupScriptLoaderService
 */
export const setupScriptLoaderService = (
  localeId: string,
  googleApiKey: string): ScriptLoaderService => {
  return new ScriptLoaderService(localeId, googleApiKey);
};

/**
 * Google charts providers
 */
export const GOOGLE_CHARTS_PROVIDERS: Provider[] = [
  {
    provide: ScriptLoaderService,
    useFactory: setupScriptLoaderService,
    deps: [LOCALE_ID, GOOGLE_API_KEY]
  }
];

/**
 * GoogleChartsModule
 */
@NgModule({
  providers: [
    ScriptLoaderService
  ],
  declarations: [
    GoogleChartComponent,
    RawChartComponent
  ],
  exports: [
    GoogleChartComponent,
    RawChartComponent
  ]
})
export class GoogleChartsModule {
  type = 'GoogleChartsModule';

  static forRoot(googleApiKey?: string): ModuleWithProviders<RouterModule> {
    return {
      ngModule: GoogleChartsModule,
      providers: [
        GOOGLE_CHARTS_PROVIDERS,
        { provide: GOOGLE_API_KEY, useValue: googleApiKey ? googleApiKey : '' }
      ]
    };
  }
}
