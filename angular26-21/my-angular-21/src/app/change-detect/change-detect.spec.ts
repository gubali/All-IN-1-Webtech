import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetect } from './change-detect';

describe('ChangeDetect', () => {
  let component: ChangeDetect;
  let fixture: ComponentFixture<ChangeDetect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
