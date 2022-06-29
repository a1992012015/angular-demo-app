import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';

import { NoticeDynamicService } from '../../../notice-dynamic.service';
import { cardDictionary } from '../../../dynamic-card/card-dictionary';
import { DefaultContainer } from '../../container-class/default.container';
import { DynamicCard } from '../../../services/utilities-class/dynamic-card';
import { AttachHostDirective } from '../../../services/attach-host.directive';
import { DYNAMIC_CARD } from '../../../interfaces/service-token/dynamic-token';

@Component({
  selector: 'angular-demo-app-default-container',
  templateUrl: './default-container.component.html',
  styleUrls: ['./default-container.component.scss']
})
export class DefaultContainerComponent implements OnInit {
  @ViewChild('attachRef', { static: true }) attachRef?: AttachHostDirective;
  @Input() container?: DefaultContainer;

  constructor(
    @Inject(DYNAMIC_CARD) private dynamic: DynamicCard,
    private noticeDynamicService: NoticeDynamicService
  ) {
  }

  ngOnInit(): void {
    this.attachCardComponent();
  }

  private attachCardComponent(): void {
    this.dynamic.mergeConfig.forEach((card) => {
      const cardInstance = new cardDictionary[card.cardType](card);
      if (this.attachRef) {
        this.noticeDynamicService.attachViewComponent(
          cardInstance.cardComponent({ card: cardInstance }),
          this.attachRef
        );
      }
    });
  }
}
