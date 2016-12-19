/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisualCvComponent } from './visual-cv.component';

describe('VisualCvComponent', () => {
  let component: VisualCvComponent;
  let fixture: ComponentFixture<VisualCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
