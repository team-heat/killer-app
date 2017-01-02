import { Component, OnInit } from '@angular/core';

import { StatisticService } from './../../services/statistic.service';

@Component({
    selector: 'app-top-buyers',
    templateUrl: './top-buyers.component.html',
    styleUrls:['./../statistics.scss']
})
export class TopBuyersComponent implements OnInit {
    list: any[];

    constructor(
        private service: StatisticService
    ) { }

    ngOnInit() {
        this.service.getTopBuyers()
            .map(x => x.json())
            .subscribe(x => this.list = x);
    }
}