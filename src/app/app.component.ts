import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { GapiLoaderService } from './service/gapi-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
      routerName: '隐藏滚动条',
      routerPath: '/hide-scrollbar'
    },
    {
      routerName: '高性能动画',
      routerPath: '/request-animation-frame'
    },
    {
      routerName: '添加遮罩',
      routerPath: '/images-step'
    },
    {
      routerName: '显示更多文本',
      routerPath: '/text-view'
    },
    {
      routerName: '弹窗样式',
      routerPath: '/dialog-input'
    },
    {
      routerName: '地图图片',
      routerPath: '/google-map-svg'
    }
  ];

  constructor(protected gapiLoader: GapiLoaderService) {
  }

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./workers/worker-test.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        const end = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss:SSS', 'en-US', 'UTC');
        console.log('end', end);
        console.log(`%cpage got message: ${data}`, 'color: red;');
      };
      const start = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss:SSS', 'en-US', 'UTC');
      console.log('start', start);
      worker.postMessage(42);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
