/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CV1Component } from './cv1.component';

describe('CV1Component', () => {
  let component: CV1Component;
  let fixture: ComponentFixture<CV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
