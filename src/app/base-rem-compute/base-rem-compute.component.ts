import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      fontSize: this.fontSizeControl,
    });
  }

  ngOnInit(): void {
    this.getFontRem();
  }

  getFontRem() {
    this.fontRem =  new BigNumber(this.fontSizeControl.value).div(16).div(0.25).toNumber();
  }
}
