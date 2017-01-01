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

import { ExteriorColorFilterPipe } from './../pipes/exterior-color.pipe';
import { MakeFilterPipe } from './../pipes/make-filter.pipe';
import { ModelFilterPipe } from './../pipes/model-filter.pipe';
import { PriceGreaterThenPipe } from './../pipes/price-greater-then.pipe';
import { PriceLessThenPipe } from './../pipes/price-less-then.pipe';
import { YearGreaterThenPipe } from './../pipes/year-greater-then.pipe';
import { YearLessThenPipe } from './../pipes/year-less-then.pipe';


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
        MakeOfferComponent,
        ExteriorColorFilterPipe,
        MakeFilterPipe,
        ModelFilterPipe,
        PriceGreaterThenPipe,
        PriceLessThenPipe,
        YearGreaterThenPipe,
        YearLessThenPipe
    ],
    providers: [
        ItemListingService,
        UserStorageService,
        ToastrNotificationOptionsFactoryService,
        ToastrNotificationService
    ]
})

export class ItemsModule { }
