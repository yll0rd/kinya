import { TestBed } from '@angular/core/testing';

import { ThemeSeviceService } from './theme-toggle.service';

describe('ThemeSeviceService', () => {
  let service: ThemeSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
