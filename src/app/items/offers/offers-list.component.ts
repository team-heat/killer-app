import { Component } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { ItemListing } from './../../models/item-listing.model';

import { ItemListingService } from './../../services/item-listing.service';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
    selector: 'offers-list',
    templateUrl: './offers-list.component.html'
})

export class OffersListComponent {
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
            offers: [],
            pictures: [{ imageUrl: null }],
            comments: [],
            enginePower: null,
            interiorColor: null,
            exteriorColor: null,
            createdOn: null,
            isActive: false,
            owner: null
        };

        this.isLogged = false;
        this.isOwner = false;
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

    // WasClicked($event, offer) {
    //     console.log($event);
    //     console.log('-----------------------');
    //     console.log(offer);
    //     console.log('-----------------------');
    //     this.item.offers[0].status = 'canceled';        
    // }
}