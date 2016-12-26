/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';

describe('HttpRequesterOptionsFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequesterOptionsFactoryService]
    });
  });

  it('should ...', inject([HttpRequesterOptionsFactoryService], (service: HttpRequesterOptionsFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
