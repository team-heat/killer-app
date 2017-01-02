import { AddListingModule } from './../add-listing/add-listing.module';
import { AddToFavoritesComponent } from './../users/add-to-favorites/add-to-favorites.component';
import { AppModule } from './../app.module';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselListComponent } from './../carousel-list/carousel-list.component';
import { ColorFilterComponent } from './filters/color-filter/color-filter.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommonModule } from '@angular/common';
import { DirectivesExportModule } from './../directives/directives-export.module';
import { ExteriorColorFilterPipe } from './../pipes/exterior-color.pipe';
import { FormsModule } from '@angular/forms';
import { ItemListingService } from './../services/item-listing.service';
import { ItemsCollectionComponent } from './items-collection/items-collection.component';
import { ItemsRouterModule } from './items.routes';
import { MakeFilterComponent } from './filters/make-filter/make-filter.component';
import { MakeFilterPipe } from './../pipes/make-filter.pipe';
import { MakeOfferComponent } from './offers/make-offer.component';
import { MaximumPriceFilterComponent } from './filters/maximum-price-filter/maximum-price-filter.component';
import { MaximumYearFilterComponent } from './filters/maximum-year-filter/maximum-year-filter.component';
import { MinimumPriceFilterComponent } from './filters/minimum-price-filter/minimum-price-filter.component';
import { MinimumYearFilterComponent } from './filters/minimum-year-filter/minimum-year-filter.component';
import { ModelFilterPipe } from './../pipes/model-filter.pipe';
import { Ng2PaginationModule } from 'ng2-pagination';
import { NgModule } from '@angular/core';
import { OffersListComponent } from './offers/offers-list.component';
import { PriceGreaterThenPipe } from './../pipes/price-greater-then.pipe';
import { PriceLessThenPipe } from './../pipes/price-less-then.pipe';
import { Router } from '@angular/router';
import { SingleItemComponent } from './single-item/single-item.component';
import { ToastrNotificationOptionsFactoryService } from '../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from '../services/toastr-notification.service';
import { UsersModule } from '../users/users.module';
import { UserStorageService } from './../services/user-storage.service';
import { YearGreaterThenPipe } from './../pipes/year-greater-then.pipe';
import { YearLessThenPipe } from './../pipes/year-less-then.pipe';

@NgModule({
    imports: [
        Ng2PaginationModule,
        ItemsRouterModule,
        CommonModule,
        FormsModule,
        BrowserModule,
        UsersModule,
        DirectivesExportModule
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
        YearLessThenPipe,
        MakeFilterComponent,
        ColorFilterComponent,
        MinimumYearFilterComponent,
        MaximumYearFilterComponent,
        MinimumPriceFilterComponent,
        MaximumPriceFilterComponent
    ],
    providers: [
        ItemListingService,
        UserStorageService,
        ToastrNotificationOptionsFactoryService,
        ToastrNotificationService
    ]
})

export class ItemsModule { }
