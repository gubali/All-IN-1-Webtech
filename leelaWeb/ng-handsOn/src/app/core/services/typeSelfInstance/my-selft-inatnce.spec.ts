import { TestBed } from '@angular/core/testing';

import { MySelftInatnce } from './my-selft-inatnce';

describe('MySelftInatnce', () => {
  let service: MySelftInatnce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySelftInatnce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
