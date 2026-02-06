import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSnippet } from './small-snippet';

describe('SmallSnippet', () => {
  let component: SmallSnippet;
  let fixture: ComponentFixture<SmallSnippet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallSnippet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallSnippet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
