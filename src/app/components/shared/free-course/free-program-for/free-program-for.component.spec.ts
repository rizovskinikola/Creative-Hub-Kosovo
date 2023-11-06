import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeProgramForComponent } from './free-program-for.component';

describe('FreeProgramForComponent', () => {
  let component: FreeProgramForComponent;
  let fixture: ComponentFixture<FreeProgramForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeProgramForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeProgramForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
