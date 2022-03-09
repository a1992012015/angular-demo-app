import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

import { LocaleIdType } from '../../../interfaces/locale-id.type';
import { formatDate } from '@angular/common';

/**
 * google chart test component
 */
@Component({
  selector: 'app-google-chart-test',
  templateUrl: './google-chart-test.component.html',
  styleUrls: ['./google-chart-test.component.scss']
})
export class GoogleChartTestComponent implements OnInit {
  public barConfig = {
    type: ChartType.ColumnChart,
    rawData: [
      [
        { v: 1, f: '2006-2010' },
        { 'v': 0.04371264949440956, 'f': '4.37%' },
        { 'v': 0.7723124623298645, 'f': '77.23%' },
        { 'v': 0.18397487699985504, 'f': '18.4%' }
      ],
      [
        { v: 6, f: '2006-2010111' },
        { 'v': 0.043, 'f': '4.3%' },
        { 'v': 0.77, 'f': '77.2%' },
        { 'v': 0.1839, 'f': '18%' }
      ],
      [
        { v: 2, f: '2016-2020' },
        { 'v': 0.06952574849128723, 'f': '6.95%' },
        { 'v': 0.43073561787605286, 'f': '43.07%' },
        { 'v': 0.4997386038303375, 'f': '49.97%' }
      ],
      [
        { v: 3, f: 'No-till' },
        { 'v': 0.009999999776482582, 'f': '1%' },
        { 'v': 0, 'f': '0%' },
        { 'v': 0, 'f': '0%' }
      ],
      [
        { v: 4, f: 'Cover Crop' },
        { 'v': 0.0006952575058676302, 'f': '0.07%' },
        { 'v': 0.00430735619738698, 'f': '0.43%' },
        { 'v': 0.004997386131435633, 'f': '0.5%' }
      ],
      [
        { v: 5, f: 'Reduced Rate' },
        { 'v': 0.0006952575058676302, 'f': '0.07%' },
        { 'v': 0.00430735619738698, 'f': '0.43%' },
        { 'v': 0.004997386131435633, 'f': '0.5%' }
      ]
    ],
    columnNames: ['', 'NO TILL', 'CONVENTIONAL TILL', 'REDUCED TILL'],
    options: {
      tooltip: { isHtml: true },
      vAxis: { format: 'percent' },
      hAxis: {
        ticks: [
          { v: 1, f: 'thirty two1' },
          { v: 2, f: 'thirty two2' },
          { v: 3, f: 'thirty two3' },
          { v: 4, f: 'thirty two4' },
          { v: 5, f: 'thirty two5' }
        ]
      },
      legend: 'none',
      colors: ['#A57C6E', '#FFF7C1', '#D47A5B']
    }
  };

  public pieChart = {
    'type': ChartType.PieChart,
    'rawData': [
      ['N/A', { v: 0.9790347218513489, f: '73,945.7 ac' }],
      ['No Emergence', { v: 0.01142565906047821, f: '862.97 ac' }],
      ['Onset Detected', { v: 0.0005286569939926267, f: '39.93 ac' }],
      ['Perennial', { v: 0.00901098269969225, f: '680.59 ac' }]
    ],
    'columnNames': ['', ''],
    'options': {
      'tooltip': { 'isHtml': true },
      legend: { position: 'right' },
      'pieSliceText': 'percentage',
      'slices': [
        { 'color': '#9B9B9B' },
        { 'color': '#77523A' },
        { 'color': '#CEE14C' },
        { 'color': '#659B2D' }
      ]
    }
  };

  public lineChart = {
    type: ChartType.LineChart,
    rawData: [
      [
        { v: new Date(1262304000000), f: '2010' },
        { v: new Date(9158400000), f: '04/17' },
        { v: new Date(25920000000), f: '10/28' }
      ],
      [
        { v: new Date(1293840000000), f: '2011' },
        { v: new Date(9417600000), f: '04/20' },
        { v: new Date(25142400000), f: '10/19' }
      ],
      [
        { v: new Date(1325376000000), f: '2012' },
        { v: new Date(5961600000), f: '03/11' },
        { v: new Date(24019200000), f: '10/06' }
      ],
      [
        { v: new Date(1356998400000), f: '2012' },
        { v: new Date(10540800000), f: '03/11' },
        { v: new Date(25056000000), f: '10/06' }
      ]
      // [
      //   { v: new Date(1262304000000), f: '2010' },
      //   { v: 9158400, f: '04/17' },
      //   { v: 25920000, f: '04/17' }
      // ],
      // [
      //   { v: new Date(1293840000000), f: '2011' },
      //   { v: 9417600, f: '04/17' },
      //   { v: 25142400, f: '04/17' }
      // ],
      // [
      //   { v: new Date(1325376000000), f: '2012' },
      //   { v: 5961600, f: '04/17' },
      //   { v: 9158400, f: '04/17' }
      // ],
      // [
      //   { v: new Date(1356998400000), f: '2013' },
      //   { v: 10540800, f: '04/17' },
      //   { v: 25056000, f: '04/17' }
      // ]
    ],
    columnNames: [
      '',
      'Last Frost Date',
      'First Frost Date'
      // { type: 'number', role: 'date', label: 'Last Frost Date' },
      // { type: 'number', role: 'date', label: 'First Frost Date' }
    ],
    options: {
      tooltip: { isHtml: true },
      legend: 'none',
      hAxis: { format: 'yyyy' },
      vAxis: {
        // baseline: new Date(Date.UTC(1970, 0, 1)),
        maxValue: new Date(Date.UTC(1970, 11, 31)),
        format: 'MMM/dd',
        ticks: [
          { v: new Date(Date.UTC(1970, 0, 1)), f: '01/01' },
          { v: new Date(Date.UTC(1970, 3, 1)), f: '04/01' },
          { v: new Date(Date.UTC(1970, 6, 1)), f: '07/01' },
          { v: new Date(Date.UTC(1970, 9, 1)), f: '10/01' },
          { v: new Date(Date.UTC(1970, 11, 31)), f: '12/31' }
        ]
        // ticks: [
        //   { v: 0, f: '01/01' },
        //   { v: 2620800, f: '02/01' },
        //   { v: 5040000, f: '03/01' },
        //   { v: 7718400, f: '04/01' },
        //   { v: 10310400, f: '05/01' },
        //   { v: 12988800, f: '06/01' },
        //   { v: 15580800, f: '07/01' },
        //   { v: 18259200, f: '08/01' },
        //   { v: 20937600, f: '09/01' },
        //   { v: 23529600, f: '10/01' },
        //   { v: 26208000, f: '11/01' },
        //   { v: 28800000, f: '12/01' }
        // ]
      }
    }
  };

  constructor(@Inject(LOCALE_ID) private localeId: LocaleIdType) {
  }

  public ngOnInit(): void {
    const ticks = [];
    for (let i = 1; i <= 366; i++) {
      const time = new Date(Date.UTC(1970, 0, i));
      ticks.push({ v: time.getTime() / 1000, f: formatDate(time, 'MM/dd', 'en-US', 'UTC') });
    }
    // this.lineChart.options.vAxis.ticks = ticks;
    console.log('lineChart', this.lineChart);
  }
}
