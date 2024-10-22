import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxCalculationComponent } from './textbox-calculation.component';

describe('TextboxCalculationComponent', () => {
  let component: TextboxCalculationComponent;
  let fixture: ComponentFixture<TextboxCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextboxCalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextboxCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
