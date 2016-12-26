import { Injectable } from '@angular/core';
import { ItemListing } from '../models/item-listing.model';

@Injectable()
export class ItemListingFactoryService {

  constructor() { }

  createItemListing(
    
  ): ItemListing {
    const createdOn = new Date().toUTCString();
    const isActive = true;

    // const itemListing = new ItemListing();

    return null;
  }
}
