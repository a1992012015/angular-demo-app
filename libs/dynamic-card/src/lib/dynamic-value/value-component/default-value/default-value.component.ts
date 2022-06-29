import { Component, Input, OnInit } from '@angular/core';

import { DefaultValue } from '../../value-class/default.value';

@Component({
  selector: 'angular-demo-app-default-value',
  templateUrl: './default-value.component.html',
  styleUrls: ['./default-value.component.scss']
})
export class DefaultValueComponent implements OnInit {
  @Input() value?: DefaultValue;

  ngOnInit(): void {}
}
