import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRemComputeComponent } from './base-rem-compute.component';

describe('BaseRemComputeComponent', () => {
  let component: BaseRemComputeComponent;
  let fixture: ComponentFixture<BaseRemComputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseRemComputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRemComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
