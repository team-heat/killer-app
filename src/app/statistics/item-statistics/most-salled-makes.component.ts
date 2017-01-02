import { Component, OnInit } from '@angular/core';

import { StatisticService } from './../../services/statistic.service';

@Component({
    selector: 'app-most-selled-makes',
    templateUrl: './most-most-selled-makes.component.html',
})
export class MonstSelledMakesComponent implements OnInit {
    list: any[];

    constructor(
        private service: StatisticService
    ) { }

    ngOnInit() {
        this.service.getMostCommentedItems()
            .map(x => x.json())
            .subscribe(x => this.list = x);
    }
}
