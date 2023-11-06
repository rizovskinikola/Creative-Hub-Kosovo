import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DardaniaVideoCompaniesComponent } from './dardania-video-companies.component';

describe('DardaniaVideoCompaniesComponent', () => {
  let component: DardaniaVideoCompaniesComponent;
  let fixture: ComponentFixture<DardaniaVideoCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DardaniaVideoCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DardaniaVideoCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
