import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-request-animation-frame',
  templateUrl: './request-animation-frame.component.html',
  styleUrls: ['./request-animation-frame.component.scss'],
})
export class RequestAnimationFrameComponent implements OnInit {
  @ViewChild('box', { static: true }) box?: ElementRef;

  private animationWidth$ = this.animationWidth.bind(this);

  ngOnInit(): void {
    requestAnimationFrame(this.animationWidth$);
  }

  animationWidth(timestamp) {
    console.log('timestamp', timestamp);
    const div = this.box.nativeElement;
    const width = div.style.width ? div.style.width : 10;
    div.style.width = parseInt(width, 10) + 1 + 'px';
    console.log('width', parseInt(div.style.width, 10));
    if (parseInt(div.style.width, 10) < 200) {
      requestAnimationFrame(this.animationWidth$);
    }
  }
}
