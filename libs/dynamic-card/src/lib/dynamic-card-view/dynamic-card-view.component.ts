import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { IDynamicParams } from '@angular-demo-app/data';

import { NoticeDynamicService } from '../notice-dynamic.service';
import { DynamicCard } from '../services/utilities-class/dynamic-card';
import { AttachHostDirective } from '../services/attach-host.directive';
import { DYNAMIC_CARD } from '../interfaces/service-token/dynamic-token';
import { containerDictionary } from '../dynamic-container/container-dictionary';

@Component({
  selector: 'angular-demo-app-dynamic-card-view',
  templateUrl: './dynamic-card-view.component.html',
  styleUrls: ['./dynamic-card-view.component.scss'],
  viewProviders: [
    { provide: DYNAMIC_CARD, useValue: new DynamicCard() },
    NoticeDynamicService
  ]
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
    this.dynamic.init(this.data);
    console.log('dynamic', this.dynamic);
    this.attachContainerComponent();
  }

  private attachContainerComponent(): void {
    if (this.attachRef) {
      const containerInstance = new containerDictionary[this.dynamic.container]();
      this.noticeDynamicService.attachViewComponent(
        containerInstance.containerComponent({ container: containerInstance }),
        this.attachRef
      );
    }
  }
}
