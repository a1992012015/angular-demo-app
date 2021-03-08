import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { GoogleChartComponent } from './google-chart.component';
import { Role } from '../../modules/google-chart/models/role.model';

/**
 * search location
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'google-chart',
  template: '<div></div>',
})
class GoogleChartTestComponent {
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
  @Input() dynamicResize = false;
}

describe('GoogleChartComponent', () => {
  let component: GoogleChartComponent;
  let fixture: ComponentFixture<GoogleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleChartComponent, GoogleChartTestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
