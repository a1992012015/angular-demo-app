import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routerPaths = [
    {
      routerName: 'Dashboard',
      routerPath: '/',
    },
    {
      routerName: 'Css选择器',
      routerPath: '/css-selector',
    },
    {
      routerName: 'Rem计算工具',
      routerPath: '/rem-compute',
    },
    {
      routerName: 'Google Chart',
      routerPath: '/google-chart',
    },
    {
      routerName: '高性能动画',
      routerPath: '/request-animation-frame'
    },
    {
      routerName: '地图图片',
      routerPath: '/google-map-svg'
    },
    {
      routerName: '过滤选择器',
      routerPath: '/filter-select'
    },
    {
      routerName: '自定义表单控件',
      routerPath: '/control-accessor'
    },
    {
      routerName: '提示信息',
      routerPath: '/toast-view'
    },
    {
      routerName: '谷歌地图',
      routerPath: '/google-map'
    },
    {
      routerName: '多个实例',
      routerPath: '/multiple-instance'
    }
  ];
  workerStart = 0;
  workerEnd = 0;

  ngOnInit(): void {
    let nowDate: Date;
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./workers/worker-test.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        nowDate = new Date();
        const end = formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss:SSS', 'en-US', 'UTC');
        console.log(`%cend => ${end}`, 'color: blue;');
        this.workerEnd = nowDate.getTime();
        const minutes = (this.workerEnd - this.workerStart) / 1000;
        console.log(`%cpage got message: ${data}, time consuming: ${minutes}`, 'color: red;');
      };
      nowDate = new Date();
      const start = formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss:SSS', 'en-US', 'UTC');
      console.log(`%cstart => ${start}`, 'color: blue;');
      this.workerStart = nowDate.getTime();
      worker.postMessage(45);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
