import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapSvgComponent } from './google-map-svg.component';

describe('GoogleMapSvgComponent', () => {
  let component: GoogleMapSvgComponent;
  let fixture: ComponentFixture<GoogleMapSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
