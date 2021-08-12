import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import BigNumber from 'bignumber.js';

/**
 * rem compute component
 */
@Component({
  selector: 'app-rem-compute',
  templateUrl: './rem-compute.component.html',
  styleUrls: ['./rem-compute.component.scss']
})
export class RemComputeComponent implements OnInit {
  options: FormGroup;
  fontRem = 0;

  constructor(private fb: FormBuilder) {
    this.options = fb.group({
      fontSize: new FormControl(16)
    });
  }

  ngOnInit(): void {
    this.getFontRem();
  }

  getFontRem() {
    this.fontRem = new BigNumber(this.options.value.fontSize || 0).div(16).div(0.25).toNumber();
  }
}
