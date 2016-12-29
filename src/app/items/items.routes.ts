import { SingleItemComponent } from './single-item/single-item.component';
import { ItemsCollectionComponent } from './items-collection/items-collection.component'
import { OffersListComponent } from './offers/offers-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

let routes = [
    { path: 'gallery/:id/offers', component: OffersListComponent },
    { path: 'gallery/:id', component: SingleItemComponent },
    { path: 'gallery', component: ItemsCollectionComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemsRouterModule { }