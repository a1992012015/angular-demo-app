import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { YieldMatrixCardComponent } from './yield-matrix-card.component';
import {
  createMockServices,
  getMetadataData,
  setDefaultMethodsToMocks
} from '../../../../../tests/mock-utilities';
import { CompareSelectService } from 'app/layers/core/services/compare-select.service';
import { TitleInterface } from 'app/modules/dynamic-card/interface/card-config.interface';
import { ExtractSectionInterface } from 'app/modules/dynamic-card/interface/extract-function.interface';
import { DictionaryInterface } from 'app/modules/dynamic-card/interface/dictionary.interface';

/**
 * card container
 */
@Component({
  selector: 'app-card-container',
  template: '<div></div>'
})
export class CardContainerTestComponent {}

/**
 * card title
 */
@Component({
  selector: 'app-card-title',
  template: '<div></div>'
})
export class CardTitleTestComponent {
  @Input() option?: TitleInterface;
  @Input() cardDirection = -1;
  @Output() titleClick = new EventEmitter();
}

/**
 * card title select
 */
@Component({
  selector: 'app-card-title-select',
  template: '<div></div>'
})
export class CardTitleSelectTestComponent {
  @Input() years: number[] = [];
  @Input() selectYears = 0;
  @Output() yearClick = new EventEmitter<number>();
}

/**
 * key value section
 */
@Component({
  selector: 'app-key-value-section',
  template: '<div></div>'
})
export class KeyValueSectionTestComponent {
  @Input() section?: ExtractSectionInterface;
  @Input() dictionary: DictionaryInterface[] = [];
  @Input() totalCost = 0;
}

/**
 * massage section
 */
@Component({
  selector: 'app-massage-section',
  template: '<div></div>'
})
export class MassageSectionTestComponent {
  @Input() section?: ExtractSectionInterface;
  @Input() dictionary: DictionaryInterface[] = [];
}

describe('YieldMatrixCardComponent', () => {
  let component: YieldMatrixCardComponent;
  let fixture: ComponentFixture<YieldMatrixCardComponent>;
  const mockServicesObj = createMockServices({
    sanitizer: DomSanitizer,
    compareSelect: CompareSelectService
  });
  const compareSub = new Subject();

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          YieldMatrixCardComponent,
          CardContainerTestComponent,
          CardTitleTestComponent,
          CardTitleSelectTestComponent,
          KeyValueSectionTestComponent,
          MassageSectionTestComponent
        ],
        providers: [...mockServicesObj.providers]
      }).compileComponents();
      setDefaultMethodsToMocks(mockServicesObj, {
        compareSelect: {
          getCloseCompareMetadataSub: jasmine.createSpy().and.returnValue(compareSub)
        },
        sanitizer: {
          bypassSecurityTrustResourceUrl: jasmine.createSpy().and.returnValue(() => ({}))
        }
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldMatrixCardComponent);
    component = fixture.componentInstance;
    component.metadata = [getMetadataData('yieldMatrixCard')];
    component.index = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change year', () => {
    component.changeCardYear(2018);
    expect(component.selectYear).toBe(2018);
  });

  it('should close compare card', () => {
    compareSub.next(0);
    expect(component.viewSections.length).toBe(0);
  });

  it('should change card view', () => {
    component.changeCardView();
    expect(!!component.viewSections.length).toBe(false);
    component.changeCardView();
    expect(!!component.viewSections.length).toBe(true);
  });
});
