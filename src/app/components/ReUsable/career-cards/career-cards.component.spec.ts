import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCardsComponent } from './career-cards.component';

describe('CareerCardsComponent', () => {
  let component: CareerCardsComponent;
  let fixture: ComponentFixture<CareerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
