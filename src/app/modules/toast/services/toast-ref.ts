import { PositionStrategy } from '@angular/cdk/overlay/position/position-strategy';
import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

/**
 * toast ref
 */
export class ToastRef {
  constructor(
    private readonly overlay: OverlayRef,
    private readonly closeSub: Subject<OverlayRef>
  ) {
  }

  getOverlay() {
    return this.overlay;
  }

  close() {
    this.overlay.dispose();
    this.closeSub.next(this.overlay);
  }

  updatePosition(strategy: PositionStrategy) {
    this.overlay.updatePositionStrategy(strategy);
  }

  isVisible() {
    return this.overlay?.overlayElement;
  }

  getPosition() {
    return this.overlay?.overlayElement.getBoundingClientRect();
  }
}
