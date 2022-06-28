import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleInstanceComponent } from './multiple-instance.component';

describe('MultipleInstanceComponent', () => {
  let component: MultipleInstanceComponent;
  let fixture: ComponentFixture<MultipleInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
