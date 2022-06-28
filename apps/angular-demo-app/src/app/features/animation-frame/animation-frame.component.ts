import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

/**
 * animation frame component
 */
@Component({
  selector: 'app-animation-frame',
  templateUrl: './animation-frame.component.html',
  styleUrls: ['./animation-frame.component.scss']
})
export class AnimationFrameComponent implements OnInit {
  @ViewChild('box', { static: true }) box?: ElementRef;

  private animationWidth$ = this.animationWidth.bind(this);

  ngOnInit(): void {
    requestAnimationFrame(this.animationWidth$);
  }

  animationWidth(timestamp: number) {
    const div = this.box?.nativeElement;
    const width = div.style.width ? div.style.width : 10;
    div.style.width = parseInt(width, 10) + 1 + 'px';
    if (parseInt(div.style.width, 10) < 200) {
      requestAnimationFrame(this.animationWidth$);
    }
  }
}
