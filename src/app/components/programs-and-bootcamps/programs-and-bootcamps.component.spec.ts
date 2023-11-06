import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsAndBootcampsComponent } from './programs-and-bootcamps.component';

describe('ProgramsAndBootcampsComponent', () => {
  let component: ProgramsAndBootcampsComponent;
  let fixture: ComponentFixture<ProgramsAndBootcampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsAndBootcampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsAndBootcampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
