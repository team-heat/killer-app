/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CookiesService } from './cookies.service';

describe('CookiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookiesService]
    });
  });

  it('should ...', inject([CookiesService], (service: CookiesService) => {
    expect(service).toBeTruthy();
  }));
});
