import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAction } from './child-action';

describe('ChildAction', () => {
  let component: ChildAction;
  let fixture: ComponentFixture<ChildAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
