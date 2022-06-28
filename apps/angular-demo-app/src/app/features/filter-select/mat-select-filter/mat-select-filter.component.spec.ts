import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatSelectFilterComponent } from './mat-select-filter.component';

describe('MatSelectFilterComponent', () => {
  let component: MatSelectFilterComponent;
  let fixture: ComponentFixture<MatSelectFilterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MatSelectFilterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
