import { TestBed } from '@angular/core/testing';

import { ExtractConfigService } from './extract-config.service';

describe('ExtractConfigService', () => {
  let service: ExtractConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
