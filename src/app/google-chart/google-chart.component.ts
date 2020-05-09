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

  barFormatValue = {
    // type: 'ColumnChart',
    type: 'Bar',
    rawData: [],
    columnNames: [
      '',
      'Motivation Level1',
      // { type: 'string', role: 'tooltip', p: { html: true } },
      'Motivation Level',
      // { type: 'string', role: 'tooltip', p: { html: true } },
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
        format: 'MMM d, y',
      },
      colors: ['#4285F4', '#D2670D'],
      interpolateNulls: true,
      legend: {
        position: 'none',
      },
    },
  };
  timeLineFormatValue = {
    type: 'Timeline',
    rawData: [],
    columnNames: [
      '',
      { type: 'string', id: 'dummy bar label' },
      { type: 'string', role: 'tooltip', p: { html: true } },
      { type: 'date', id: 'start' },
      { type: 'date', id: 'end' },
    ],
    options: {
      colors: ['#D2670D'],
      height: 800,
      hAxis: {
        format: 'MMM dd',
      },
      preventOverlappingGridLines: false,
    },
  };

  barData = [
    [new Date(2009, 1, 2), new Date(1970, 5, 10), new Date(1970, 4, 30)],
    [new Date(2010, 1, 2), new Date(1970, 6, 4), new Date(1970, 3, 30)],
    [new Date(2011, 1, 2), new Date(1970, 10, 9), new Date(1970, 1, 17)],
    [new Date(2012, 1, 2), new Date(1970, 5, 27), new Date(1970, 9, 30)],
    [new Date(2013, 1, 2), new Date(1970, 3, 10), new Date(1970, 6, 25)],
  ];
  timeLineData = [
    ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
    ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
    ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
  ];
  data = [
    { start: { seconds: 1230768000 }, last_frost_time: { seconds: 10108800 }, first_frost_time: { seconds: 24278400 } },
    { start: { seconds: 1262304000 }, last_frost_time: { seconds: 9158400 }, first_frost_time: { seconds: 25920000 } },
    { start: { seconds: 1293840000 }, last_frost_time: { seconds: 10540800 }, first_frost_time: { seconds: 25142400 } },
    { start: { seconds: 1325376000 }, last_frost_time: { seconds: 5961600 }, first_frost_time: { seconds: 24105600 } },
    { start: { seconds: 1356998400 }, last_frost_time: { seconds: 10627200 }, first_frost_time: { seconds: 25056000 } },
    { start: { seconds: 1388534400 }, last_frost_time: { seconds: 9158400 }, first_frost_time: { seconds: 26006400 } },
    { start: { seconds: 1420070400 }, last_frost_time: { seconds: 9590400 }, first_frost_time: { seconds: 26006400 } },
    { start: { seconds: 1451606400 }, last_frost_time: { seconds: 8812800 }, first_frost_time: { seconds: 24710400 } },
    { start: { seconds: 1483228800 }, last_frost_time: { seconds: 10022400 }, first_frost_time: { seconds: 24451200 } },
    { start: { seconds: 1514764800 }, last_frost_time: { seconds: 9417600 }, first_frost_time: { seconds: 24451200 } },
  ];

  private static generateTooltipForFrostChart(title: Date, label: string, time: Date, color: string): string {
    return `<div class="line-chart-tooltip">
              <div class="title">${formatDate(title, 'yyyy', environment.localeId, 'UTC')}</div>
              <div class="label">${label}</div>
              <div class="value" style="color: ${color};">${formatDate(time, 'MM/dd', 'en_US', 'UTC')}</div>
             </div>`;
  }

  ngOnInit(): void {
    this.barFormatValue.rawData = this.barData;

    const rawData = this.data.map((date) => {
      const first = new Date(date.first_frost_time.seconds * 1000);
      const last = new Date(date.last_frost_time.seconds * 1000);
      return [
        new Date(date.start.seconds * 1000).getUTCFullYear().toString(),
        null,
        this.generateTooltipForFrostChart(
          new Date(date.start.seconds * 1000).getUTCFullYear().toString(),
          'first',
          first,
          'last',
          last,
        ),
        new Date(last.getUTCFullYear(), last.getUTCMonth(), last.getUTCDate()),
        new Date(first.getUTCFullYear(), first.getUTCMonth(), first.getUTCDate()),
      ];
    });
    console.log('rawData', rawData);
    console.log('timeLineData', this.timeLineData);
    this.timeLineFormatValue.options.height = rawData.length * 41 + 50;
    console.log(this.timeLineFormatValue.options);
    this.timeLineFormatValue.rawData = rawData;
  }

  private generateTooltipForFrostChart(title: string, startLabel: string, startTime: Date, endLabel: string, endTime: Date): string {
    return `<div class="line-chart-tooltip">
                <div class="title">${title}</div>
                <div class="label">${startLabel}</div>
                <div class="value">${formatDate(startTime, 'MM/dd', 'en_US', 'UTC')}</div>
                <div class="label">${endLabel}</div>
                <div class="value">${formatDate(endTime, 'MM/dd', 'en_US', 'UTC')}</div>
               </div>`;
  }
}
