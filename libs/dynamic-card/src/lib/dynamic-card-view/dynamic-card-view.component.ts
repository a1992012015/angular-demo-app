import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';

import { IDynamicParams } from '../interfaces/dynamic.interface';
import { NoticeDynamicService } from '../notice-dynamic.service';
import { DynamicCard } from '../services/utilities-class/dynamic-card';
import { AttachHostDirective } from '../services/attach-host.directive';
import { DYNAMIC_CARD } from '../interfaces/service-token/dynamic-token';
import { contentDictionary, EContainerType } from '../dynamic-container/container-dictionary';

@Component({
  selector: 'angular-demo-app-dynamic-card-view',
  templateUrl: './dynamic-card-view.component.html',
  styleUrls: ['./dynamic-card-view.component.scss'],
  viewProviders: [{ provide: DYNAMIC_CARD, useValue: new DynamicCard() }, NoticeDynamicService]
})
export class DynamicCardViewComponent implements OnInit {
  @ViewChild('attachRef', { static: true }) attachRef?: AttachHostDirective;
  @Input() data?: IDynamicParams;

  constructor(
    @Inject(DYNAMIC_CARD) private dynamic: DynamicCard,
    private noticeDynamicService: NoticeDynamicService
  ) {
  }

  ngOnInit(): void {
    console.log('dynamic', this.dynamic);
    this.initDynamicWorker();
  }

  private initDynamicWorker(): void {
    const params: IDynamicParams = {
      key: 'test-key',
      localeId: 'en-US',
      containerType: EContainerType.DEFAULT,
      config: new Map([
        ['first', { index: 1 }],
        ['second', { index: 2 }]
      ])
    };
    this.dynamic.init(this.data || params);
    console.log('dynamic', this.dynamic);
    this.attachContainerComponent();
  }

  private attachContainerComponent(): void {
    if (this.attachRef) {
      const containerInstance = new contentDictionary[this.dynamic.container]();
      this.noticeDynamicService.attachViewComponent(
        containerInstance.containerComponent({ container: containerInstance }),
        this.attachRef
      );
    }
  }
}
