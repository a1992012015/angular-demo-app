import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import { divide } from 'lodash-es';
import { DateFilterFn } from '@angular/material/datepicker';

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

/**
 * rem compute component
 */
@Component({
  selector: 'app-rem-compute',
  templateUrl: './rem-compute.component.html',
  styleUrls: ['./rem-compute.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class RemComputeComponent implements OnInit {
  rangeDate = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  options: FormGroup;
  fontRem = 0;

  filterHandle$ = this.filterHandle.bind(this);

  constructor(private fb: FormBuilder) {
    this.options = fb.group({
      fontSize: new FormControl(16),
      fieldId: new FormControl('', [
        Validators.required,
        Validators.pattern(new RegExp('^[0-9a-zA-Z]+([^\u4e00-\u9fa5/]+[0-9a-zA-Z]+)*$'))
      ])
    });
  }

  ngOnInit(): void {
    this.getFontRem();

    this.options?.get('fieldId')?.valueChanges.subscribe(() => {
      console.log('%c=============================', 'color: red;');
      console.log('fieldId', this.options.get('fieldId'));
      console.log('fieldId errors', this.options?.get('fieldId')?.errors);
      console.log('fieldId errors', this.options?.get('fieldId')?.errors?.['pattern']?.actualValue);
      console.log('fieldId errors',
        this.options?.get('fieldId')?.errors?.['pattern']?.requiredPattern);
    });
  }

  getFontRem() {
    this.fontRem = divide(divide(this.options.value.fontSize || 0, 16), 0.25);
  }

  filterHandle<D>(d: D | null): boolean {
    const startForm = this.rangeDate.get('start');
    const endForm = this.rangeDate.get('end');
    const current = (d as unknown) as Moment;
    if (startForm?.value && endForm?.value) {
      return (startForm?.value as Moment)?.unix() !== (endForm?.value as Moment)?.unix();
    } else if (d) {
      console.log('current');
      // console.log('current', current);
      // console.log('current unix', current.unix());
      // console.log('current day', current.day());
      console.log('current', current.day());
      return current.day() !== 2;
    } else {
      return true;
    }
  }
}
