import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeaderPage } from './list-header.page';

describe('ListHeaderPage', () => {
  let component: ListHeaderPage;
  let fixture: ComponentFixture<ListHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
