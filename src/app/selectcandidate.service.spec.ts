/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectcandidateService } from './selectcandidate.service';

describe('SelectcandidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectcandidateService]
    });
  });

  it('should ...', inject([SelectcandidateService], (service: SelectcandidateService) => {
    expect(service).toBeTruthy();
  }));
});
