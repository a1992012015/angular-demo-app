import { Component, EventEmitter, Inject, InjectionToken, OnInit } from '@angular/core';

/**
 * 用于动态创建PortalChildComponent的时候传递参数
 */
export const PORTAL_IMAGE_STEP_DATA = new InjectionToken<any>('PORTAL_IMAGE_STEP_DATA');

@Component({
  selector: 'app-image-step-overlay',
  templateUrl: './image-step-overlay.component.html',
  styleUrls: ['./image-step-overlay.component.scss'],
})
export class ImageStepOverlayComponent implements OnInit {
  outEvent = new EventEmitter<string>();

  /**
   * 构造函数
   * @param initData 创建组件的时候传递过来的参数(为了测试用了any类型，推荐根据业务使用特定的类型，尽量不要使用any)
   */
  constructor(@Inject(PORTAL_IMAGE_STEP_DATA) public initData: any) {
    console.log(initData);
  }

  ngOnInit() {
  }

  /**
   * 用来测试把Portal里面的事件返回上去
   */
  onButtonClick() {
    this.outEvent.emit('child 里面被点击了');
  }
}
