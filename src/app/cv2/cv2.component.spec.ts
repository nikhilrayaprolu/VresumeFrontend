/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CV2Component } from './cv2.component';

describe('CV2Component', () => {
  let component: CV2Component;
  let fixture: ComponentFixture<CV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
