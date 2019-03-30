import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaterPage } from './later.page';

describe('LaterPage', () => {
  let component: LaterPage;
  let fixture: ComponentFixture<LaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
