/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CV1Service } from './cv1.service';

describe('CV1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CV1Service]
    });
  });

  it('should ...', inject([CV1Service], (service: CV1Service) => {
    expect(service).toBeTruthy();
  }));
});
