import { Component, EventEmitter } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { ItemListing } from './../../models/item-listing.model';
import { Offer } from './../../models/offer.model';

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
    loggedUser: String;

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

        if (this.userStorageService.isLogged()) {
            this.isLogged = true;
            this.loggedUser = this.userStorageService.getLoggedUser().username;
        }

        this.route.params
            .map((params: Params) => params['id'])
            .subscribe(x => id = x);

        this.itemListingService.getSingleItem(id)
            .map(x => x.json())
            .subscribe(x => {
                this.item = x as ItemListing;
                this.isOwner = this.item.owner === this.loggedUser;
            });
    }

    acceptOffer($event: EventEmitter<any>, offer: Offer) {
        // TODO accepting
    }


    rejectOffer($event: EventEmitter<any>, offer: Offer) {
        this.changeOfferStatus($event, offer, 'rejected', (str: String) => this.loggedUser === this.item.owner);
    }

    cencelOffer($event: EventEmitter<any>, offer: Offer) {
        this.changeOfferStatus($event, offer, 'canceled', (str: String) => str === this.loggedUser);
    }

    changeOfferStatus($event: EventEmitter<any>, offer: Offer, status: String, allowed: (str: String) => Boolean) {
        for (let o of this.item.offers) {
            if (allowed(o.username) &&
                o.offeredPrice === offer.offeredPrice &&
                o.status === 'active') {
                o.status = status;
                this.itemListingService.updateItem(this.item)
                    .map(x => x.json())
                    .subscribe(x => this.item = x as ItemListing);
            }
        }
    }
}