import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideScrollbarComponent } from './hide-scrollbar.component';

describe('HideScrollbarComponent', () => {
  let component: HideScrollbarComponent;
  let fixture: ComponentFixture<HideScrollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
