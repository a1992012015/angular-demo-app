import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { DefaultContent } from '../../content-class/default.content';
import { NoticeDynamicService } from '../../../notice-dynamic.service';
import { AttachHostDirective } from '../../../services/attach-host.directive';
import { sectionDictionary } from '../../../dynamic-section/section-dictionary';

@Component({
  selector: 'angular-demo-app-default-content',
  templateUrl: './default-content.component.html',
  styleUrls: ['./default-content.component.scss']
})
export class DefaultContentComponent implements OnInit {
  @ViewChild('attachRef', { static: true }) attachRef?: AttachHostDirective;
  @Input() content?: DefaultContent;

  constructor(private noticeDynamicService: NoticeDynamicService) {}

  ngOnInit(): void {
    this.attachSectionComponent()
  }

  private attachSectionComponent(): void {
    (this.content?.sections || []).forEach((section) => {
      const sectionInstance = new sectionDictionary[section.sectionType](section);
      if (this.attachRef) {
        this.noticeDynamicService.attachViewComponent(
          sectionInstance.sectionComponent({ section: sectionInstance }),
          this.attachRef
        );
      }
    });
  }
}
