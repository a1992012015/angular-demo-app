import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagikarpCodeComponent } from './magikarp-code.component';

describe('MagikarpCodeComponent', () => {
  let component: MagikarpCodeComponent;
  let fixture: ComponentFixture<MagikarpCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagikarpCodeComponent ]
    }).compileComponents().then(res => {
      console.log(res);
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagikarpCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
