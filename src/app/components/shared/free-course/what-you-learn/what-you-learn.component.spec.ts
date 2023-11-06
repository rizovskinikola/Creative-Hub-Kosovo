import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYouLearnComponent } from './what-you-learn.component';

describe('WhatYouLearnComponent', () => {
  let component: WhatYouLearnComponent;
  let fixture: ComponentFixture<WhatYouLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatYouLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatYouLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
