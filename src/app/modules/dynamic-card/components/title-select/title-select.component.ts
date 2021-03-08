import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { SelectOptionInterface } from '../../interfaces/dynamic-card.interface';

/**
 * title select
 */
@Component({
  selector: 'app-title-select',
  templateUrl: './title-select.component.html',
  styleUrls: ['./title-select.component.scss']
})
export class TitleSelectComponent implements OnInit {
  @Input() options: SelectOptionInterface[] = [];
  @Input() defaultSelect = 0;
  @Output() selectChange = new EventEmitter<number>();

  ngOnInit(): void {
    console.log('options', this.options);
    console.log('defaultSelect', this.defaultSelect);
  }

  selectChangeEvent(event: MatSelectChange) {
    console.log(event);
    this.selectChange.emit(event.value);
  }

  noBubbling(event) {
    event.stopPropagation();
  }
}
