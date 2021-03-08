import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueSectionComponent } from './key-value-section.component';

describe('KeyValueSectionComponent', () => {
  let component: KeyValueSectionComponent;
  let fixture: ComponentFixture<KeyValueSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyValueSectionComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyValueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
