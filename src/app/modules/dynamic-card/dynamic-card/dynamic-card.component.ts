import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { MetadataInterface } from '../interfaces/extract-config.interface';
import { CardType } from '../interfaces/card-config.interface';
import { ProfileInterface } from '../../../dictionary/crop-type.dictionary';

/**
 * dynamic card
 */
@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.scss']
})
export class DynamicCardComponent implements OnInit, OnChanges {
  @Input() metadata?: MetadataInterface;
  @Input() profile?: ProfileInterface;
  @Input() selected = -1;
  @Input() index = -1;

  cardType = CardType;
  cardId = '';

  ngOnInit(): void {
    console.log('metadata dynamic card', this.metadata);
    this.cardId = `${CardType[this.metadata.cardType]}-${this.index}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }
}
