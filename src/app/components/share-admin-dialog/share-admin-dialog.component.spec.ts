import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAdminDialogComponent } from './share-admin-dialog.component';

describe('ShareAdminDialogComponent', () => {
  let component: ShareAdminDialogComponent;
  let fixture: ComponentFixture<ShareAdminDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareAdminDialogComponent ]
    })
    .compileComponents();
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
