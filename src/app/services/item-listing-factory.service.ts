import { Injectable } from '@angular/core';
import { ItemListing } from '../models/item-listing.model';

@Injectable()
export class ItemListingFactoryService {

  createItemListing(
    make = '',
    model = '',
    year = 0,
    price = 0,
    enginePower = 0,
    exteriorColor = '',
    interiorColor = ''): ItemListing {

    const itemListing = new ItemListing();
    itemListing.make = make;
    itemListing.model = model;
    itemListing.year = year;
    itemListing.price = price;
    itemListing.enginePower = enginePower;
    itemListing.exteriorColor = exteriorColor;
    itemListing.interiorColor = interiorColor;
    itemListing.createdOn = new Date();
    itemListing.isActive = true;

    return itemListing;
  }
}
