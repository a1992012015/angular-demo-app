import { Component, Input, OnInit } from '@angular/core';

import { FormatToViewInterface } from '../../interfaces/format-to-view.interface';

/**
 * number value
 */
@Component({
  selector: 'app-number-value',
  templateUrl: './number-value.component.html',
  styleUrls: ['./number-value.component.scss']
})
export class NumberValueComponent implements OnInit {
  @Input() value?: FormatToViewInterface;
  @Input() selectedIndex = -1;
  @Input() index = 0;

  ngOnInit(): void {
    console.log('value', this.value);
  }
}
