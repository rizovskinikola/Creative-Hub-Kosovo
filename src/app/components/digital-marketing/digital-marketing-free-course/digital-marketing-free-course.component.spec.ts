import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingFreeCourseComponent } from './digital-marketing-free-course.component';

describe('DigitalMarketingFreeCourseComponent', () => {
  let component: DigitalMarketingFreeCourseComponent;
  let fixture: ComponentFixture<DigitalMarketingFreeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalMarketingFreeCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMarketingFreeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
