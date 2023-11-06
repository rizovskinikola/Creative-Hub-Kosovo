import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignFreeCourseComponent } from './graphic-design-free-course.component';

describe('GraphicDesignFreeCourseComponent', () => {
  let component: GraphicDesignFreeCourseComponent;
  let fixture: ComponentFixture<GraphicDesignFreeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicDesignFreeCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesignFreeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
