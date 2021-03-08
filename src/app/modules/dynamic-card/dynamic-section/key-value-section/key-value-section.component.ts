import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { SectionInterface } from '../../interfaces/extract-config.interface';
import { FormatToViewService } from '../../services/format-to-view.service';
import { FormatToViewInterface } from '../../interfaces/format-to-view.interface';

/**
 * key value section
 */
@Component({
  selector: 'app-key-value-section',
  templateUrl: './key-value-section.component.html',
  styleUrls: ['./key-value-section.component.scss']
})
export class KeyValueSectionComponent implements OnInit, OnChanges {
  @Input() section?: SectionInterface;
  @Input() totalCost = 0;

  formatValue: FormatToViewInterface[] = [];

  constructor(private formatToView: FormatToViewService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes) {
    }
    this.formatValueToView(this.section);
    console.log('formatValue', this.formatValue);
  }

  private formatValueToView(section: SectionInterface) {
    const formatValue: FormatToViewInterface[] = [];
    section.extractData.forEach((data) => {
      const resultValue = this.formatToView.formatViewValue(
        data,
        section.dictionary,
        this.totalCost
      );
      if (resultValue) {
        formatValue.push(resultValue);
      }
    });
    this.formatValue = formatValue.sort((first, second) => {
      return first.displayOrder - second.displayOrder;
    });
  }
}
