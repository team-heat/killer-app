import { Component, OnInit } from '@angular/core';

import { ItemListing } from './../../models/item-listing.model';

import { ItemListingService } from './../../services/item-listing.service';

@Component({
  selector: 'items-collection',
  templateUrl: './items-collection.component.html',
  styleUrls: ['./items-collection.component.scss']
})

export class ItemsCollectionComponent implements OnInit {

  items: ItemListing[];
  activeItem: ItemListing;

  constructor(private service: ItemListingService) {
    this.items = [];
  }

  ngOnInit() {
    this.service.getItemsCollection()
      .map(response => response.json())
      .subscribe((response) => {
        this.items = response;
      }, (err) => {
        console.log(err);
      }, () => {
        if (this.items.length > 0) {
          this.activeItem = this.items[1];
        }
      });
  }
}
