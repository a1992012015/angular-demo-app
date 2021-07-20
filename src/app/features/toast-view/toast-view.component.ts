import { Component, OnInit } from '@angular/core';

import { ToastService } from '../../modules/toast/services/toast.service';
import { ToastType } from '../../modules/toast/services/toast.interface';
import { HeroCacheService } from '../multiple-instance/services/hero-cache.service';

/**
 * toast-view
 */
@Component({
  selector: 'app-toast-view',
  templateUrl: './toast-view.component.html',
  styleUrls: ['./toast-view.component.scss']
})
export class ToastViewComponent implements OnInit {
  private count = 1;

  constructor(
    private toastService: ToastService,
    private heroCache: HeroCacheService
  ) { }

  ngOnInit() {
  }

  get hero() {
    return this.heroCache.hero;
  }

  showToast() {
    this.toastService.show({
      text: `作为一个不同且可能会更简洁的方案，你可以创建一个单独的 overlay 以及将要展示在这个 overlay 中的 container component`,
      type: ToastType.SUCCESS,
    });

    this.count += 1;
  }
}
