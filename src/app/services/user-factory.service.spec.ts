/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserFactoryService } from './user-factory.service';

describe('UserFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFactoryService]
    });
  });

  it('should ...', inject([UserFactoryService], (service: UserFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
