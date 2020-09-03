import { Component, EventEmitter, Injector, OnInit } from '@angular/core';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ImageStepOverlayComponent, PORTAL_IMAGE_STEP_DATA } from './image-step-overlay/image-step-overlay.component';

@Component({
  selector: 'app-images-step',
  templateUrl: './images-step.component.html',
  styleUrls: ['./images-step.component.scss'],
})
export class ImagesStepComponent implements OnInit {
  private overlayRef: OverlayRef;
  private $destroy = new Subject();

  constructor(
    private overlay: Overlay,
    private injector: Injector,
  ) {
  }

  ngOnInit(): void {
  }

  openOverlay() {
    this.overlayRef = this.overlay.create();
    const userProfilePortal = new ComponentPortal(
      ImageStepOverlayComponent,
      null,
      this.createInjector(),
    );
    const containerRef = this.overlayRef.attach(userProfilePortal);

    const eventEmitter: EventEmitter<string> = new EventEmitter<string>();
    containerRef.instance.outEvent = eventEmitter;
    eventEmitter.pipe(takeUntil(this.$destroy)).subscribe((event: string) => this.handlerPortalEvent(event));
  }

  private closeOverlay() {
    this.overlayRef.detach();
  }

  private createInjector() {
    const injectionTokens = new WeakMap();
    injectionTokens.set(PORTAL_IMAGE_STEP_DATA, {
      images: ['1', '2', '3', '4', '5'],
    });
    return new PortalInjector(this.injector, injectionTokens);
  }

  private handlerPortalEvent(event: string): void {
    console.log('收到了Portal返回上来的事件信息:' + event);
    this.closeOverlay();
  }
}
