import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetandgreetComponent } from './meetandgreet.component';

describe('MeetandgreetComponent', () => {
  let component: MeetandgreetComponent;
  let fixture: ComponentFixture<MeetandgreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetandgreetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetandgreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
