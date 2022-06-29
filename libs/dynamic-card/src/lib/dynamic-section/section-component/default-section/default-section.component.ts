import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { DefaultSection } from '../../section-class/default.section';
import { NoticeDynamicService } from '../../../notice-dynamic.service';
import { valueDictionary } from '../../../dynamic-value/value-dictionary';
import { AttachHostDirective } from '../../../services/attach-host.directive';

@Component({
  selector: 'angular-demo-app-default-section',
  templateUrl: './default-section.component.html',
  styleUrls: ['./default-section.component.scss']
})
export class DefaultSectionComponent implements OnInit {
  @ViewChild('attachRef', { static: true }) attachRef?: AttachHostDirective;
  @Input() section?: DefaultSection;

  constructor(private noticeDynamicService: NoticeDynamicService) {}

  ngOnInit(): void {
    this.attachValueComponent()
  }

  private attachValueComponent(): void {
    (this.section?.values || []).forEach((value) => {
      const valueInstance = new valueDictionary[value.valueType](value);
      if (this.attachRef) {
        this.noticeDynamicService.attachViewComponent(
          valueInstance.valueComponent({ value: valueInstance }),
          this.attachRef
        );
      }
    });
  }
}
