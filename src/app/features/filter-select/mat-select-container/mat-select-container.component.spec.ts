import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectContainerComponent } from './mat-select-container.component';

describe('MatSelectContainerComponent', () => {
  let component: MatSelectContainerComponent;
  let fixture: ComponentFixture<MatSelectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSelectContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
