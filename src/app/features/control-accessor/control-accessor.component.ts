import { Component, OnInit } from '@angular/core';

/**
 * control accessor
 */
@Component({
  selector: 'app-control-accessor',
  templateUrl: './control-accessor.component.html',
  styleUrls: ['./control-accessor.component.scss']
})
export class ControlAccessorComponent implements OnInit {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  ngOnInit() {
  }
}
