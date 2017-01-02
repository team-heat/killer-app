import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { MockedComponent } from './mocked.component';
import { MockedRouterModule } from './mocked.routes';

// import { CarouselListComponent } from './../carousel-list/carousel-list.component';

import { StatisticsListComponent } from './../statistics/partial/statistics-list.component';
import { StatisticService } from './../services/statistic.service';


@NgModule({
    imports: [
        MockedRouterModule,
        CommonModule,
        FormsModule,
        BrowserModule
    ],
    providers: [
        StatisticService
    ],
    declarations: [
        StatisticsListComponent,
        MockedComponent,
        // CarouselListComponent
    ]
})

export class MockedModule {

}
