import { Component, OnInit } from '@angular/core';

import { StatisticService } from './../../services/statistic.service';

@Component({
    selector: 'app-most-offered-items',
    templateUrl: './most-offered-items.component.html',
})
export class MonstOfferedItemsComponent implements OnInit {
    list: any[];

    constructor(
        private service: StatisticService
    ) { }

    ngOnInit() {
        this.service.getMostOfferedItems()
            .map(x => x.json())
            .subscribe(x => this.list = x);

        this.list.forEach(x => x.count = x.offers.length);
    }
}
