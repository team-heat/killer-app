import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { CarouselListComponent } from './../../carousel-list/carousel-list.component';

import { ItemListing } from './../../models/item-listing.model';

import { ItemListingService } from './../../services/item-listing.service';

@Component({
    selector: 'single-item',
    templateUrl: './single-item.component.html'
})

export class SingleItemComponent implements OnInit {
    item: ItemListing;

    constructor(
        private service: ItemListingService,
        private route: ActivatedRoute) {

        this.item = {
            _id: null,
            model: null,
            make: null,
            year: null,
            price: null,
            enginePower: null,
            interiorColor: null,
            exteriorColor: null,
            createdOn: null,
            isActive: null
        };
    }

    ngOnInit() {
        let id;

        this.route.params
            .map((params: Params) => params['id'])
            .subscribe(x => id = x);

        this.service.getSingleItem(id)
            .map(x => x.json())
            .subscribe(x => this.item = x as ItemListing);
    }
}



