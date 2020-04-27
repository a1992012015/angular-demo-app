import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';

import { ScriptLoaderService } from '../script-loader/script-loader.service';
import { RawChartComponent } from './raw-chart.component';
import { Role } from '../models/role.model';
import { AnyType } from '../../../interface/base.type';

/**
 * GoogleChartComponent
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'google-chart',
  template: '',
  styles: [':host { width: fit-content; display: block; }'],
  exportAs: 'components',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleChartComponent extends RawChartComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: Array<Array<(string | number)>> = [];
  @Input() columnNames: string[] | Array<{
    type?: string;
    label?: string;
    id?: string;
    role?: string;
    pattern?: string;
    p?: boolean;
  }> = [];
  @Input() roles: Role[] = [];
  @Input() title = '';
  @Input() width?: number = undefined;
  @Input() height?: number = undefined;
  @Input() options: object = {};
  @Input() type = '';

  constructor(
    ngZone: NgZone,
    element: ElementRef,
    loaderService: ScriptLoaderService,
  ) {
    super(ngZone, element, loaderService);
  }

  ngOnInit() {
    if (this.type == null) {
      throw new Error('Can\'t create a Google Chart without specifying a type!');
    }
    if (this.data == null) {
      throw new Error('Can\'t create a Google Chart without data!');
    }

    this.chartData = {
      chartType: this.type,
    };

    this.loaderService.onReady.subscribe(() => {
      this.createChart();
    });
  }

  ngOnDestroy(): void {
    if (this.wrapper) {
      const chartBase = this.wrapper.getChart() as google.visualization.ChartBaseClearable;
      if (chartBase) {
        chartBase.clearChart();
      }
    }
  }

  ngOnChanges() {
    if (this.wrapper) {
      this.chartData = {
        chartType: this.type,
        dataTable: this.getDataTable(),
        options: this.parseOptions(),
      };
    }

    super.ngOnChanges();
  }

  protected parseOptions(): object {
    return {
      title: this.title,
      width: this.width,
      height: this.height,
      ...this.options,
    };
  }

  protected createChart() {
    this.loadNeededPackages().subscribe(() => {
      this.chartData = {
        chartType: this.type,
        dataTable: this.getDataTable(),
        options: this.parseOptions(),
      };

      this.wrapper = new google.visualization.ChartWrapper();
      this.updateChart();
    });
  }

  protected getDataTable(): google.visualization.DataTable {
    if (this.columnNames) {
      const columns = this.parseRoles(this.columnNames);

      return google.visualization.arrayToDataTable([
        columns,
        ...this.data,
      ], false);
    } else {
      return google.visualization.arrayToDataTable(this.data, true);
    }
  }

  private parseRoles(columnNames: AnyType[]): AnyType[] {
    const columnNamesWithRoles = columnNames.slice();
    if (this.roles) {
      this.roles.forEach(role => {
        const roleData: Role = {
          type: role.type,
          role: role.role,
        };
        if (role.p) {
          roleData.p = role.p;
        }
        if (role.index != null) {
          columnNamesWithRoles.splice(role.index + 1, 0, roleData);

          for (const otherRole of this.roles) {
            if (otherRole === role) {
              continue;
            }

            if (otherRole && otherRole.index && otherRole.index > role.index) {
              otherRole.index++;
            }
          }
        } else {
          columnNamesWithRoles.push(roleData);
        }
      });
    }

    return columnNamesWithRoles;
  }
}
