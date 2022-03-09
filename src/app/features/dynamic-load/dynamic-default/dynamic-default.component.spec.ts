import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDefaultComponent } from './dynamic-default.component';

describe('DynamicDefaultComponent', () => {
  let component: DynamicDefaultComponent;
  let fixture: ComponentFixture<DynamicDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
