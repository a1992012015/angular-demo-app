import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { InternalNoticeContentService } from 'app/features/dynamic-load/internal-notice-content.service';

@Component({
  selector: 'app-dynamic-default',
  templateUrl: './dynamic-default.component.html',
  styleUrls: ['./dynamic-default.component.scss']
})
export class DynamicDefaultComponent implements OnInit, OnDestroy {
  @Input() data = { num: 1 };

  actionID = '';

  constructor(private internalNoticeContentService: InternalNoticeContentService) {
  }

  ngOnInit(): void {
    console.log('DynamicDefaultComponent data', this.data);
    console.log('internalNoticeContentService', this.internalNoticeContentService);

    this.internalNoticeContentService.getCardContentSub().subscribe((change) => {
      this.actionID = change['action'] as string;
    });
  }

  ngOnDestroy() {
    console.log('DynamicDefaultComponent ngOnDestroy');
  }
}
