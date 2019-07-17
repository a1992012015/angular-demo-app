import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTimerComponent } from './meet-timer.component';

describe('MeetTimerComponent', () => {
  let component: MeetTimerComponent;
  let fixture: ComponentFixture<MeetTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
