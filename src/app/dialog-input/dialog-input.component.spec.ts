import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

import { DialogInputComponent } from './dialog-input.component';
import { createMockServices, setDefaultMethodsToMocks } from '../../tests/mock-utilities';
import { MatDesignModule } from '../modules/mat-design.module';

describe('DialogInputComponent', () => {
  let component: DialogInputComponent;
  let fixture: ComponentFixture<DialogInputComponent>;
  const mockServicesObj = createMockServices({
    dialog: MatDialog
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogInputComponent],
      imports: [MatDesignModule],
      providers: [...mockServicesObj.providers]
    }).compileComponents();
    setDefaultMethodsToMocks(mockServicesObj, {
      dialog: {
        open: jasmine.createSpy().and.returnValue({ afterClosed: () => new Subject() })
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
