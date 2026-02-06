import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostData } from './post-list';

describe('PostData', () => {
  let component: PostData;
  let fixture: ComponentFixture<PostData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostData],
    }).compileComponents();

    fixture = TestBed.createComponent(PostData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
