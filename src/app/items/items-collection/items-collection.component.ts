import { Component, OnInit } from '@angular/core';

import { ItemListing } from './../../models/item-listing.model';

import { ItemListingService } from './../../services/item-listing.service';

@Component({
    selector: 'items-collection',
    templateUrl: './items-collection.component.html',
      styleUrls: ['./items-collection.component.scss']
})

export class ItemsCollectionComponent implements OnInit {
    items: any[];

    constructor(private service: ItemListingService) {
    }

    ngOnInit() {

        this.service.getItemsCollection()
            .map(x => x.json())
            .subscribe(x => this.items = x);
    }
}