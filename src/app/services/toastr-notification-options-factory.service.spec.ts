/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToasterNotificationOptionsFactoryService } from './toaster-notification-options-factory.service';

describe('ToasterNotificationOptionsFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterNotificationOptionsFactoryService]
    });
  });

  it('should ...', inject([ToasterNotificationOptionsFactoryService], (service: ToasterNotificationOptionsFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
