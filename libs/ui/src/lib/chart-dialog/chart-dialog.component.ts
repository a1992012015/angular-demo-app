import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'angular-demo-app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls: ['./chart-dialog.component.scss']
})
export class ChartDialogComponent implements OnInit {
  columnChart = {
    type: ChartType.ColumnChart,
    data: [
      [2000, 23, 34],
      [2001, 20, 31],
      [2002, 25, 30],
      [2003, 24, 39]
    ],
    columns: ['Date', 'Crop', 'Soc'],
    options: { legend: 'none', tooltip: { isHtml: true }, vAxis: { baseline: 0 } }
  };

  private selectIndex = 0;

  constructor(private dialogRef: MatDialogRef<ChartDialogComponent>) {}

  ngOnInit(): void {}

  get transform(): string {
    return `translateY(${-this.selectIndex * 700}px)`;
  }

  jumpTo(index: number): void {
    console.log(index);
    this.selectIndex = index;
  }

  close(): void {
    this.dialogRef.close();
  }
}
