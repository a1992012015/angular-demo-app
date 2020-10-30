import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAnimationComponent } from './tabs-animation.component';

describe('TabsAnimationComponent', () => {
  let component: TabsAnimationComponent;
  let fixture: ComponentFixture<TabsAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
