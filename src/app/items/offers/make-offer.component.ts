import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'

import { CarouselListComponent } from './../../carousel-list/carousel-list.component';

import { ItemListing } from './../../models/item-listing.model';
import { Offer } from './../../models/offer.model';

import { ItemListingService } from './../../services/item-listing.service';
import { UserStorageService } from './../../services/user-storage.service';
import { ToastrNotificationOptionsFactoryService } from './../../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from './../../services/toastr-notification.service';

@Component({
    selector: 'make-offer',
    templateUrl: './make-offer.component.html',
    styleUrls: ['./make-offer.component.scss']
})

export class MakeOfferComponent implements OnInit {
    item: ItemListing;
    maxOffer: String | Number;
    offer: Offer;

    constructor(
        private itemListingService: ItemListingService,
        private userStorageService: UserStorageService,
        private route: ActivatedRoute,
        private appRouter: Router,
        private toastrNotification: ToastrNotificationService,
        private toastrOptionsFactory: ToastrNotificationOptionsFactoryService
    ) {

        this.item = {
            _id: null,
            model: null,
            make: null,
            year: null,
            price: null,
            pictures: [],
            offers: [],
            enginePower: null,
            interiorColor: null,
            exteriorColor: null,
            createdOn: null,
            isActive: false,
            owner: null
        };

        this.maxOffer = 'No offers';

        this.offer = {
            offeredPrice: 0,
            id: '0'
        };
    }

    ngOnInit() {

        if (!this.userStorageService.isLogged()) {
            const toastrNotificationOptions = this.toastrOptionsFactory
                .createToastrNotificationOptions('error', 'You must be logged in to continue.', 'Oops');

            this.toastrNotification.enqueueNotification(toastrNotificationOptions);

            this.appRouter.navigateByUrl('login');
        }

        let id;
        let username: String;

        if (this.userStorageService.isLogged()) {
            username = this.userStorageService.getLoggedUser().username;
        }

        this.route.params
            .map((params: Params) => params['id'])
            .subscribe(x => {
                id = x;
                this.offer.id = x;
            });

        this.itemListingService.getSingleItem(id)
            .map(x => x.json())
            .subscribe(x => {
                this.item = x as ItemListing;
                // this.item.offers = [{ offeredPrice: 5 }];

                if (this.getMaxOffer() !== 0) {
                    this.maxOffer = this.getMaxOffer();
                    this.offer.offeredPrice = this.maxOffer;
                }

                if (this.item.owner === username) {
                    const toastrNotificationOptions = this.toastrOptionsFactory
                        .createToastrNotificationOptions('error', 'Make offers for your own car is not allowed!', 'Oops');

                    this.toastrNotification.enqueueNotification(toastrNotificationOptions);

                    this.appRouter.navigateByUrl('/gallery/' + id + '/offers');
                }
            });
    }

    getMaxOffer() {
        let max = 0;

        if (!this.item.offers) {
            return max;
        }

        for (let i of this.item.offers) {
            max = Math.max(max, i.offeredPrice);
        }

        return max;
    }

    onSubmit(): void {
        this.itemListingService.makeOffer(this.offer)
            .map(x => x.json())
            .subscribe((x: any) => {
                this.item = x as ItemListing;
                const toastrNotificationOptions = this.toastrOptionsFactory
                    .createToastrNotificationOptions('success', 'You have submitted the offer successfully.', 'Add Item');

                this.toastrNotification.enqueueNotification(toastrNotificationOptions);
            });
    }
}



