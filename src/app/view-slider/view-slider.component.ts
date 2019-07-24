import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-slider',
  templateUrl: './view-slider.component.html',
  styleUrls: ['./view-slider.component.scss'],
})
export class ViewSliderComponent implements OnInit {
  hoverValue: null | number = null;
  sliderValue = {
    left: 0,
    right: 100,
  };
  position = {
    x: 200,
    y: 300,
  };

  constructor() {
  }

  ngOnInit() {
  }

  cdkDragMoved({pointerPosition: {x}}) {
    this.hoverValue = parseInt(String(x / 2 / 2 / 2), 10);
    console.log('cdkDragMoved', this.hoverValue);
  }

  cdkDragEnded() {
    this.hoverValue = null;
  }
}
