import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-statistics-list',
    templateUrl: './statistics-list.component.html'

})
export class StatisticsListComponent implements OnInit {

    @Input()
    public mylist: any;

    constructor() { }

    ngOnInit() {
    }

    isThereAnythingInTheList() {
        return !!this.mylist;
    }

    isThereId() {
        return this.mylist[0]._id;
    }
}
