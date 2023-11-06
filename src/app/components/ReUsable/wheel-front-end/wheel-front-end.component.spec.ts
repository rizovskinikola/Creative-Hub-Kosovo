import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelFrontEndComponent } from './wheel-front-end.component';

describe('WheelFrontEndComponent', () => {
  let component: WheelFrontEndComponent;
  let fixture: ComponentFixture<WheelFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelFrontEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
