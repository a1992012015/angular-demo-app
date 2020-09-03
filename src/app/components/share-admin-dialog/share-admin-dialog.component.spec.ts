import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ShareAdminDialogComponent } from './share-admin-dialog.component';
import { createMockServices } from '../../../tests/mock-utilities';
import { MatDesignModule } from '../../modules/mat-design.module';

describe('ShareAdminDialogComponent', () => {
  let component: ShareAdminDialogComponent;
  let fixture: ComponentFixture<ShareAdminDialogComponent>;
  const mockServicesObj = createMockServices({
    dialogRef: MatDialogRef
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShareAdminDialogComponent],
      imports: [MatDesignModule],
      providers: [
        ...mockServicesObj.providers,
        { provide: MAT_DIALOG_DATA, useValue: { data: { adminLevel: 'myAdminLevel' } } },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
