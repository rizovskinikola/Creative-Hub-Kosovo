import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrFreeCourseComponent } from './hr-free-course.component';

describe('HrFreeCourseComponent', () => {
  let component: HrFreeCourseComponent;
  let fixture: ComponentFixture<HrFreeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrFreeCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrFreeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
