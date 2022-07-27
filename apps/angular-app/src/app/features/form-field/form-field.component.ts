import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';
import { divide } from 'lodash-es';
import { Moment } from 'moment';

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: { dateInput: 'LL' },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'angular-demo-app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class FormFieldComponent implements OnInit {
  rangeDate = new UntypedFormGroup({
    start: new UntypedFormControl(),
    end: new UntypedFormControl()
  });
  options: UntypedFormGroup = this.fb.group({
    fontSize: new UntypedFormControl(16),
    fieldId: new UntypedFormControl('', [
      Validators.required,
      Validators.pattern(new RegExp('^[0-9a-zA-Z]+([^\u4e00-\u9fa5/]+[0-9a-zA-Z]+)*$'))
    ])
  });
  fontRem = 0;

  filterHandle$ = this.filterHandle.bind(this);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getFontRem();

    this.options?.get('fieldId')?.valueChanges?.subscribe(() => {
      console.log('%c=============================', 'color: red;');
      console.log('fieldId', this.options.get('fieldId'));
      const fieldError = this.options?.get('fieldId')?.errors;
      console.log('fieldId errors', fieldError);
      console.log('fieldId errors actualValue', fieldError?.['pattern']?.actualValue);
      console.log('fieldId errors requiredPattern', fieldError?.['pattern']?.requiredPattern);
    });
  }

  getFontRem() {
    this.fontRem = divide(divide(this.options.value.fontSize || 0, 16), 0.25);
  }

  filterHandle<D>(d: D | null): boolean {
    const startForm = this.rangeDate.get('start');
    const endForm = this.rangeDate.get('end');
    const current = d as unknown as Moment;
    if (startForm?.value && endForm?.value) {
      return (startForm?.value as Moment)?.unix() !== (endForm?.value as Moment)?.unix();
    } else if (d) {
      console.log('current');
      console.log('current', current.day());
      return current.day() !== 2;
    } else {
      return true;
    }
  }
}
