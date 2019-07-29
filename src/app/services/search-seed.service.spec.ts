import { TestBed } from '@angular/core/testing';

import { SearchSeedService } from './search-seed.service';

describe('SearchSeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchSeedService = TestBed.get(SearchSeedService);
    expect(service).toBeTruthy();
  });
});
