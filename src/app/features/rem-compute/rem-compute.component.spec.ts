import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemComputeComponent } from './rem-compute.component';

describe('RemComputeComponent', () => {
  let component: RemComputeComponent;
  let fixture: ComponentFixture<RemComputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemComputeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
