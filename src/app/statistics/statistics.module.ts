import { NgModule } from '@angular/core';

import { StatisticsRouterModule } from './statistics.routes';

import { StatisticService } from './../services/statistic.service';

import { StatisticsListComponent } from './partial/statistics-list.component';
import { StatisticsListItemLinkComponent } from './partial/statistics-list-item-link.component';
import { StatisticsListItemComponent } from './partial/statistics-list-item.component';

import { StatisticsMainComponent } from './statistics-main.component';

@NgModule({
    imports: [
        StatisticsRouterModule
    ],
    declarations: [
        StatisticsListComponent,
        StatisticsMainComponent,
        StatisticsListItemComponent,
        StatisticsListItemLinkComponent
    ],
    providers: [
        StatisticService
    ]
})

export class StatisticsModule { }