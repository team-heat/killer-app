import { AddToFavoritesComponent } from './../users/add-to-favorites/add-to-favorites.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleItemComponent } from './single-item/single-item.component';
import { ItemsCollectionComponent } from './items-collection/items-collection.component';
import { OffersListComponent } from './offers/offers-list.component';
import { MakeOfferComponent } from './offers/make-offer.component';

let routes = [
    { path: 'gallery/:id/offers', component: OffersListComponent },
    { path: 'gallery/:id/offer', component: MakeOfferComponent },
    { path: 'gallery/:id', component: SingleItemComponent },
    { path: 'gallery', component: ItemsCollectionComponent },
    { path: 'gallery/add/:id', component: AddToFavoritesComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemsRouterModule { }