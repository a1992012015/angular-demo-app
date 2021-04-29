import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAccessorComponent } from './control-accessor.component';

describe('ControlAccessorComponent', () => {
  let component: ControlAccessorComponent;
  let fixture: ComponentFixture<ControlAccessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlAccessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
