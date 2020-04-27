import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { ChartErrorEvent, ChartEvent } from '../models/events.model';
import { ScriptLoaderService } from '../script-loader/script-loader.service';

/**
 * RawChartComponent
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'raw-chart',
  template: '',
  styles: [':host { width: fit-content; display: block; }'],
  exportAs: 'raw-chart',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RawChartComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input()
  chartData?: google.visualization.ChartSpecs;

  @Input()
  formatter?: google.visualization.DefaultFormatter | Array<{ formatter: google.visualization.DefaultFormatter, colIndex: number }>;

  @Input()
  dynamicResize = false;

  @Output()
  error = new EventEmitter<ChartErrorEvent>();

  @Output()
  ready = new EventEmitter();

  @Output()
  select = new EventEmitter<ChartEvent>();

  @Output()
  mouseenter = new EventEmitter<ChartEvent>();

  @Output()
  mouseleave = new EventEmitter<ChartEvent>();

  wrapper?: google.visualization.ChartWrapper;

  chartTypesToPackages: {
    [key: string]: string
  } = {
    AnnotationChart: 'annotationchart',
    AreaChart: 'corechart',
    Bar: 'bar',
    BarChart: 'corechart',
    BubbleChart: 'corechart',
    Calendar: 'calendar',
    CandlestickChart: 'corechart',
    ColumnChart: 'corechart',
    ComboChart: 'corechart',
    PieChart: 'corechart',
    Gantt: 'gantt',
    Gauge: 'gauge',
    GeoChart: 'geochart',
    Histogram: 'corechart',
    Line: 'line',
    LineChart: 'corechart',
    Map: 'map',
    OrgChart: 'orgchart',
    Sankey: 'sankey',
    Scatter: 'scatter',
    ScatterChart: 'corechart',
    SteppedAreaChart: 'corechart',
    Table: 'table',
    Timeline: 'timeline',
    TreeMap: 'treemap',
    WordTree: 'wordtree'
  };

  windowResizeSubscription?: Subscription;

  constructor(
    protected ngZone: NgZone,
    protected element: ElementRef,
    protected loaderService: ScriptLoaderService
  ) {
  }

  ngOnInit() {
    if (this.chartData == null) {
      throw new Error('Can\'t create a Google Chart without data!');
    }

    this.loaderService.onReady.subscribe(() => {
      this.createChart();
    });
  }

  ngAfterViewInit() {
    this.addResizeListener();
  }

  ngOnChanges() {
    if (this.wrapper) {
      this.updateChart();
    }
  }

  getChartElement(): HTMLElement {
    return this.element.nativeElement.firstElementChild;
  }

  ngOnDestroy(): void {
    if (this.windowResizeSubscription) {
      this.windowResizeSubscription.unsubscribe();
    }
  }

  protected createChart() {
    this.loadNeededPackages().subscribe(() => {
      this.ngZone.runOutsideAngular(() => {
        this.wrapper = new google.visualization.ChartWrapper();
        this.updateChart();
      });
    });
  }

  protected loadNeededPackages(): Observable<void> {
    const chartType = this.chartData && this.chartData.chartType;
    return this.loaderService.loadChartPackages(
      [this.getPackageForChartName(chartType as string)]);
  }

  protected updateChart() {
    if (!this.wrapper || !this.chartData) {
      return;
    }

    if (this.chartData.dataTable) {
      this.formatData(this.chartData.dataTable as google.visualization.DataTable);
    }

    this.wrapper.setChartType(this.chartData.chartType);
    this.wrapper.setDataTable(this.chartData.dataTable as google.visualization.DataTable);
    this.wrapper.setOptions(this.chartData.options as Object);
    this.wrapper.setDataSourceUrl(this.chartData.dataSourceUrl as string);
    this.wrapper.setQuery(this.chartData.query as string);
    this.wrapper.setRefreshInterval(this.chartData.refreshInterval as number);
    this.wrapper.setView(this.chartData.view);

    this.removeChartEvents();
    this.registerChartEvents();

    this.ngZone.runOutsideAngular(() => {
      if (this.wrapper) {
        this.wrapper.draw(this.element.nativeElement);
      }
    });
  }

  protected formatData(dataTable: google.visualization.DataTable) {
    if (!this.formatter) {
      return;
    }

    if (this.formatter instanceof Array) {
      this.formatter.forEach((value) => {
        value.formatter.format(dataTable, value.colIndex);
      });
    } else {
      for (let i = 0; i < dataTable.getNumberOfColumns(); i++) {
        this.formatter.format(dataTable, i);
      }
    }
  }

  private addResizeListener() {
    if (this.dynamicResize) {
      this.windowResizeSubscription = fromEvent(window, 'resize').
        pipe(debounceTime(100)).
        subscribe(() => {
          this.ngOnChanges();
        });
    }
  }

  private removeChartEvents() {
    google.visualization.events.removeAllListeners(this.wrapper);
  }

  private registerChartEvents() {
    this.registerChartEvent('ready', () => this.ready.emit('Chart Ready'));
    this.registerChartEvent('error', (error: ChartErrorEvent) => this.error.emit(error));
    this.registerChartEvent('select', () => {
      const selection = this.wrapper && this.wrapper.getChart().getSelection();
      this.select.emit(selection);
    });

    this.registerChartEvent('onmouseover', (event: ChartEvent) => this.mouseenter.emit(event));
    this.registerChartEvent('onmouseout', (event: ChartEvent) => this.mouseleave.emit(event));
  }

  private registerChartEvent(eventName: string, callback: Function) {
    google.visualization.events.addListener(this.wrapper, eventName, callback);
  }

  private getPackageForChartName(chartName: string): string {
    return this.chartTypesToPackages && this.chartTypesToPackages[chartName];
  }
}
