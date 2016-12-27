import { Component, OnInit } from '@angular/core';

import { ItemListing } from './../../models/item-listing.model';

import { ItemListingService } from './../../services/item-listing.service';

@Component({
    selector: 'items-collection',
    templateUrl: './items-collection.component.html'
})

export class ItemsCollectionComponent implements OnInit {
    items: ItemListing[];

    constructor(private service: ItemListingService) {
    }

    ngOnInit() {
        let temp;

        this.service.getItemsCollection()
            .map(x => x.json())
            .subscribe(x => temp = x);

        temp.ForEach(x => this.items.push(x as ItemListing));
    }
}