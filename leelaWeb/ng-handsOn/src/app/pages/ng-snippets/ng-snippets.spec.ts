import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSnippets } from './ng-snippets';

describe('NgSnippets', () => {
  let component: NgSnippets;
  let fixture: ComponentFixture<NgSnippets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSnippets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSnippets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
