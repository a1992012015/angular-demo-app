import {OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

/**
 * toast ref
 */
export class ToastRef {
  constructor(
    private readonly overlay: OverlayRef,
    private readonly closeSub: Subject<OverlayRef>,
    private readonly attachedSub: Subject<OverlayRef>
  ) {}

  getOverlay(): OverlayRef {
    return this.overlay;
  }

  close(): void {
    this.overlay.dispose();
    this.closeSub.next(this.overlay);
  }

  animationDone(): void {
    this.attachedSub.next(this.overlay);
  }

  updatePosition(strategy: PositionStrategy): void {
    this.overlay.updatePositionStrategy(strategy);
  }

  isVisible(): HTMLElement {
    return this.overlay?.overlayElement;
  }

  getPosition(): DOMRect {
    return this.overlay?.overlayElement.getBoundingClientRect();
  }
}
