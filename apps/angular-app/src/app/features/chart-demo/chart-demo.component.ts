import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ChartDialogComponent } from '../../../../../../libs/ui/src/lib/chart-dialog/chart-dialog.component';

@Component({
  selector: 'angular-demo-app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.scss']
})
export class ChartDemoComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // this.openDialog();
  }

  openDialog(): void {
    console.log('private dialog: MatDialog');
    this.dialog.open(ChartDialogComponent, {
      autoFocus: false,
      panelClass: 'full-dialog-container',
      disableClose: true
    });
  }
}
