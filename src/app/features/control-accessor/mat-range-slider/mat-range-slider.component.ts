import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { debounceTime, startWith } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { MatSlider, MatSliderChange } from '@angular/material/slider';

/**
 * mat range slider
 */
@Component({
  selector: 'app-mat-range-slider',
  templateUrl: './mat-range-slider.component.html',
  styleUrls: ['./mat-range-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'appMatRangeSlider'
})
export class MatRangeSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('startSlider', { static: false }) private startSlider: MatSlider;
  @ViewChild('endSlider', { static: false }) private endSlider: MatSlider;
  @Input() rangeForm = new FormGroup({
    start: new FormControl(4.33),
    end: new FormControl(158)
  });
  @Input() disabled = false;

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

  @Input() decimal = 0;
  @Input() unit = '';
  @Input() theme = '';
  minGap = 0;

  private minValue = 0;
  private maxValue = 100;
  private stepValue = 1;
  private subs: Subscription[] = [];

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.subs.push(
      fromEvent(window, 'resize').pipe(startWith(''), debounceTime(200)).subscribe(() => {
        console.log('resize');
        this.calcMinGap();
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  onStartChange(event: MatSliderChange) {
    if (!this.minGap) {
      this.calcMinGap();
    }
    const value = this.rangeForm.value;
    const maxStart = this.sumSafely(value.end, -this.minGap);

    if (event.value > maxStart || event.value >= value.end) {
      value.start = maxStart;
    } else {
      value.start = event.value;
    }
    this.rangeForm.setValue({ ...value });
    this.startSlider.value = value.start;
  }

  onEndChange(event: MatSliderChange) {
    if (!this.minGap) {
      this.calcMinGap();
    }
    const value = this.rangeForm.value;
    const minEnd = this.sumSafely(value.start, this.minGap);

    if (event.value < minEnd || event.value <= value.start) {
      value.end = minEnd;
    } else {
      value.end = event.value;
    }
    this.rangeForm.setValue(value);
    this.endSlider.value = value.end;
  }

  formatValue() {
    return (value: number) => {
      if (this.unit) {
        return `${value.toFixed(this.decimal)} ${this.unit}`;
      } else {
        return value.toFixed(this.decimal);
      }
    };
  }

  sumSafely(valueA: number, valueB: number) {
    // Avoid float number issue 0.1 + 0.7 => 0.7999...
    return (
      Math.round((valueA + valueB) * Math.pow(10, this.decimal)) / Math.pow(10, this.decimal)
    );
  }

  private calcMinGap() {
    if (this.elementRef && this.elementRef.nativeElement) {
      const width = this.elementRef.nativeElement.clientWidth;
      if (width === 0) {
        this.minGap = 0;
      } else {
        this.minGap = this.sumSafely((14 / width) * this.max, (-14 / width) * this.min);
      }
    }
  }
}
