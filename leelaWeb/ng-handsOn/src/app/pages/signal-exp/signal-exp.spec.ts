import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalExp } from './signal-exp';

describe('SignalExp', () => {
  let component: SignalExp;
  let fixture: ComponentFixture<SignalExp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalExp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalExp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
