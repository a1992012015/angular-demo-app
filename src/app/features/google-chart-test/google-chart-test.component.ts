import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

import { LocaleIdType } from '../../../interfaces/locale-id.type';

/**
 * google chart test component
 */
@Component({
  selector: 'app-google-chart-test',
  templateUrl: './google-chart-test.component.html',
  styleUrls: ['./google-chart-test.component.scss']
})
export class GoogleChartTestComponent implements OnInit {
  barConfig = {
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

  pieChart = {
    'type': ChartType.PieChart,
    'rawData': [
      ['Image unavailable or N/A', { 'v': 0.033935546875, 'f': '49.95' }],
      ['No Emergence', { 'v': 0.52294921875, 'f': '769.79' }],
      ['Onset Detected', { 'v': 0.02099609375, 'f': '30.91' }],
      ['Perennial', { 'v': 0.422119140625, 'f': '621.37' }]
    ],
    'data': [
      ['Image unavailable or N/A', { 'v': 0.033935546875, 'f': '49.95' }],
      ['No Emergence', { 'v': 0.52294921875, 'f': '769.79' }],
      ['Onset Detected', { 'v': 0.02099609375, 'f': '30.91' }],
      ['Perennial', { 'v': 0.422119140625, 'f': '621.37' }]
    ],
    'columnNames': ['', ''],
    'options': {
      'tooltip': { 'isHtml': true },
      'legend': 'none',
      'pieSliceText': 'label',
      'slices': [{ 'color': 'transparent' },
        { 'color': '#77523A' },
        { 'color': '#CEE14C' },
        { 'color': '#659B2D' }
      ]
    }
  };

  constructor(@Inject(LOCALE_ID) private localeId: LocaleIdType) {
  }

  ngOnInit(): void {
    console.log('localeId', this.localeId);
    console.log('barConfig', this.barConfig);
    console.log('pieChart', this.pieChart);
  }
}
