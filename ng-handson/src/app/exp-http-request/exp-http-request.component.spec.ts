import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpHttpRequestComponent } from './exp-http-request.component';

describe('ExpHttpRequestComponent', () => {
  let component: ExpHttpRequestComponent;
  let fixture: ComponentFixture<ExpHttpRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpHttpRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpHttpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
