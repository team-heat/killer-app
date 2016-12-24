/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastrNotificationService } from './toastr-notification.service';

describe('ToastrNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastrNotificationService]
    });
  });

  it('should ...', inject([ToastrNotificationService], (service: ToastrNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
