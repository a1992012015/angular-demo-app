import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageSectionComponent } from './massage-section.component';

describe('MassageSectionComponent', () => {
  let component: MassageSectionComponent;
  let fixture: ComponentFixture<MassageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MassageSectionComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
