import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChagedetectionsComponent } from './child-chagedetections.component';

describe('ChildChagedetectionsComponent', () => {
  let component: ChildChagedetectionsComponent;
  let fixture: ComponentFixture<ChildChagedetectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildChagedetectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildChagedetectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
