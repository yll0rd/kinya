import { TestBed } from '@angular/core/testing';

import { LessonsService } from './lesson-categories.service';

describe('LessonsService', () => {
  let service: LessonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
