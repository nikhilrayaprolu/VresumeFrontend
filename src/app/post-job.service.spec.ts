/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostJobService } from './post-job.service';

describe('PostJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostJobService]
    });
  });

  it('should ...', inject([PostJobService], (service: PostJobService) => {
    expect(service).toBeTruthy();
  }));
});
