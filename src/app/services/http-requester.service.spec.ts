/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpRequesterService } from './http-requests.service';

describe('HttpRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequesterService]
    });
  });

  it('should ...', inject([HttpRequesterService], (service: HttpRequesterService) => {
    expect(service).toBeTruthy();
  }));
});
