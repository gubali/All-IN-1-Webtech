import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHeading } from './component-heading';

describe('ComponentHeading', () => {
  let component: ComponentHeading;
  let fixture: ComponentFixture<ComponentHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentHeading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentHeading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
