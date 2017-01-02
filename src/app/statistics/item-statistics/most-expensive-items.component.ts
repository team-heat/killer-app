import { Component, OnInit } from '@angular/core';

import { StatisticService } from './../../services/statistic.service';

@Component({
    selector: 'app-most-expensive-items',
    templateUrl: './most-expensive-items.component.html',
})
export class MonstExpensiveItemsComponent implements OnInit {
    list: any[];

    constructor(
        private service: StatisticService
    ) { }

    ngOnInit() {
        this.service.getMostExpensiveItems()
            .map(x => x.json())
            .subscribe(x => this.list = x
                .map(y => {
                    y.count = y.price;
                    return y;
                }));
    }
}
