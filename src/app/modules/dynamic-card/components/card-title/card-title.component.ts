import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ButtonType, CardTitleInterface } from '../../interfaces/card-config.interface';

/**
 * card title
 */
@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent implements OnInit {
  @Input() option: CardTitleInterface = { title: '', titleClickable: false };
  @Input() iconDirection = true;
  @Input() isHidden = true;
  @Output() headerClick = new EventEmitter();
  @Output() titleClick = new EventEmitter();

  buttonType = ButtonType;

  ngOnInit(): void {}

  headerClickEvent() {
    if (this.isHidden) {
      this.headerClick.emit();
    }
  }

  titleClickEvent(e: Event) {
    e.stopPropagation();
    this.titleClick.emit();
  }
}
