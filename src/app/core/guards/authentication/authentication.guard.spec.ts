import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuard],
    });
  });

  xit('should ...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
