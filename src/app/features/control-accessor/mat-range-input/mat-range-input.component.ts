import { Component, EventEmitter, forwardRef, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatInput } from '@angular/material/input';

export const EXE_COUNTER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRangeInputComponent),
  multi: true
};

/**
 * mat range input
 */
@Component({
  selector: 'app-mat-range-input',
  templateUrl: './mat-range-input.component.html',
  styleUrls: ['./mat-range-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'appMatRangeInput',
  providers: [EXE_COUNTER_VALUE_ACCESSOR]
})
export class MatRangeInputComponent implements ControlValueAccessor {
  @ViewChild(MatInput, { static: false }) private input: MatInput;
  @Output() changeReturn = new EventEmitter();
  @Input() decimal = 0;

  @Input() set min(value: number) {
    if (!isNaN(value)) {
      this.minValue = value;
    }
  }

  get min(): number {
    return this.minValue;
  }

  @Input() set max(value: number) {
    if (!isNaN(value)) {
      this.maxValue = value;
    }
  }

  get max(): number {
    return this.maxValue;
  }

  @Input() set step(value: number) {
    this.stepValue = Math.abs(value);
  }

  get step(): number {
    return this.stepValue;
  }

  disabled = false;
  originalValue = 0;
  displayValue = '';
  private prevValue = 0;
  private minValue = 0;
  private maxValue = 100;
  private stepValue = 1;

  propagateOnChange: (value: number) => void = (_: number) => null;
  propagateOnTouched: (value: number) => void = (_: number) => null;

  writeValue(value: number) {
    if (typeof value === 'number') {
      this.originalValue = Number(value);
      this.displayValue = value.toFixed(this.decimal);
    }
    this.prevValue = value;
  }

  registerOnChange(fn: (value: number) => void) {
    this.propagateOnChange = (value: number) => {
      this.changeReturn.emit(value);
      fn(value);
    };
  }

  registerOnTouched(fn: (value: number) => void) {
    this.propagateOnTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  inputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.setDisplayValue(Number(target.value));
  }

  move(orientation: number) {
    const d = this.step.toString().split('.')[1];
    let p = 0;
    if (d) {
      p = d.length;
    }
    if (this.input) {
      this.input.focus();
    }
    const value = Math.round((this.originalValue + orientation * this.step) * Math.pow(10, p)) / Math.pow(10, p);
    this.setDisplayValue(value);
  }

  private setDisplayValue(value: number) {
    if (!this.min || !this.min) {
      return;
    }
    if (value === null) {
      value = this.prevValue;
    } else {
      const v = Number(value);
      if (v < this.min) {
        value = this.min;
      } else if (v > this.max) {
        value = this.max;
      }
      this.prevValue = Number(value);
    }
    this.originalValue = value;
    this.displayValue = value.toFixed(this.decimal);
    this.input.value = this.displayValue;
    this.propagateOnChange(this.originalValue);
  }
}
