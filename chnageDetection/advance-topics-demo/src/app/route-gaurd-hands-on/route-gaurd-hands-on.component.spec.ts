import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGaurdHandsOnComponent } from './route-gaurd-hands-on.component';

describe('RouteGaurdHandsOnComponent', () => {
  let component: RouteGaurdHandsOnComponent;
  let fixture: ComponentFixture<RouteGaurdHandsOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteGaurdHandsOnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGaurdHandsOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
