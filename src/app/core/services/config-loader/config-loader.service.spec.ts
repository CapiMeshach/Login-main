import { TestBed } from '@angular/core/testing';

import { ConfigLoaderService } from './config-loader.service';

describe('ConfigLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ConfigLoaderService = TestBed.get(ConfigLoaderService);

    expect(service).toBeTruthy();
  });
});
