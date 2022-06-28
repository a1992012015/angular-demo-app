import {Inject, Injectable, Injector} from '@angular/core';
import {GlobalPositionStrategy, Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {Subject} from 'rxjs';

import {DirectionType, PositionType, TOAST_CONFIG_TOKEN, ToastData, ToastInterface} from './toast.interface';
import {ToastComponent} from '../toast/toast.component';
import {ToastRef} from './toast-ref';

type TFunctionName = 'top' | 'left' |'bottom' | 'right' | 'centerVertically' | 'centerHorizontally'

/**
 * toast
 */
@Injectable()
export class ToastService {
  private isAttachToast = false;
  private toastRefs: ToastRef[] = [];
  private toastList: ToastData[] = [];
  private toastCloseSub: Subject<OverlayRef> = new Subject();
  private toastAttachedSub: Subject<OverlayRef> = new Subject();

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

    this.toastAttachedSub.subscribe(() => {
      const toastData = this.toastList.shift();
      if (toastData) {
        this.creatOverlay(toastData);
      } else {
        this.isAttachToast = false;
      }
    });
  }

  show(data: ToastData): void {
    if (this.isAttachToast) {
      this.toastList.push(data);
    } else {
      this.isAttachToast = true;
      this.creatOverlay(data);
    }
  }

  private creatOverlay(data: ToastData): void {
    const positionStrategy = this.getPositionStrategy(this.toastRefs.length - 1);
    const overlayRef = this.overlay.create({positionStrategy});
    const toastRef = new ToastRef(overlayRef, this.toastCloseSub, this.toastAttachedSub);
    this.toastRefs.push(toastRef);
    const injector = this.getInjector(data, toastRef);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);
    overlayRef.attach(toastPortal);
  }

  private getPositionStrategy(index: number): GlobalPositionStrategy {
    const [vPosition, vValue] = this.getPosition(DirectionType.VERTICALLY, index);
    const [hPosition, hValue] = this.getPosition(DirectionType.HORIZONTALLY, index);
    return this.overlay.position().global()[vPosition](vValue)[hPosition](hValue);
  }

  private getPosition(direction: DirectionType, index: number): [TFunctionName, string] {
    const lastToast = this.toastRefs[index];
    const position = this.toastConfig.position || {
      vertically: PositionType.TOP,
      horizontally: PositionType.CENTER,
      margin: 20
    };

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
          return ['top', `${position.margin}px`];
        } else if (position.vertically === PositionType.BOTTOM) {
          return ['bottom', `${position.margin}px`];
        } else {
          return ['centerVertically', '0'];
        }
      }
    } else {
      if (position.vertically === PositionType.LEFT) {
        return ['left', `${position.margin}px`];
      } else if (position.vertically === PositionType.RIGHT) {
        return ['right', `${position.margin}px`];
      } else {
        return ['centerHorizontally', '0'];
      }
    }
  }

  private getInjector(data: ToastData, toastRef: ToastRef): Injector {
    return Injector.create({
      providers: [
        {provide: ToastRef, useValue: toastRef},
        {provide: ToastData, useValue: data}
      ],
      parent: this.injector
    });
  }
}
