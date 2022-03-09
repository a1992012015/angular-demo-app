import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { IDynamicComponent } from 'app/features/dynamic-load/dynamic-load.component';
import { AddHostDirective } from 'app/features/dynamic-load/add-host.directive';
import { InternalNoticeContentService } from 'app/features/dynamic-load/internal-notice-content.service';
import { DynamicCardService } from 'app/features/dynamic-load/dynamic-card.service';

/**
 * container
 */
@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss'],
  viewProviders: [InternalNoticeContentService]
})
export class DynamicContainerComponent implements OnInit {
  @ViewChild('header', { static: true }) adHost: AddHostDirective;
  @Input() dynamicComponent: IDynamicComponent;

  constructor(
    private dynamicCardService: DynamicCardService,
    private internalNoticeContentService: InternalNoticeContentService,
  ) {
  }

  ngOnInit(): void {
    console.log('dynamicComponent', this.dynamicComponent);
    this.loadComponent();
  }

  loadComponent() {
    console.log('adHost', this.adHost);

    const componentFactory = this.dynamicCardService.attachViewComponent(
      this.dynamicComponent,
      this.adHost
    );

    console.log('componentFactory', componentFactory);

    // this.internalNoticeContentService.setCardContentSub({ action: 'test' });
  }

  componentClear() {
    this.adHost.viewContainerRef.clear();
  }
}
