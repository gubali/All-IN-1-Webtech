import { TestBed } from '@angular/core/testing';

import { DeBoundService } from './de-bound-service';

describe('DeBoundService', () => {
  let service: DeBoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeBoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
