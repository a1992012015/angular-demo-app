import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFrameComponent } from './animation-frame.component';

describe('AnimationFrameComponent', () => {
  let component: AnimationFrameComponent;
  let fixture: ComponentFixture<AnimationFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
