import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritPage } from './crit.page';

describe('CritPage', () => {
  let component: CritPage;
  let fixture: ComponentFixture<CritPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
