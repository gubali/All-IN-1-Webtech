import { TestBed } from '@angular/core/testing';

import { SignalComponentService } from './signal-component.service';

describe('SignalComponentService', () => {
  let service: SignalComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
