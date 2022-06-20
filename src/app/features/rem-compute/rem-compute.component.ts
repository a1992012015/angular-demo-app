import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import {divide} from "lodash-es";

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
  rangeDate = new UntypedFormGroup({
    start: new UntypedFormControl(moment()),
    end: new UntypedFormControl(moment())
  });
  options: UntypedFormGroup;
  fontRem = 0;

  constructor(private fb: UntypedFormBuilder) {
    this.options = fb.group({
      fontSize: new UntypedFormControl(16),
      fieldId: new UntypedFormControl('', [
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
      console.log('fieldId errors', this.options?.get('fieldId')?.errors?.['pattern']?.requiredPattern);
    });
  }

  getFontRem() {
    this.fontRem = divide(divide(this.options.value.fontSize || 0, 16), 0.25);
  }
}
