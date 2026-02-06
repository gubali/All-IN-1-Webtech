import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushStratetgy } from './onpush-stratetgy';

describe('OnpushStratetgy', () => {
  let component: OnpushStratetgy;
  let fixture: ComponentFixture<OnpushStratetgy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnpushStratetgy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushStratetgy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
