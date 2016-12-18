/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployerService } from './employer.service';

describe('EmployerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployerService]
    });
  });

  it('should ...', inject([EmployerService], (service: EmployerService) => {
    expect(service).toBeTruthy();
  }));
});
