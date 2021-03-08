import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberValueComponent } from './number-value.component';

describe('NumberValueComponent', () => {
  let component: NumberValueComponent;
  let fixture: ComponentFixture<NumberValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberValueComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
