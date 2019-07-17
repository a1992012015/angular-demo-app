import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-timer',
  templateUrl: './meet-timer.component.html',
  styleUrls: ['./meet-timer.component.scss'],
})
export class MeetTimerComponent implements OnInit {
  nextTime = '2019-08-07';
  timesString = '';

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.formatTime();
    }, 1000);
  }

  formatTime() {
    const endStr = this.nextTime.replace(/-/g, '/');
    const classTime = new Date(endStr).getTime();   // 将时间字符串转换为时间.
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

    console.log('timesString', this.timesString);
  }
}
