import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndFreeCourseComponent } from './front-end-free-course.component';

describe('FrontEndFreeCourseComponent', () => {
  let component: FrontEndFreeCourseComponent;
  let fixture: ComponentFixture<FrontEndFreeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndFreeCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndFreeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
