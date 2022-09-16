import { Component, Inject, Input, OnInit } from '@angular/core';

import { DefaultValue } from '../../value-class/default.value';
import { DynamicCard } from '../../../services/utilities-class/dynamic-card';
import { DYNAMIC_CARD } from '../../../interfaces/service-token/dynamic-token';

@Component({
  selector: 'angular-demo-app-default-value',
  templateUrl: './default-value.component.html',
  styleUrls: ['./default-value.component.scss']
})
export class DefaultValueComponent implements OnInit {
  @Input() value?: DefaultValue;

  constructor(@Inject(DYNAMIC_CARD) private dynamic: DynamicCard) {
  }

  ngOnInit(): void {
    console.log('dynamic value key => ', this.value?.UUID);
  }
}
