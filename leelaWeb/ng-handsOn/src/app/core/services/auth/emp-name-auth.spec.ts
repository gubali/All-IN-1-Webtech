import { TestBed } from '@angular/core/testing';

import { EmpNameAuth } from './emp-name-auth';

describe('EmpNameAuth', () => {
  let service: EmpNameAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpNameAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
