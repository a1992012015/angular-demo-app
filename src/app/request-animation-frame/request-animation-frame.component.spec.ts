import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAnimationFrameComponent } from './request-animation-frame.component';

describe('RequestAnimationFrameComponent', () => {
  let component: RequestAnimationFrameComponent;
  let fixture: ComponentFixture<RequestAnimationFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAnimationFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAnimationFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
