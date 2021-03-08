import { Component, Input, OnInit } from '@angular/core';

import { MetadataInterface } from '../../interfaces/extract-config.interface';

/**
 * key value card
 */
@Component({
  selector: 'app-key-value-card',
  templateUrl: './key-value-card.component.html',
  styleUrls: ['./key-value-card.component.scss']
})
export class KeyValueCardComponent implements OnInit {
  @Input() metadata?: MetadataInterface;
  @Input() selected = -1;
  @Input() index = -1;

  ngOnInit(): void {
    console.log('metadata key value card', this.metadata);
  }
}
