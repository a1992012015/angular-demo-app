import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { TOAST_CONFIG_TOKEN, ToastData, ToastInterface, ToastType } from '../services/toast.interface';
import { toastAnimations, ToastAnimationState } from '../services/toast-animation';
import { ToastRef } from '../services/toast-ref';

/**
 * toast
 */
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [toastAnimations.fadeToast]
})
export class ToastComponent implements OnInit, OnDestroy {
  animationState: ToastAnimationState = 'default';
  iconType = '';
  className = '';
  toastConfigs?: ToastInterface;
  animationParams?: { fadeIn: number; fadeOut: number };

  private intervalId: number;

  constructor(
    readonly ref: ToastRef,
    readonly data: ToastData,
    @Inject(TOAST_CONFIG_TOKEN) private toastConfig: ToastInterface
  ) {
    this.iconType = this.getIconTypeName(this.data.type);
    this.toastConfigs = this.toastConfig;
    this.animationParams = {
      fadeIn: this.toastConfigs.animation.fadeIn,
      fadeOut: this.toastConfigs.animation.fadeOut
    };
  }

  ngOnInit() {
    this.intervalId = setTimeout(() => this.animationState = 'closing', 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';
    if (isFadeOut && itFinished) {
      this.close();
    } else if (!isFadeOut && !isFadeOut) {
      this.animationDone();
    }
  }

  private close() {
    this.ref.close();
  }

  private animationDone() {
    this.ref.animationDone();
  }

  protected getIconTypeName(type: ToastType): string {
    if (type === ToastType.SUCCESS) {
      this.className = 'SUCCESS';
      return 'iconcheck';
    } else if (type === ToastType.INFO) {
      this.className = 'INFO';
      return 'iconprompt';
    } else if (type === ToastType.ERROR) {
      this.className = 'ERROR';
      return 'iconprompt';
    } else if (type === ToastType.WARNING) {
      this.className = 'WARNING';
      return 'iconwarning';
    } else {
      this.className = 'SUCCESS';
      return 'iconcheck';
    }
  }
}
