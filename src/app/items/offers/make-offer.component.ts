import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { CarouselListComponent } from './../../carousel-list/carousel-list.component';

import { ItemListing } from './../../models/item-listing.model';

import { ItemListingService } from './../../services/item-listing.service';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
    selector: 'make-offer',
    templateUrl: './make-offer.component.html'
})

export class MakeOfferComponent implements OnInit {
    item: ItemListing;
    isLogged: Boolean;
    isOwner: Boolean;

    constructor(
        private itemListingService: ItemListingService,
        private userStorageService: UserStorageService,
        private route: ActivatedRoute) {

        this.item = {
            _id: null,
            model: null,
            make: null,
            year: null,
            price: null,
            pictures: [],
            offers:[],
            enginePower: null,
            interiorColor: null,
            exteriorColor: null,
            createdOn: null,
            isActive: false,
            owner: null
        };
    }

    ngOnInit() {
        let id;
        let username: String;

        if (this.userStorageService.isLogged()) {
            this.isLogged = true;
            username = this.userStorageService.getLoggedUser().username;
        }

        this.route.params
            .map((params: Params) => params['id'])
            .subscribe(x => id = x);

        this.itemListingService.getSingleItem(id)
            .map(x => x.json())
            .subscribe(x => {
                this.item = x as ItemListing;
                this.isOwner = this.item.owner === username;
            });
    }
}



