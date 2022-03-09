import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

/**
 * dynamic card view component
 */
@Component({
  selector: 'app-dynamic-card-view',
  templateUrl: './dynamic-card-view.component.html',
  styleUrls: ['./dynamic-card-view.component.scss']
})
export class DynamicCardViewComponent implements OnInit, OnChanges {
  textNumber1 = false;

  @Input() set textNumber(num: number) {
    this.textNumber1 = num % 2 === 0;
  }

  ngOnInit(): void {
    console.log('DynamicCardViewComponent');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    console.log('changes => textNumber', this.textNumber);
  }
}
