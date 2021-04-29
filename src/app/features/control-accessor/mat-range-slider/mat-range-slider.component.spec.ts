import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRangeSliderComponent } from './mat-range-slider.component';

describe('MatRangeSliderComponent', () => {
  let component: MatRangeSliderComponent;
  let fixture: ComponentFixture<MatRangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatRangeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
