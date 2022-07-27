import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmutableDataComponent } from './immutable-data.component';

describe('ImmutableDataComponent', () => {
  let component: ImmutableDataComponent;
  let fixture: ComponentFixture<ImmutableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImmutableDataComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ImmutableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
