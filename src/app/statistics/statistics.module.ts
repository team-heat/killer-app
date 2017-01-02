import { NgModule } from '@angular/core';

import { StatisticsRouterModule } from './statistics.routes';

import { StatisticService } from './../services/statistic.service';

import { StatisticsListComponent } from './partial/statistics-list.component';

import { StatisticsMainComponent } from './statistics-main.component';

@NgModule({
    imports: [
        StatisticsRouterModule
    ],
    declarations: [
        StatisticsListComponent,
        StatisticsMainComponent
    ],
    providers: [
        StatisticService
    ]
})

export class StatisticsModule { }