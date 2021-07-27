import { FirebaseAppConfig } from '@angular/fire';
import { LocaleIdType } from './locale-id.type';

/**
 * loginMethodEnum
 */
export enum loginMethodEnum {
  'google' = 'google',
  'cropwise' = 'cropwise'
}

/**
 * environment
 */
export interface EnvironmentInterface {
  googleMapApiKey: string;
  googleAuthClientId: string;
  apiEndPoint: string;
  /**
   * @deprecated
   * Suggest to use `@Inject(LOCALE_ID)` instead.
   *
   * The best way is remove this field in environment file, But for smallest modification. Keep it
   * here and set it in the AppComponent.
   */
  localeId: LocaleIdType;
  production: boolean;
  isGoogleProduction: boolean;
  showDemoFeatures?: boolean;
  loginMethod: loginMethodEnum[];
  firebase?: FirebaseAppConfig;
  oauth?: {
    cropwise: {
      clientId: string;
      url: string;
    };
  };
}
