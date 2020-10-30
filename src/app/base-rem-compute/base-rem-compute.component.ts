import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { interval, of, Subject, timer } from 'rxjs';
import { map, mergeMap, retryWhen } from 'rxjs/operators';

import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-base-rem-compute',
  templateUrl: './base-rem-compute.component.html',
  styleUrls: ['./base-rem-compute.component.scss'],
})
export class BaseRemComputeComponent implements OnInit {
  options: FormGroup;
  fontSizeControl = new FormControl(16);

  fontRem = 0;

  delaySub = new Subject();

  constructor(private fb: FormBuilder) {
    this.options = fb.group({
      fontSize: this.fontSizeControl,
    });
  }

  ngOnInit(): void {
    this.getFontRem();
    // 每1秒发出值
    const source = of(1000);
    const t = timer(1000);
    console.log('t', t);
    console.log('t', this.delaySub.asObservable());
    let count = 0;
    const example = source.pipe(
      map(val => {
        throw val;
      }),
      retryWhen(errors => {
          return errors.pipe(
            mergeMap((error) => {
              count = count + 1;
              console.log('concatMap', error);
              console.log('count', count);
              console.log(count > 2);
              return this.delaySub;
            }),
          );
        },
      ),
    );

    example.subscribe(val => {
      console.log('subscribe', val);
    });
  }

  setDelaySub(count: number) {
    if (count > 0) {
      this.delaySub.next([11111]);
    } else {
      this.delaySub.error('cuowu');
    }
  }

  getFontRem() {
    this.fontRem = new BigNumber(this.fontSizeControl.value).div(16).div(0.25).toNumber();
  }
}
