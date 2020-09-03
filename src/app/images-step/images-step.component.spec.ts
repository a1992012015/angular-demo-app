import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Overlay } from '@angular/cdk/overlay';
import { Injector } from '@angular/core';

import { ImagesStepComponent } from './images-step.component';
import { createMockServices } from '../../tests/mock-utilities';

describe('ImagesStepComponent', () => {
  let component: ImagesStepComponent;
  let fixture: ComponentFixture<ImagesStepComponent>;
  const mockServicesObj = createMockServices({
    overlay: Overlay,
    injector: Injector,
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesStepComponent],
      providers: [...mockServicesObj.providers]
    }).compileComponents();
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
