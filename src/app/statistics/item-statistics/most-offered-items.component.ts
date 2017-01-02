import { Component, OnInit } from '@angular/core';

import { StatisticService } from './../../services/statistic.service';

@Component({
    selector: 'app-most-offered-items',
    templateUrl: './most-offered-items.component.html',
    styleUrls:['./../statistics.scss']
})
export class MonstOfferedItemsComponent implements OnInit {
    list: any[];

    constructor(
        private service: StatisticService
    ) { }

    ngOnInit() {
        this.service.getMostOfferedItems()
            .map(x => x.json())
            .subscribe(x => this.list = x
                .map(y => {
                    y.count = y.offers.length;
                    return y;
                }));
    }
}
