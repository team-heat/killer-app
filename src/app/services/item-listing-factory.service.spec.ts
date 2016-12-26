/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemListingFactoryService } from './item-listing-factory.service';

describe('Service: ItemListingFactory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemListingFactoryService]
    });
  });

  it('should ...', inject([ItemListingFactoryService], (service: ItemListingFactoryService) => {
    expect(service).toBeTruthy();
  }));
});