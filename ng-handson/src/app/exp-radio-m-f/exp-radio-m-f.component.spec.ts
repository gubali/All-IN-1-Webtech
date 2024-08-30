import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpRadioMFComponent } from './exp-radio-m-f.component';

describe('ExpRadioMFComponent', () => {
  let component: ExpRadioMFComponent;
  let fixture: ComponentFixture<ExpRadioMFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpRadioMFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpRadioMFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
