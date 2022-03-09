import { ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DynamicCardService } from './dynamic-card.service';
import {
  ECardViewMode,
  IDynamicComponent
} from 'app/modules/dynamic-card/interfaces/dynamic-card-view.interface';
import { createMockServices, setDefaultMethodsToMocks } from '../../../../tests/mock-utilities';
import { DynamicCardViewComponent } from 'app/modules/dynamic-card/dynamic-card-view/dynamic-card-view.component';

describe('DynamicCardService', () => {
  let service: DynamicCardService;
  const mockServicesObj = createMockServices({
    injector: Injector,
    applicationRef: ApplicationRef,
    componentFactoryResolver: ComponentFactoryResolver
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicCardService, ...mockServicesObj.providers]
    });

    setDefaultMethodsToMocks(mockServicesObj, {
      applicationRef: {
        detachView: jasmine.createSpy(),
        attachView: jasmine.createSpy()
      },
      componentFactoryResolver: {
        resolveComponentFactory: jasmine.createSpy().and.returnValue({
          create: () => {
            return {
              instance: {},
              location: { nativeElement: document.createElement('div') },
              hostView: document.createElement('div'),
              changeDetectorRef: { detectChanges: () => null }
            };
          }
        })
      }
    });

    service = TestBed.inject(DynamicCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run the setCardMode event', () => {
    service.setCardMode(ECardViewMode.VIEW_FULL_SCREEN);

    service.getCardMode().subscribe((mode) => {
      expect(mode).toEqual(ECardViewMode.VIEW_FULL_SCREEN);
    });
  });

  it('should run the attachViewComponent event (1)', () => {
    const action: IDynamicComponent = { component: DynamicCardViewComponent, props: { data: [] } };
    // const ref = service.attachViewComponent(action, document.createElement('div'));
    //
    // expect(ref).toBeTruthy();
  });

  it('should run the attachViewComponent event (2)', () => {
    const action: IDynamicComponent = { component: null };
    // const ref = service.attachViewComponent(action, document.createElement('div'));
    //
    // expect(ref).toBeNull();
  });

  it('should run the detachViewComponent event', () => {
    const componentRef = jasmine.createSpyObj('ComponentRef', ['destroy', 'hostView']);
    service.detachViewComponent(componentRef);

    expect(service['applicationRef'].detachView).toHaveBeenCalled();
  });
});
