import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMachienTest } from './ng-machien-test';

describe('NgMachienTest', () => {
  let component: NgMachienTest;
  let fixture: ComponentFixture<NgMachienTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgMachienTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgMachienTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
