import { TestBed } from '@angular/core/testing';

import { MergeConfigService } from './merge-config.service';
import { createMockServices } from '../../../../tests/mock-utilities';

describe('MergeConfigService', () => {
  let service: MergeConfigService;
  const mockServicesObj = createMockServices({});

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MergeConfigService, ...mockServicesObj.providers]
    });
    service = TestBed.inject(MergeConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
