import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedCircleScreenComponent } from './nested-circle-screen.component';

describe('NestedCircleScreenComponent', () => {
  let component: NestedCircleScreenComponent;
  let fixture: ComponentFixture<NestedCircleScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedCircleScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedCircleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
