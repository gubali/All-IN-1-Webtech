import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormExpComponent } from './reactive-form-exp.component';

describe('ReactiveFormExpComponent', () => {
  let component: ReactiveFormExpComponent;
  let fixture: ComponentFixture<ReactiveFormExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormExpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
