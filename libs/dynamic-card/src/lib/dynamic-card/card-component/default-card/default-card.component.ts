import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { DefaultCard } from '../../card-class/default.card';
import { NoticeDynamicService } from '../../../notice-dynamic.service';
import { AttachHostDirective } from '../../../services/attach-host.directive';
import { contentDictionary } from '../../../dynamic-content/content-dictionary';

@Component({
  selector: 'angular-demo-app-default-card',
  templateUrl: './default-card.component.html',
  styleUrls: ['./default-card.component.scss']
})
export class DefaultCardComponent implements OnInit {
  @ViewChild('attachRef', { static: true }) attachRef?: AttachHostDirective;
  @Input() card?: DefaultCard;

  constructor(private noticeDynamicService: NoticeDynamicService) {}

  ngOnInit(): void {
    this.attachSectionComponent();
  }

  private attachSectionComponent(): void {
    (this.card?.contents || []).forEach((content) => {
      const contentInstance = new contentDictionary[content.contentType](content);
      if (this.attachRef) {
        this.noticeDynamicService.attachViewComponent(
          contentInstance.contentComponent({ content: contentInstance }),
          this.attachRef
        );
      }
    });
  }
}
