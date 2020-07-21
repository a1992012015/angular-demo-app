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
      routerName: 'Css Selector',
      routerPath: '/css-selector',
    },
    {
      routerName: 'Rem Compute',
      routerPath: '/rem-compute',
    },
    {
      routerName: 'Google Chart',
      routerPath: '/google-chart',
    },
    {
      routerName: 'Hide Scrollbar',
      routerPath: '/hide-scrollbar'
    },
    {
      routerName: 'Request Animation Frame',
      routerPath: '/request-animation-frame'
    },
    {
      routerName: 'Image Step',
      routerPath: '/images-step'
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
