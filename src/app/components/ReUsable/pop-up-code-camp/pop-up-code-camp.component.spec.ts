import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCodeCampComponent } from './pop-up-code-camp.component';

describe('PopUpCodeCampComponent', () => {
  let component: PopUpCodeCampComponent;
  let fixture: ComponentFixture<PopUpCodeCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpCodeCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpCodeCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
