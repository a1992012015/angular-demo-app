import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRangeInputComponent } from './mat-range-input.component';

describe('MatRangeInputComponent', () => {
  let component: MatRangeInputComponent;
  let fixture: ComponentFixture<MatRangeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatRangeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatRangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
