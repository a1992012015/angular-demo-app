import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BaseRemComputeComponent } from './base-rem-compute.component';
import { createMockServices, setDefaultMethodsToMocks } from '../../tests/mock-utilities';

describe('BaseRemComputeComponent', () => {
  let component: BaseRemComputeComponent;
  let fixture: ComponentFixture<BaseRemComputeComponent>;
  const mockServicesObj = createMockServices({
    fb: FormBuilder
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaseRemComputeComponent],
      providers: [...mockServicesObj.providers]
    }).compileComponents();
    setDefaultMethodsToMocks(mockServicesObj, {
      fb: {
        group: jasmine.createSpy().and.returnValue(new FormGroup({}))
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRemComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
