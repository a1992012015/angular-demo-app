import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { fibonacci } from '../workers/fibonacci-workeflow';

/**
 * root component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-test-app';
  workerStart = 0;
  workerEnd = 0;

  ngOnInit() {
    let nowDate: Date;
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('../workers/fibonacci.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        nowDate = new Date();
        const end = formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss:SSS', 'en-US', 'UTC');
        console.log(`%c end => ${end}`, 'color: blue;');
        this.workerEnd = nowDate.getTime();
        const minutes = (this.workerEnd - this.workerStart) / 1000;
        console.log(`%c page got message: ${data}, time consuming: ${minutes}`, 'color: red;');
      };
      nowDate = new Date();
      const start = formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss:SSS', 'en-US', 'UTC');
      console.log(`%c start => ${start}`, 'color: blue;');
      this.workerStart = nowDate.getTime();
      console.log('worker', worker);
      worker.postMessage(45);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.

      console.log(`%c page got message: ${fibonacci(45)}`, 'color: red;');
    }
  }
}
