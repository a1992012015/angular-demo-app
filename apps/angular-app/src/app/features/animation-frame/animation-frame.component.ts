import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'angular-demo-app-animation-frame',
  templateUrl: './animation-frame.component.html',
  styleUrls: ['./animation-frame.component.scss']
})
export class AnimationFrameComponent implements OnInit, OnDestroy {
  @ViewChild('box', { static: true }) box?: ElementRef;

  private animationWidth$ = this.animationWidth.bind(this);
  private animation?: number;

  ngOnInit(): void {
    this.animation = requestAnimationFrame(this.animationWidth$);
  }

  ngOnDestroy(): void {
    this.animation !== undefined && cancelAnimationFrame(this.animation);
  }

  animationWidth(timestamp: number) {
    console.log('animationWidth timestamp', timestamp);
    const div = this.box?.nativeElement;
    const width = div.style.width ? div.style.width : 10;
    div.style.width = parseInt(width, 10) + 1 + 'px';
    if (parseInt(div.style.width, 10) < 200) {
      this.animation = requestAnimationFrame(this.animationWidth$);
    }
  }
}
