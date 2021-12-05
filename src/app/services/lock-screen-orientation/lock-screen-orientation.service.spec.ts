import { TestBed } from '@angular/core/testing';

import { LockScreenOrientationService } from './lock-screen-orientation.service';

describe('LockScreenOrientationService', () => {
  let service: LockScreenOrientationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockScreenOrientationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
