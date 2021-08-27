import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { fibonacci } from '../workers/fibonacci-workeflow';

/**
 * Validation rule type
 */
export enum ValidationRuleType {
  RANGE,
  DECIMAL,
  REQUIRED,
  NON_ZERO,
  IS_NUMBER,
  CHEMICAL_APPLICATION
}

/**
 * display type
 */
export enum DisplayType {
  LIVESTOCK_OPERATION_TYPE,
  COVER_CROP_TERMINATION,
  GHG_STATISTICAL_TOTAL,
  CUSTOM_CROP_TYPE,
  AREA_HECTARES_CROP_TYPE,
  ADVERSITY_ROW,
  CUSTOM_ROTATION_VALUE,
  IMAGES,
  EDIT_CROP_PRICE,
  NOTE_DATE,
  NOTE,
  AREA_AGGREGATE,
  STRING_ARRAY,
  PLANT_AGGREGATE,
  CUSTOM_ROTATION,
  AREA_HECTARES_COVER_CROP_TYPE,
  ADVERSITY_EVENT_TYPE,
  CUSTOM_COVER_CROP_TYPE,
  AREA_HECTARES_TILLAGE_TYPE,
  CUSTOM_TILLAGE_TYPE,
  STATISTICAL_TOTAL,
  HISTOGRAM_CHART,
  HISTOGRAM,
  HISTOGRAMS,
  ANOMALY_SOWING,
  ANOMALY,
  CROP_TYPES,
  CHART_NUMBER,
  COMPONENT,
  OPERATION_RATE,
  CHART_MONTH_DATE,
  COVER_CROP_SEEDING,
  SOIL_TEXTURE_TYPE,
  CYCLE_DURATION,
  TARGET_RESULT,
  AVERAGE_RANGE,
  TEXTURE_TYPE,
  FEATURE_NAME,
  MONEY_NUMBER,
  DAILY_DATE,
  CHART_AVERAGE,
  IRRIGATED,
  COST_AVERAGE,
  GHG_STATISTICAL_VALUES,
  STATISTICAL_VALUES,
  SOIL_DEPTH_RANGE,
  ROTATION_CROP_TYPE,
  ROTATION_TILLAGE_TYPE,
  ROTATION_COVER_TYPE,
  MULTI_SELECT,
  TILLAGE_TYPE,
  SELECT_FORM,
  VOLUME_MASS,
  COVER_CROP,
  COST_TYPE,
  YEAR_DATE,
  LONG_DATE,
  CROP_TYPE,
  FREQUENCY,
  LOCATION,
  DURATION,
  AVERAGE,
  MASSAGE,
  ELEMENT,
  STRING,
  NUMBER,
  SELECT,
  MONEY,
  DATE,
  RETE,
  CHIP,
  CHART_STYLE,
  CHART_COLOR,
  CHART_CROP_COLOR,
  WEATHER_DATE,
  WEATHER_INFO,
  WEATHER_WIND,
  WEATHER_WEEK,
  WEATHER_YEAR_ADD,
  WEATHER_YEAR_NUMBER,
  WEATHER_TEMPERATURE,
  WEATHER_PRECIPITATION,
  WEATHER_HISTORICAL_MAX,
  WEATHER_HISTORICAL_MIN,
  WEATHER_HISTORICAL_MEAN,
  WEATHER_HISTORICAL_PRECI,
  RANGE_DATE
}

/**
 * root component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-test-app';
  workerStart = 0;
  workerEnd = 0;

  dictionary = [
    {
      attrKey: 'time_range',
      decimal: 2,
      modifier: 1,
      displayName: { time_range: '' },
      displayType: 86,
      unit: {},
      validationRules: {},
      order: 1,
      editOrder: 1,
      requiredKey: ['time_range']
    },
    {
      attrKey: 'actual_evapotranspiration',
      order: 2,
      editOrder: 2,
      requiredKey: ['actual_evapotranspiration']
    },
    {
      attrKey: 'transpiration',
      order: 3,
      editOrder: 3,
      requiredKey: ['transpiration']
    },
    {
      attrKey: 'organic_carbon_gc_per_m2',
      order: 9,
      editOrder: 9,
      requiredKey: ['organic_carbon_gc_per_m2']
    },
    { attrKey: 'eco2_flux', order: 4, editOrder: 4, requiredKey: ['eco2_flux'] },
    { attrKey: 'ch4_flux', order: 5, editOrder: 5, requiredKey: ['ch4_flux'] },
    { attrKey: 'co2_flux', order: 6, editOrder: 6, requiredKey: ['co2_flux'] },
    { attrKey: 'n2o_flux', order: 7, editOrder: 7, requiredKey: ['n2o_flux'] },
    {
      attrKey: 'nitrogen_leaching',
      order: 8,
      editOrder: 8,
      requiredKey: ['nitrogen_leaching']
    },
  ];

  ngOnInit() {
    let nowDate: Date;
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('../workers/fibonacci.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        nowDate = new Date();
        const end = formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss:SSS', 'en-US', 'UTC');
        console.log(`%c end => ${end}`, 'color: blue;');
        this.workerEnd = nowDate.getTime();
        const minutes = (this.workerEnd - this.workerStart) / 1000;
        console.log(`%c page got message: ${data}, time consuming: ${minutes}`, 'color: red;');
      };
      nowDate = new Date();
      const start = formatDate(nowDate, 'yyyy-MM-dd HH:mm:ss:SSS', 'en-US', 'UTC');
      console.log(`%c start => ${start}`, 'color: blue;');
      this.workerStart = nowDate.getTime();
      console.log('worker', worker);
      worker.postMessage(45);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.

      console.log(`%c page got message: ${fibonacci(45)}`, 'color: red;');
    }

    this.formatDictionaryOrder();
  }

  private formatDictionaryOrder() {
    const dictionary = this.dictionary.map((item, index) => {
      return { ...item,  order: index + 1, editOrder: index + 1 };
    });
    console.log(JSON.stringify(dictionary));
  }
}
