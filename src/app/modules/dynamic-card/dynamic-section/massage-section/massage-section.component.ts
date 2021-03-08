import { Component, Input, OnInit } from '@angular/core';

import { SectionInterface } from '../../interfaces/extract-config.interface';

/**
 * massage section
 */
@Component({
  selector: 'app-massage-section',
  templateUrl: './massage-section.component.html',
  styleUrls: ['./massage-section.component.scss']
})
export class MassageSectionComponent implements OnInit {
  @Input() section?: SectionInterface;

  formatValue: string[] = [];

  ngOnInit(): void {
    this.section.extractData.map((massage) => {
      this.formatValue = [...this.formatValue, ...(Object.values(massage) as string[])];
    });
  }
}
