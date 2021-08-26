import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSvgCutComponent } from './map-svg-cut.component';

describe('MapSvgCutComponent', () => {
  let component: MapSvgCutComponent;
  let fixture: ComponentFixture<MapSvgCutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapSvgCutComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSvgCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
