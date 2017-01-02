import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-statistics-list-item-link',
    templateUrl: './statistics-list-item-link.component.html',
    encapsulation: ViewEncapsulation.None
})
export class StatisticsListItemLinkComponent implements OnInit {

    private linkPrefix: String = '/gallery/';

    @Input()
    public item: any;

    constructor() { }

    ngOnInit() { }

}