import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceExp } from './debounce-exp';

describe('DebounceExp', () => {
  let component: DebounceExp;
  let fixture: ComponentFixture<DebounceExp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebounceExp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceExp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
