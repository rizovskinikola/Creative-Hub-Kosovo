import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpHrFormComponent } from './pop-up-hr-form.component';

describe('PopUpHrFormComponent', () => {
  let component: PopUpHrFormComponent;
  let fixture: ComponentFixture<PopUpHrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpHrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpHrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
