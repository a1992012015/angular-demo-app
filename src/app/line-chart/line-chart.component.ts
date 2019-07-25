import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @ViewChild('q1', { static: true }) q1: ElementRef;
  @ViewChild('q2', { static: true }) q2: ElementRef;
  @ViewChild('q3', { static: true }) q3: ElementRef;
  @ViewChild('q1ToQ2', { static: true }) q1ToQ2: ElementRef;
  @ViewChild('q2ToQ3', { static: true }) q2ToQ3: ElementRef;
  q1Pos = {
    x: 0,
    y: 0,
  };
  q2Pos = {
    x: 0,
    y: 0,
  };
  q3Pos = {
    x: 0,
    y: 0,
  };

  constructor() {
  }

  ngOnInit() {
    this.initMove();
  }

  initMove() {
    this.q1Pos = {
      x: this.q1.nativeElement.offsetLeft,
      y: this.q1.nativeElement.offsetTop,
    };

    this.q2Pos = {
      x: this.q2.nativeElement.offsetLeft,
      y: this.q2.nativeElement.offsetTop,
    };

    this.q3Pos = {
      x: this.q3.nativeElement.offsetLeft,
      y: this.q3.nativeElement.offsetTop,
    };

    this.setQ1ToQ2Attribute('1', this.q1Pos);
    this.setQ1ToQ2Attribute('2', this.q2Pos);
    this.setQ2ToQ3Attribute('1', this.q2Pos);
    this.setQ2ToQ3Attribute('2', this.q3Pos);
  }

  setQ1ToQ2Attribute(flag, position) {
    this.q1ToQ2.nativeElement.setAttribute(`x${flag}`, position.x);
    this.q1ToQ2.nativeElement.setAttribute(`y${flag}`, position.y);
  }

  setQ2ToQ3Attribute(flag, position) {
    this.q2ToQ3.nativeElement.setAttribute(`x${flag}`, position.x);
    this.q2ToQ3.nativeElement.setAttribute(`y${flag}`, position.y);
  }

  onDragMovedQ1({ distance }) {
    const position = {
      x: this.q1Pos.x + distance.x,
      y: this.q1Pos.y + distance.y,
    };
    this.setQ1ToQ2Attribute('1', position);
  }

  onDragMovedQ2({ distance }) {
    const position = {
      x: this.q2Pos.x + distance.x,
      y: this.q2Pos.y + distance.y,
    };
    this.setQ1ToQ2Attribute('2', position);
    this.setQ2ToQ3Attribute('1', position);
  }

  onDragMovedQ3({ distance }) {
    const position = {
      x: this.q3Pos.x + distance.x,
      y: this.q3Pos.y + distance.y,
    };
    this.setQ2ToQ3Attribute('2', position);
  }

  cdkDragEndedQ1({ distance }) {
    this.q1Pos = {
      x: this.q1Pos.x,
      y: this.q1Pos.y + distance.y,
    };
  }

  cdkDragEndedQ2({ distance }) {
    this.q2Pos = {
      x: this.q2Pos.x,
      y: this.q2Pos.y + distance.y,
    };
  }

  cdkDragEndedQ3({ distance }) {
    this.q3Pos = {
      x: this.q3Pos.x,
      y: this.q3Pos.y + distance.y,
    };
  }
}
