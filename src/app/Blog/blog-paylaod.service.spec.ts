import { TestBed } from '@angular/core/testing';

import { BlogPaylaodService } from './blog-paylaod.service';

describe('BlogPaylaodService', () => {
  let service: BlogPaylaodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPaylaodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
