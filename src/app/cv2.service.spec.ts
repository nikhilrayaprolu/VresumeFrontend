/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CV2Service } from './cv2.service';

describe('CV2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CV2Service]
    });
  });

  it('should ...', inject([CV2Service], (service: CV2Service) => {
    expect(service).toBeTruthy();
  }));
});
