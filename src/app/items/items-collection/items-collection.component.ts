import { Component, OnInit } from '@angular/core';

import { ItemListing } from './../../models/item-listing.model';

import { ItemListingService } from './../../services/item-listing.service';

@Component({
  selector: 'app-items-collection',
  templateUrl: './items-collection.component.html',
  styleUrls: ['./items-collection.component.scss']
})

export class ItemsCollectionComponent implements OnInit {

  items: ItemListing[];
  activeItem: ItemListing;
  activeItemIndex: number;

  constructor(private service: ItemListingService) {
    this.items = [];
    this.activeItemIndex = 0;
  }

  onPrevious() {
    if (this.activeItemIndex > 0) {
      this.activeItemIndex -= 1;
    }

    this.activeItem = this.items[this.activeItemIndex];
  }

  onNext() {
    if (this.activeItemIndex < this.items.length - 1) {
      this.activeItemIndex += 1;
    }

    this.activeItem = this.items[this.activeItemIndex];
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
          this.activeItem = this.items[this.activeItemIndex];
        }
      });
  }
}
