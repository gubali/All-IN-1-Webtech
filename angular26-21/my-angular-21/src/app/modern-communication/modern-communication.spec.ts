import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernCommunication } from './modern-communication';

describe('ModernCommunication', () => {
  let component: ModernCommunication;
  let fixture: ComponentFixture<ModernCommunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernCommunication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernCommunication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
