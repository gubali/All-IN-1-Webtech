import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxExp } from './ngrx-exp';

describe('NgrxExp', () => {
  let component: NgrxExp;
  let fixture: ComponentFixture<NgrxExp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxExp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxExp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
