import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCardViewComponent } from './dynamic-card-view.component';

describe('DynamicCardViewComponent', () => {
  let component: DynamicCardViewComponent;
  let fixture: ComponentFixture<DynamicCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
