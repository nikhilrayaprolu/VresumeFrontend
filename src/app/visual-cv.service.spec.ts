/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VisualCvService } from './visual-cv.service';

describe('VisualCvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisualCvService]
    });
  });

  it('should ...', inject([VisualCvService], (service: VisualCvService) => {
    expect(service).toBeTruthy();
  }));
});
