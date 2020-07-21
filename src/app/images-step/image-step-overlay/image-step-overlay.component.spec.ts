import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStepOverlayComponent } from './image-step-overlay.component';

describe('ImageStepOverlayComponent', () => {
  let component: ImageStepOverlayComponent;
  let fixture: ComponentFixture<ImageStepOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageStepOverlayComponent ]
    })
    .compileComponents();
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
