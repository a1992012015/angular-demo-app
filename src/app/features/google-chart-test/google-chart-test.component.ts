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
        '2006~2010',
        { 'v': 0.4995088279247284, 'f': '49.95%' },
        { 'v': 0.33153241872787476, 'f': '33.15%' },
        { 'v': 0.009430254809558392, 'f': '0.94%' },
        { 'v': 0.02377210184931755, 'f': '2.38%' },
        { 'v': 0.06994105875492096, 'f': '6.99%' }
      ],
      [
        '2016~2020',
        { 'v': 0.48222002387046814, 'f': '48.22%' },
        { 'v': 0.3457760214805603, 'f': '34.58%' },
        { 'v': 0.0024557956494390965, 'f': '0.25%' },
        { 'v': 0.03634577617049217, 'f': '3.63%' },
        { 'v': 0.06876228004693985, 'f': '6.88%' }
      ]
    ],
    columnNames: ['', 'CORN', 'SOYBEANS', 'WHEAT', 'FOREST', 'SUGARBEETS'],
    options: {
      colors: ['#ffd300', '#267000', '#bf870d', '#93cc93', '#a800e2'],
      tooltip: { isHtml: true },
      legend: {
        position: 'top',
        maxLines: 3,
        alignment: 'start'
      },
      vAxis: { format: 'percent' }
    }
  };

  constructor(@Inject(LOCALE_ID) private localeId: LocaleIdType) {
  }

  ngOnInit(): void {
    console.log('barConfig', this.barConfig);
  }
}
