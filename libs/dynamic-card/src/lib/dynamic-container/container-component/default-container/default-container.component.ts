import { Component, Inject, Input, OnInit } from '@angular/core';

import { DefaultContainer } from '../../container-class/default.container';
import { DynamicCard } from '../../../services/utilities-class/dynamic-card';
import { DYNAMIC_CARD } from '../../../interfaces/service-token/dynamic-token';

@Component({
  selector: 'angular-demo-app-default-container',
  templateUrl: './default-container.component.html',
  styleUrls: ['./default-container.component.scss']
})
export class DefaultContainerComponent implements OnInit {
  @Input() container?: DefaultContainer;

  constructor(@Inject(DYNAMIC_CARD) private dynamic: DynamicCard) {
  }

  ngOnInit(): void {
    console.log('container', this.container);
    console.log('container dynamic', this.dynamic);
  }
}
