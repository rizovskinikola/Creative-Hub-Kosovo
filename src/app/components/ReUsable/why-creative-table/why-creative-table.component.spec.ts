import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCreativeTableComponent } from './why-creative-table.component';

describe('WhyCreativeTableComponent', () => {
  let component: WhyCreativeTableComponent;
  let fixture: ComponentFixture<WhyCreativeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyCreativeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCreativeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
