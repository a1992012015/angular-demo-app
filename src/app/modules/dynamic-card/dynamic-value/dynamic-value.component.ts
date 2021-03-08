import { Component, Input, OnInit } from '@angular/core';

import { FormatToViewInterface } from '../interfaces/format-to-view.interface';

/**
 * dynamic value
 */
@Component({
  selector: 'app-dynamic-value',
  templateUrl: './dynamic-value.component.html',
  styleUrls: ['./dynamic-value.component.scss']
})
export class DynamicValueComponent implements OnInit {
  @Input() values: FormatToViewInterface[] = [];

  ngOnInit(): void {
    console.log('values', this.values);
  }
}
