import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-animation',
  templateUrl: './tabs-animation.component.html',
  styleUrls: ['./tabs-animation.component.scss'],
})
export class TabsAnimationComponent implements OnInit, AfterViewInit {
  selectedTabIndex = 2;
  expanded = false;
  loading = false;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.expanded = true;
    this.loading = true;
    this.cdRef.detectChanges();
  }

  changeTabsView() {
    this.expanded = !this.expanded;
    console.log('changeTabsView', this.expanded);
  }
}
