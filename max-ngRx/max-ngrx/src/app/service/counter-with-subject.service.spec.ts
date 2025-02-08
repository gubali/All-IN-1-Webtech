import { TestBed } from '@angular/core/testing';

import { CounterWithSubjectService } from './counter-with-subject.service';

describe('CounterWithSubjectService', () => {
  let service: CounterWithSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterWithSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
