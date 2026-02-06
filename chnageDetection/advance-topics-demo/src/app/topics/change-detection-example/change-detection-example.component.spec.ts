import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionExampleComponent } from './change-detection-example.component';

describe('ChangeDetectionExampleComponent', () => {
  let component: ChangeDetectionExampleComponent;
  let fixture: ComponentFixture<ChangeDetectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
