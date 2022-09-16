import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';

import { MatDesignModule } from '@angular-demo-app/mat-design';

import { TodosComponent } from './todos/todos.component';
import { ChartDialogComponent } from './chart-dialog/chart-dialog.component';

@NgModule({
  imports: [CommonModule, MatDesignModule, GoogleChartsModule],
  declarations: [TodosComponent, ChartDialogComponent],
  exports: [TodosComponent, ChartDialogComponent]
})
export class UiModule {}
