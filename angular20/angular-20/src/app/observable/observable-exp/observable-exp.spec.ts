import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableExp } from './observable-exp';

describe('ObservableExp', () => {
  let component: ObservableExp;
  let fixture: ComponentFixture<ObservableExp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableExp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableExp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
