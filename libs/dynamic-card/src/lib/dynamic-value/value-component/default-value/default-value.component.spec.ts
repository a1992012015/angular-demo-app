import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultValueComponent } from './default-value.component';

describe('DefaultValueComponent', () => {
  let component: DefaultValueComponent;
  let fixture: ComponentFixture<DefaultValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultValueComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
