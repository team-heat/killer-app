/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiUrlsConfigService } from './api-urls-config.service';

describe('ApiUrlsConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiUrlsConfigService]
    });
  });

  it('should ...', inject([ApiUrlsConfigService], (service: ApiUrlsConfigService) => {
    expect(service).toBeTruthy();
  }));
});
