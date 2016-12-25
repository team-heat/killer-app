/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HashingService } from './hashing.service';

describe('HashingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HashingService]
    });
  });

  it('should ...', inject([HashingService], (service: HashingService) => {
    expect(service).toBeTruthy();
  }));
});
