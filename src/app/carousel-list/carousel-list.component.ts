import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel-list.component.html',
    styles: [`.carousel-inner .item img {min-width:100%;}`]

})
export class CarouselListComponent implements OnInit {

    @Input()
    public mylist: any[];

    constructor() { }

    ngOnInit() { }

}
