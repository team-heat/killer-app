import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselListComponent } from './../carousel-list/carousel-list.component';

import { SingleItemComponent } from './single-item/single-item.component';
import { ItemsCollectionComponent } from './items-collection/items-collection.component';
import { OffersListComponent } from './offers/offers-list.component';
import { ItemsRouterModule } from './items.routes';

import { ItemListingService } from './../services/item-listing.service';
import { UserStorageService } from './../services/user-storage.service';

@NgModule({
    imports: [
        ItemsRouterModule,
        CommonModule,
        FormsModule,
        BrowserModule
    ],
    declarations: [
        SingleItemComponent,
        ItemsCollectionComponent,
        CarouselListComponent,
        OffersListComponent
    ],
    providers: [
        ItemListingService,
        UserStorageService
    ]
})

export class ItemsModule {

}