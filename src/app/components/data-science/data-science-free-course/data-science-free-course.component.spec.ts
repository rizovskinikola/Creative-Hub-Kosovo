import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScienceFreeCourseComponent } from './data-science-free-course.component';

describe('DataScienceFreeCourseComponent', () => {
  let component: DataScienceFreeCourseComponent;
  let fixture: ComponentFixture<DataScienceFreeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataScienceFreeCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScienceFreeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
