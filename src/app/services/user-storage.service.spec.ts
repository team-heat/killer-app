/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserStorageService } from './user-storage.service';

describe('UserStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStorageService]
    });
  });

  it('should ...', inject([UserStorageService], (service: UserStorageService) => {
    expect(service).toBeTruthy();
  }));
});
