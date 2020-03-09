import { TestBed } from '@angular/core/testing';

import { CatGuardService } from './cat-guard.service';

describe('CatGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatGuardService = TestBed.get(CatGuardService);
    expect(service).toBeTruthy();
  });
});
