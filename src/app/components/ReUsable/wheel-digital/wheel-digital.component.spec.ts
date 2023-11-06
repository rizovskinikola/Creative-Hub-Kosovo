import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelDigitalComponent } from './wheel-digital.component';

describe('WheelDigitalComponent', () => {
  let component: WheelDigitalComponent;
  let fixture: ComponentFixture<WheelDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
