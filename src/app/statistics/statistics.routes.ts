import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonstCommentedItemsComponent } from './item-statistics/most-commented-items.component';
import { MonstExpensiveItemsComponent } from './item-statistics/most-expensive-items.component';
import { MonstOfferedItemsComponent } from './item-statistics/most-offered-items.component';
import { MostSelledMakesComponent } from './item-statistics/most-salled-makes.component';
import { TopActiveUsersComponent } from './user-statistics/top-active-users.component';
import { TopBuyersComponent } from './user-statistics/top-buyers.component';
import { TopSellersComponent } from './user-statistics/top-sellers.component';
import { StatisticsMainComponent } from './statistics-main.component';

let routes = [
    { path: 'statistics/items/mostExpensiveItems', component: MonstExpensiveItemsComponent },
    { path: 'statistics/items/mostSalledMakes', component: MostSelledMakesComponent },
    { path: 'statistics/items/mostOfferedItems', component: MonstOfferedItemsComponent },
    { path: 'statistics/items/mostCommentedItems', component: MonstCommentedItemsComponent },
    { path: 'statistics/users/topSellers', component: TopSellersComponent },
    { path: 'statistics/users/topBuyers', component: TopBuyersComponent },
    { path: 'statistics/users/topActiveUsers', component: TopActiveUsersComponent },
    { path: 'statistics', component: StatisticsMainComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatisticsRouterModule { }