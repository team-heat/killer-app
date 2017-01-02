import { Component, OnInit } from '@angular/core';

import { StatisticService } from './../../services/statistic.service';

@Component({
    selector: 'app-top-sellers',
    templateUrl: './top-sellers.component.html',
    styleUrls:['./../statistics.scss']
})
export class TopSellersComponent implements OnInit {
    list: any[];

    constructor(
        private service: StatisticService
    ) { }

    ngOnInit() {
        this.service.getTopSellers()
            .map(x => x.json())
            .subscribe(x => this.list = x);
    }
}