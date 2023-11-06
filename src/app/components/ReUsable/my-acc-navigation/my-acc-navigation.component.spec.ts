import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccNavigationComponent } from './my-acc-navigation.component';

describe('MyAccNavigationComponent', () => {
  let component: MyAccNavigationComponent;
  let fixture: ComponentFixture<MyAccNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
