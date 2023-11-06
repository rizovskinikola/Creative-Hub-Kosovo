import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingHiredComponent } from './getting-hired.component';

describe('GettingHiredComponent', () => {
  let component: GettingHiredComponent;
  let fixture: ComponentFixture<GettingHiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingHiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingHiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
