import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent implements OnInit {
  @ViewChild('sliderThumb', { static: true }) sliderThumb: ElementRef;
  @Input() hoverValue: null | number = null;
  @Input() minValue = 0;
  @Input() maxValue = 100;
  @Input() leftValue = 0;
  @Output() leftValueChange = new EventEmitter();
  @Input() rightValue = 100;
  @Output() rightValueChange = new EventEmitter();
  rangeValue = 100;
  point = {
    left: 0,
    right: 0,
    width: 0,
    offsetLeft: 0,
  };
  track = {
    left: 0,
    middle: 100,
    right: 0,
  };
  leftPosition = { x: 0, y: 0 };
  rightPosition = { x: 0, y: 0 };

  constructor() {
    this.onPositionLeft = this.onPositionLeft.bind(this);
    this.onPositionRight = this.onPositionRight.bind(this);
  }

  get displayHoverValue(): null | number {
    if (this.hoverValue && this.minValue <= this.hoverValue && this.hoverValue <= this.maxValue) {
      return (this.hoverValue - this.minValue) / this.rangeValue * this.point.width;
    } else {
      return null;
    }
  }

  ngOnInit() {
    const offset = this.getLeft(this.sliderThumb.nativeElement);

    this.point = {
      left: 0,
      right: this.sliderThumb.nativeElement.offsetWidth,
      width: this.sliderThumb.nativeElement.offsetWidth,
      offsetLeft: offset,
    };

    this.rightPosition = {
      x: this.point.width,
      y: 0,
    };

    this.rangeValue = this.maxValue - this.minValue;
  }

  mousedown(event) {
    const offsetX = event.clientX - this.point.offsetLeft;

    this.checkPosition(offsetX);
  }

  checkPosition(offset) {
    const left = offset - this.point.left;

    const right = this.point.right - offset;

    if (left <= 0 || left < right) {
      this.leftPosition = {
        x: offset,
        y: this.leftPosition.y,
      };
      this.point.left = offset;

      this.leftValue = this.getDisplayValue(offset);
      this.leftValueChange.emit(this.leftValue);

      const position = (offset / this.point.width) * 100;

      const middleX = 100 - position - this.track.right;

      this.track = {
        left: position,
        middle: middleX,
        right: this.track.right,
      };
    } else {
      this.rightPosition = {
        x: offset,
        y: this.leftPosition.y,
      };
      this.point.right = offset;

      this.rightValue = this.getDisplayValue(offset);
      this.rightValueChange.emit(this.rightValue);

      const position = ((this.point.width - offset) / this.point.width) * 100;

      const middleX = 100 - position - this.track.left;

      this.track = {
        left: this.track.left,
        middle: middleX,
        right: position,
      };
    }
  }

  onPositionLeft(point) {
    const rightOffset = (this.point.right + this.point.offsetLeft) - 10;

    if (point.x > rightOffset) {
      return {
        x: rightOffset,
        y: point.y,
      };
    } else {
      return point;
    }
  }

  onPositionRight(point) {
    const leftOffset = (this.point.left + this.point.offsetLeft) + 10;

    if (point.x < leftOffset) {
      return {
        x: leftOffset,
        y: point.y,
      };
    } else {
      return point;
    }
  }

  cdkDragEndedLeft(cdkDrag) {
    const { distance } = cdkDrag;

    const left = this.point.left + distance.x;

    if (left < 0) {
      this.point.left = 0;
    } else if (left > this.point.right) {
      this.point.left = this.point.right;
    } else {
      this.point.left = left;
    }
  }

  cdkDragEndedRight(cdkDrag) {
    const { distance } = cdkDrag;

    const right = this.point.right + distance.x;

    if (right < this.point.left) {
      this.point.right = this.point.left;
    } else if (right > this.point.width) {
      this.point.right = this.point.width;
    } else {
      this.point.right = right;
    }
  }

  onDragMovedLeft({ pointerPosition, distance }) {
    const offsetLeft = pointerPosition.x - this.point.offsetLeft;

    const position = (offsetLeft / this.point.width) * 100;

    const middleX = 100 - position - this.track.right;

    this.track = {
      left: position,
      middle: middleX,
      right: this.track.right,
    };

    const left = this.point.left + distance.x;

    this.leftValue = this.getDisplayValue(left);
    this.leftValueChange.emit(this.leftValue);
  }

  onDragMovedRight({ pointerPosition, distance }) {
    const offsetRight = this.point.width - (pointerPosition.x - this.point.offsetLeft);

    const position = (offsetRight / this.point.width) * 100;

    const middleX = 100 - position - this.track.left;

    this.track = {
      left: this.track.left,
      middle: middleX,
      right: position,
    };

    const right = this.point.right + distance.x;

    this.rightValue = this.getDisplayValue(right);
    this.rightValueChange.emit(this.rightValue);
  }

  getLeft(e) {
    let offset = e.offsetLeft;
    if (e.offsetParent != null) {
      offset += this.getLeft(e.offsetParent);
    }
    return offset;
  }

  getDisplayValue(offset) {
    return parseInt((offset / this.point.width * this.rangeValue).toFixed(0), 10) + this.minValue;
  }
}
