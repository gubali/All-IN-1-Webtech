import { TestBed } from '@angular/core/testing';

import { PrintUtilitiesService } from './print-utilities.service';

describe('PrintUtilitiesService', () => {
  let service: PrintUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
