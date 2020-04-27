import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss'],
})
export class GoogleChartComponent implements OnInit {

  constructor() {
  }

  formatValue = {
    type: 'ColumnChart',
    rawData: [],
    columnNames: [
      '',
      'Motivation Level1',
      { type: 'string', role: 'tooltip', p: { html: true } },
      'Motivation Level',
      { type: 'string', role: 'tooltip', p: { html: true } },
    ],
    options: {
      tooltip: { isHtml: true },
      hAxis: {
        format: 'yyyy',
        ticks: [
          { v: new Date(2009, 1, 1), f: '2009' },
          { v: new Date(2010, 1, 1), f: '2010' },
          { v: new Date(2011, 1, 1), f: '2011' },
          { v: new Date(2012, 1, 1), f: '2012' },
          { v: new Date(2013, 1, 1), f: '2013' },
        ],
      },
      vAxis: {
        format: 'MM/dd',
      },
      colors: ['#4285F4', '#D2670D'],
      interpolateNulls: true,
      legend: {
        position: 'none',
      },
    },
  };

  data = [
    [new Date(2009, 1, 2), new Date(2009, 5, 10), new Date(2009, 4, 30)],
    [new Date(2010, 1, 2), new Date(2009, 6, 4), new Date(2009, 3, 30)],
    [new Date(2011, 1, 2), new Date(2009, 10, 9), new Date(2009, 1, 17)],
    [new Date(2012, 1, 2), new Date(2009, 5, 27), new Date(2009, 9, 30)],
    [new Date(2013, 1, 2), new Date(2009, 3, 10), new Date(2009, 6, 25)],
  ];

  private static generateTooltipForFrostChart(title: Date, label: string, time: Date, color: string): string {

    return `<div class="line-chart-tooltip">
              <div class="title">${formatDate(title, 'yyyy', environment.localeId, 'UTC')}</div>
              <div class="label">${label}</div>
              <div class="value" style="color: ${color};">${formatDate(time, 'MM/dd', 'en_US', 'UTC')}</div>
             </div>`;
  }

  ngOnInit(): void {
    this.formatValue.rawData = this.data.map((date) => {
      const colors = this.formatValue.options.colors;
      return [
        date[0],
        date[1],
        GoogleChartComponent.generateTooltipForFrostChart(date[0], 'Motivation Level1', date[1], colors[0]),
        date[2],
        GoogleChartComponent.generateTooltipForFrostChart(date[0], 'Motivation Level1', date[2], colors[1]),
      ];
    });

    console.log('rawData', this.formatValue.rawData);
  }
}
