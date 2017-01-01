/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MailServiceService } from './mail-service.service';

describe('Service: MailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailServiceService]
    });
  });

  it('should ...', inject([MailServiceService], (service: MailServiceService) => {
    expect(service).toBeTruthy();
  }));
});