import { NgModule } from '@angular/core';

import { StatisticsRouterModule } from './statistics.routes';

import { StatisticService } from './../services/statistic.service';

import { StatisticsListComponent } from './partial/statistics-list.component';
import { StatisticsListItemLinkComponent } from './partial/statistics-list-item-link.component';
import { StatisticsListItemComponent } from './partial/statistics-list-item.component';

import { StatisticsMainComponent } from './statistics-main.component';

import { MonstCommentedItemsComponent } from './item-statistics/most-commented-items.component';
import { MonstExpensiveItemsComponent } from './item-statistics/most-expensive-items.component';
import { MonstOfferedItemsComponent } from './item-statistics/most-offered-items.component';
import { MonstSelledMakesComponent } from './item-statistics/most-salled-makes.component';
import { TopActiveUsersComponent } from './user-statistics/top-active-users.component';
import { TopBuyersComponent } from './user-statistics/top-buyers.component';
import { TopSellersComponent } from './user-statistics/top-sellers.component';

@NgModule({
    imports: [
        StatisticsRouterModule
    ],
    declarations: [
        StatisticsListComponent,
        StatisticsMainComponent,
        StatisticsListItemComponent,
        StatisticsListItemLinkComponent,
        MonstCommentedItemsComponent,
        MonstExpensiveItemsComponent,
        MonstOfferedItemsComponent,
        MonstSelledMakesComponent,
        TopActiveUsersComponent,
        TopBuyersComponent,
        TopSellersComponent
    ],
    providers: [
        StatisticService
    ]
})

export class StatisticsModule { }