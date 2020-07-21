import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesStepComponent } from './images-step.component';

describe('ImagesStepComponent', () => {
  let component: ImagesStepComponent;
  let fixture: ComponentFixture<ImagesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
