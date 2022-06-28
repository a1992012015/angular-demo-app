import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastComponent } from './toast.component';
import { createMockServices, setDefaultMethodsToMocks } from '../../../../tests/mock-utilities';
import { ToastRef } from 'app/modules/toast/services/toast-ref';
import {
  PositionType,
  TOAST_CONFIG_TOKEN,
  ToastData
} from 'app/modules/toast/services/toast.interface';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  const mockServicesObj = createMockServices({
    ref: ToastRef,
    data: ToastData
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent],
      imports: [BrowserAnimationsModule],
      providers: [
        {
          provide: TOAST_CONFIG_TOKEN,
          useValue: {
            position: {
              vertically: PositionType.TOP,
              horizontally: PositionType.CENTER,
              margin: 20
            },
            animation: {
              fadeOut: 1500,
              fadeIn: 300
            }
          }
        },
        ...mockServicesObj.providers
      ]
    }).compileComponents();
    setDefaultMethodsToMocks(mockServicesObj, {
      ref: {
        animationDone: jasmine.createSpy()
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
