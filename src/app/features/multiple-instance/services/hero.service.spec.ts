import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { createMockServices } from '../../../../tests/mock-utilities';

describe('HeroService', () => {
  let service: HeroService;
  const mockServicesObj = createMockServices({});

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HeroService]});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
