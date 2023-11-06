import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPopUpComponent } from './graphic-pop-up.component';

describe('GraphicPopUpComponent', () => {
  let component: GraphicPopUpComponent;
  let fixture: ComponentFixture<GraphicPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
