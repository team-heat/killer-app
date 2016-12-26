/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DateProviderService } from './date-provider.service';

describe('DateProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateProviderService]
    });
  });

  it('should ...', inject([DateProviderService], (service: DateProviderService) => {
    expect(service).toBeTruthy();
  }));
});
