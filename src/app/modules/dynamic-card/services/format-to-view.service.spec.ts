import { TestBed } from '@angular/core/testing';

import { FormatToViewService } from './format-to-view.service';

describe('FormatToViewService', () => {
  let service: FormatToViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatToViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
