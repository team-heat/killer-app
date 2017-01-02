import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-statistics-list-item',
    templateUrl: './statistics-list-item.component.html'

})
export class StatisticsListItemComponent implements OnInit {

    @Input()
    public item: any;

    constructor() { }

    ngOnInit() { }

}