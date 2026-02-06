import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharing } from './data-sharing';

describe('DataSharing', () => {
  let component: DataSharing;
  let fixture: ComponentFixture<DataSharing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSharing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSharing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
