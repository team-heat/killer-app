import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselListComponent } from './../carousel-list/carousel-list.component';

import { SingleItemComponent } from './single-item/single-item.component';
import { ItemsCollectionComponent } from './items-collection/items-collection.component';
import { OffersListComponent } from './offers/offers-list.component';
import { MakeOfferComponent } from './offers/make-offer.component';
import { ItemsRouterModule } from './items.routes';

import { ItemListingService } from './../services/item-listing.service';
import { UserStorageService } from './../services/user-storage.service';
import { ToastrNotificationOptionsFactoryService } from '../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from '../services/toastr-notification.service';
import { AddToFavoritesComponent } from '../users/add-to-favorites/add-to-favorites.component';
import { UsersModule } from '../users/users.module';

@NgModule({
    imports: [
        ItemsRouterModule,
        CommonModule,
        FormsModule,
        BrowserModule,
        UsersModule
    ],
    declarations: [
        SingleItemComponent,
        ItemsCollectionComponent,
        CarouselListComponent,
        OffersListComponent,
        MakeOfferComponent
    ],
    providers: [
        ItemListingService,
        UserStorageService,
        ToastrNotificationOptionsFactoryService,
        ToastrNotificationService
    ]
})

export class ItemsModule {

}