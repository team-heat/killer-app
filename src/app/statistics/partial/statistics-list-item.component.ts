import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-statistic-list-item',
    templateUrl: './statistic-list-item.component.html'

})
export class StatisticsListItemComponent implements OnInit {

    @Input()
    public item: any;

    constructor() { }

    ngOnInit() { }

}