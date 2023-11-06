import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDigitalFormComponent } from './pop-up-digital-form.component';

describe('PopUpDigitalFormComponent', () => {
  let component: PopUpDigitalFormComponent;
  let fixture: ComponentFixture<PopUpDigitalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpDigitalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDigitalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
