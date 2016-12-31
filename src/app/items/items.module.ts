import { AppModule } from './../app.module';
import { AddToFavoritesComponent } from './../users/add-to-favorites/add-to-favorites.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselListComponent } from './../carousel-list/carousel-list.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemListingService } from './../services/item-listing.service';
import { ItemsCollectionComponent } from './items-collection/items-collection.component';
import { ItemsRouterModule } from './items.routes';
import { MakeOfferComponent } from './offers/make-offer.component';
import { NgModule } from '@angular/core';
import { OffersListComponent } from './offers/offers-list.component';
import { Router } from '@angular/router';
import { SingleItemComponent } from './single-item/single-item.component';
import { ToastrNotificationOptionsFactoryService } from '../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from '../services/toastr-notification.service';
import { UserStorageService } from './../services/user-storage.service';
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
        CommentSectionComponent,
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

export class ItemsModule { }
