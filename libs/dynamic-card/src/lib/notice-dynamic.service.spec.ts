import { TestBed } from '@angular/core/testing';

import { NoticeDynamicService } from './notice-dynamic.service';

describe('NoticeDynamicService', () => {
  let service: NoticeDynamicService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [NoticeDynamicService] });
    service = TestBed.inject(NoticeDynamicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
