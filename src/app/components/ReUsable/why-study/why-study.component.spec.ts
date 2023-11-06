import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyStudyComponent } from './why-study.component';

describe('WhyStudyComponent', () => {
  let component: WhyStudyComponent;
  let fixture: ComponentFixture<WhyStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
