import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjecAndBehaviour } from './subjec-and-behaviour';

describe('SubjecAndBehaviour', () => {
  let component: SubjecAndBehaviour;
  let fixture: ComponentFixture<SubjecAndBehaviour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjecAndBehaviour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjecAndBehaviour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
