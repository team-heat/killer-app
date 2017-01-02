import { Component, OnInit } from '@angular/core';

import { StatisticService } from './../../services/statistic.service';

@Component({
    selector: 'app-top-active-users',
    templateUrl: './top-active-users.component.html',
    styleUrls:['./../statistics.scss']
})
export class TopActiveUsersComponent implements OnInit {
    list: any[];

    constructor(
        private service: StatisticService
    ) { }

    ngOnInit() {
        this.service.getTopActiveUsers()
            .map(x => x.json())
            .subscribe(x => this.list = x);
    }
}