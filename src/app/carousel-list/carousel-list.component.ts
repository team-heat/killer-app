import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel-list.component.html',
    styleUrls: [`./carousel-list.component.scss`]

})
export class CarouselListComponent implements OnInit {

    @Input()
    public mylist: any[];

    constructor() { }

    ngOnInit() { }

}
