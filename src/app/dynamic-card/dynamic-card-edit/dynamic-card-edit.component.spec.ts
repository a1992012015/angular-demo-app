import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCardEditComponent } from './dynamic-card-edit.component';

describe('DynamicCardEditComponent', () => {
  let component: DynamicCardEditComponent;
  let fixture: ComponentFixture<DynamicCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
