import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.scss'],
})
export class TextViewComponent implements OnInit {
  show = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  viewClickEvent() {
    console.log('viewClickEvent');
    this.show = !this.show;
  }
}
