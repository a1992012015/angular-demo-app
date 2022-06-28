import { ModuleWithProviders, NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './services/toast.interface';
import {MatDesignModule} from "../mat-design/mat-design.module";
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './services/toast.service';

/**
 * toast module
 */
@NgModule({
  imports: [OverlayModule, MatDesignModule, CommonModule],
  declarations: [ToastComponent],
  entryComponents: [ToastComponent],
  providers: [ToastService]
})
export class ToastModule {
  static forRoot(config = defaultToastConfig): ModuleWithProviders<ToastModule> {
    return {
      ngModule: ToastModule,
      providers: [{ provide: TOAST_CONFIG_TOKEN, useValue: { ...defaultToastConfig, ...config } }]
    };
  }
}
