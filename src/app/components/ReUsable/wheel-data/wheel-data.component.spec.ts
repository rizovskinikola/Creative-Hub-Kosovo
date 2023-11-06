import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelDataComponent } from './wheel-data.component';

describe('WheelDataComponent', () => {
  let component: WheelDataComponent;
  let fixture: ComponentFixture<WheelDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
