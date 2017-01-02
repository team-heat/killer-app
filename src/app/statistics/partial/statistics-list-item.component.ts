import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-statistics-list-item',
    templateUrl: './statistics-list-item.component.html',
    encapsulation: ViewEncapsulation.None
})
export class StatisticsListItemComponent implements OnInit {

    @Input()
    public item: any;

    constructor() { }

    ngOnInit() { }

}
