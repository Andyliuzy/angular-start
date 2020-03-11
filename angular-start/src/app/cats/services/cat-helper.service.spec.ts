import { TestBed } from '@angular/core/testing';

import { CatHelperService } from './cat-helper.service';

describe('CatHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatHelperService = TestBed.get(CatHelperService);
    expect(service).toBeTruthy();
  });
});
