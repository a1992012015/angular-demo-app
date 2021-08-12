import { Component, OnInit } from '@angular/core';

import { HeroCacheService } from '../multiple-instance/services/hero-cache.service';
import { ToastType } from '../../shares/toast/services/toast.interface';
import { ToastService } from '../../shares/toast/services/toast.service';

/**
 * toast view component
 */
@Component({
  selector: 'app-toast-view',
  templateUrl: './toast-view.component.html',
  styleUrls: ['./toast-view.component.scss']
})
export class ToastViewComponent implements OnInit {

  constructor(
    private toastService: ToastService,
    private heroCache: HeroCacheService
  ) {
  }

  ngOnInit() {
    this.showToast();
    this.showToast();
    this.showToast();
    this.showToast();
  }

  get hero() {
    return this.heroCache.hero;
  }

  showToast() {
    this.toastService.show({
      text: `作为一个不同且可能会更简洁的方案，你可以创建一个单独的 overlay 以及将要展示在这个 overlay 中的 container component`,
      type: ToastType.SUCCESS
    });
  }
}
