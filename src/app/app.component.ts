import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

enum urlConfig {
  '/meet-timer' = 0,
  '/range-slider' = 1,
  '/line-chart' = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-angular-test-app';
  activeUrl = 0;

  constructor(
    private router: Router,
  ) {
  }

  private static getNavigateUrl(index) {
    if (urlConfig[index]) {
      return urlConfig[index];
    } else {
      return '/';
    }
  }

  ngOnInit(): void {
    this.activeUrl = urlConfig[window.location.pathname];
  }

  groupChange(index) {
    const url = AppComponent.getNavigateUrl(index);
    console.log(url);
    this.router.navigate([url]);
  }
}
