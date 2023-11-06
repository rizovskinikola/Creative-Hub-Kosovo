import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelHrComponent } from './wheel-hr.component';

describe('WheelHrComponent', () => {
  let component: WheelHrComponent;
  let fixture: ComponentFixture<WheelHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelHrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
