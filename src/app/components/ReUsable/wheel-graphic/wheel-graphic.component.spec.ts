import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelGraphicComponent } from './wheel-graphic.component';

describe('WheelGraphicComponent', () => {
  let component: WheelGraphicComponent;
  let fixture: ComponentFixture<WheelGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
