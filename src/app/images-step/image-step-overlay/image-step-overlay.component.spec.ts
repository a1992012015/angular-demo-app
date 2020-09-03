import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStepOverlayComponent, PORTAL_IMAGE_STEP_DATA } from './image-step-overlay.component';
import { MatDesignModule } from '../../modules/mat-design.module';

describe('ImageStepOverlayComponent', () => {
  let component: ImageStepOverlayComponent;
  let fixture: ComponentFixture<ImageStepOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageStepOverlayComponent],
      imports: [MatDesignModule],
      providers: [{ provide: PORTAL_IMAGE_STEP_DATA, useValue: { initData: { adminLevel: 'myAdminLevel' } } }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageStepOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
