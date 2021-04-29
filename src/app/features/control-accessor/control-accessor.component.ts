import { Component, OnInit } from '@angular/core';

import { FilterListInterface, RangeValueInterface } from '../../interface/filter-config.interface';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * control accessor
 */
@Component({
  selector: 'app-control-accessor',
  templateUrl: './control-accessor.component.html',
  styleUrls: ['./control-accessor.component.scss']
})
export class ControlAccessorComponent implements OnInit {
  filterConfig: FilterListInterface = {
    defaultValue: {},
    defaultView: true,
    display: () => true,
    extractKey: ['ranges', 'precipitation_accumulation_in_mms'],
    extractType: 2,
    filterValue: {
      range: { start: 4.33, end: 158 },
      form: new FormGroup({
        start: new FormControl(4.33),
        end: new FormControl(158)
      })
    },
    label: 'Avg. Monthly Precipitation',
    precision: 2,
    step: 0.01,
    tooltip: '',
    unit: 'mm',
    viewType: 0
  };

  rangeValue: RangeValueInterface;

  ngOnInit() {
    this.rangeValue = this.filterConfig.filterValue.range as RangeValueInterface;

    this.filterConfig.filterValue.form.valueChanges.subscribe((v) => {
      console.log('filterValue change', v);
    });
  }
}
