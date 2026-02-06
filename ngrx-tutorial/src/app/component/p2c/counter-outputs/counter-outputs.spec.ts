import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputs } from './counter-outputs';

describe('CounterOutputs', () => {
  let component: CounterOutputs;
  let fixture: ComponentFixture<CounterOutputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterOutputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterOutputs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
