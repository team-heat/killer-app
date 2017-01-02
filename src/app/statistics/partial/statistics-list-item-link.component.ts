import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-statistics-list-item-link',
    templateUrl: './statistics-list-item-link.component.html'

})
export class StatisticsListItemLinkComponent implements OnInit {

    private linkPrefix: String = '/gallery/';

    @Input()
    public item: any;

    constructor() { }

    ngOnInit() { }

}