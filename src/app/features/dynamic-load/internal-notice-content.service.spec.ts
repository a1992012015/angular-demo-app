import { TestBed } from '@angular/core/testing';

import { InternalNoticeContentService } from './internal-notice-content.service';

describe('InternalNoticeContentService', () => {
  let service: InternalNoticeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalNoticeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
