import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDesignModule } from '../mat-design/mat-design.module';

import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast/services/toast.service';
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './toast/services/toast.interface';
import { CommonService } from './common.service';

/**
 * share module
 */
@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    MatDesignModule
  ],
  exports: [],
  providers: [ToastService, CommonService]
})
export class SharesModule {
  static forRoot(config = defaultToastConfig): ModuleWithProviders<SharesModule> {
    return {
      ngModule: SharesModule,
      providers: [
        { provide: TOAST_CONFIG_TOKEN, useValue: { ...defaultToastConfig, ...config } }
      ]
    };
  }
}
