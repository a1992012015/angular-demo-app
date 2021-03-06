import { Inject, Injectable, Injector } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';

import { DirectionType, PositionType, TOAST_CONFIG_TOKEN, ToastData, ToastInterface } from './toast.interface';
import { ToastComponent } from '../toast/toast.component';
import { ToastRef } from './toast-ref';

/**
 * toast
 */
@Injectable()
export class ToastService {
  private toastRefs: ToastRef[] = [];
  private toastCloseSub: Subject<OverlayRef> = new Subject();

  constructor(
    private overlay: Overlay,
    private injector: Injector,
    @Inject(TOAST_CONFIG_TOKEN) private toastConfig: ToastInterface
  ) {
    this.toastCloseSub.subscribe((toast) => {
      this.toastRefs = this.toastRefs.filter((ref) => toast !== ref.getOverlay());
      this.toastRefs.forEach((ref, index) => {
        const positionStrategy = this.getPositionStrategy(index - 1);
        ref.updatePosition(positionStrategy);
      });
    });
  }

  show(data: ToastData) {
    const positionStrategy = this.getPositionStrategy(this.toastRefs.length - 1);
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef, this.toastCloseSub);
    this.toastRefs.push(toastRef);

    const injector = this.getInjector(data, toastRef);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);

    overlayRef.attach(toastPortal);

    return toastRef;
  }

  private getPositionStrategy(index: number) {
    const [vPosition, vValue] = this.getPosition(DirectionType.VERTICALLY, index);
    const [hPosition, hValue] = this.getPosition(DirectionType.HORIZONTALLY, index);
    return this.overlay.position().global()[vPosition](vValue)[hPosition](hValue);
  }

  private getPosition(direction: DirectionType, index: number) {
    const lastToast = this.toastRefs[index];
    const position = this.toastConfig.position;

    if (direction === DirectionType.VERTICALLY) {
      if (lastToast?.isVisible()) {
        const vertically = [PositionType.CENTER, PositionType.TOP];
        if (vertically.includes(position.vertically)) {
          return ['top', `${lastToast.getPosition().bottom + 10}px`];
        } else {
          return ['bottom', `${lastToast.getPosition().top + 10}px`];
        }
      } else {
        if (position.vertically === PositionType.TOP) {
          return ['top', `${this.toastConfig.position.margin}px`];
        } else if (position.vertically === PositionType.BOTTOM) {
          return ['bottom', `${this.toastConfig.position.margin}px`];
        } else {
          return ['centerVertically', '0'];
        }
      }
    } else {
      if (position.vertically === PositionType.LEFT) {
        return ['left', `${this.toastConfig.position.margin}px`];
      } else if (position.vertically === PositionType.RIGHT) {
        return ['right', `${this.toastConfig.position.margin}px`];
      } else {
        return ['centerHorizontally', '0'];
      }
    }
  }

  private getInjector(data: ToastData, toastRef: ToastRef) {
    return Injector.create({
      providers: [
        { provide: ToastRef, useValue: toastRef },
        { provide: ToastData, useValue: data }
      ],
      parent: this.injector
    });
  }
}
