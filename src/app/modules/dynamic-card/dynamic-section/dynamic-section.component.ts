import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { SectionInterface } from '../interfaces/extract-config.interface';
import { SectionName } from '../interfaces/card-config.interface';

/**
 * dynamic section
 */
@Component({
  selector: 'app-dynamic-section',
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss']
})
export class DynamicSectionComponent implements OnInit {
  @Input() sections: SectionInterface[] = [];

  sectionName = SectionName;

  ngOnInit(): void {
    console.log('%c=============================================', 'color:red;');
    console.log('sections', this.sections);
  }
}
