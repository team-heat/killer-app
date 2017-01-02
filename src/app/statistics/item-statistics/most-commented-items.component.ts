import { Component, OnInit } from '@angular/core';

import { StatisticService } from './../../services/statistic.service';

@Component({
    selector: 'app-most-commented-items',
    templateUrl: './most-commented-items.component.html',
})
export class MonstCommentedItemsComponent implements OnInit {
    list: any[];

    constructor(
        private service: StatisticService
    ) { }

    ngOnInit() {
        this.service.getMostCommentedItems()
            .map(x => x.json())
            .subscribe(x => this.list = x
                .map(y => {
                    y.count = y.comments.length;
                    return y;
                }));
    }
}
