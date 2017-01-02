import { Component, OnInit } from '@angular/core';

import { StatisticService } from './../../services/statistic.service';

@Component({
    selector: 'app-most-selled-makes',
    templateUrl: './most-salled-makes.component.html',
    styleUrls:['./../statistics.scss']
})
export class MostSelledMakesComponent implements OnInit {
    list: any[];

    constructor(
        private service: StatisticService
    ) { }

    ngOnInit() {
        this.service.getMostSalledMakes()
            .map(x => x.json())
            .subscribe(x => this.list = x);
    }
}
