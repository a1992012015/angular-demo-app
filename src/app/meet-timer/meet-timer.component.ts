import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-timer',
  templateUrl: './meet-timer.component.html',
  styleUrls: ['./meet-timer.component.scss'],
})
export class MeetTimerComponent implements OnInit, OnDestroy {
  nextTime = '2019-08-07T04:00:00Z';
  timesString = 'loading....';
  meet = null;

  constructor() {
  }

  ngOnInit() {
    this.meet = setInterval(() => {
      this.formatTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.meet);
  }

  numDiv(num1: number, num2: number): number {
    let baseNum1 = 0;
    let baseNum2 = 0;
    let baseNum3;
    let baseNum4;
    try {
      baseNum1 = num1.toString().split('.')[1].length;
    } catch (e) {
      baseNum1 = 0;
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length;
    } catch (e) {
      baseNum2 = 0;
    }
    baseNum3 = Number(num1.toString().replace('.', ''));
    baseNum4 = Number(num2.toString().replace('.', ''));
    return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
  }

  formatTime() {
    const classTime = new Date(this.nextTime).getTime();   // 将时间字符串转换为时间.
    const nowTime = new Date().getTime();
    const totalSecs = (classTime - nowTime) / 1000;   // 获得两个时间的总毫秒数. 靠前的就调换再减。
    const days = Math.floor(totalSecs / 3600 / 24);
    const hours = Math.floor((totalSecs - days * 24 * 3600) / 3600);
    const mins = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600) / 60);
    const secs = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600 - mins * 60));

    if (days !== 0) {
      this.timesString = '还有' + days + '天' + hours + '小时' + mins + '分钟' + secs + '秒';
    } else if (hours === 0 && mins === 0) {
      this.timesString = '还有' + secs + '秒';
    } else if (hours === 0 && mins !== 0) {
      this.timesString = '还有' + mins + '分钟' + secs + '秒';
    } else if (hours !== 0) {
      this.timesString = '还有' + hours + '小时' + mins + '分钟' + secs + '秒';
    }
  }
}
