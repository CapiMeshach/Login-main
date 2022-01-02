import { TestBed } from '@angular/core/testing';

import { AppHttpInterceptor } from './http-interceptor.service';

describe('HttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: AppHttpInterceptor = TestBed.inject(AppHttpInterceptor);

    expect(service).toBeTruthy();
  });
});
