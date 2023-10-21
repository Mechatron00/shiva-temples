import { TestBed } from '@angular/core/testing';

import { MediumBlogsService } from './medium-blogs.service';

describe('MediumBlogsService', () => {
  let service: MediumBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediumBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
