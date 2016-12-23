import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { CarouselListComponent } from './../../carousel-list/carousel-list.component';

import { ItemsService } from './../../services/item.service';

@Component({
    selector: 'single-item',
    templateUrl: './single-item.component.html'
})

export class SingleItemComponent implements OnInit {
    service: ItemsService;
    route: ActivatedRoute;
    item: any;
    // = {
    //     pictures: [1, 2, 3, 4]
    // };

    constructor(service: ItemsService, route: ActivatedRoute) {
        this.service = service;
        this.route = route;
    }

    ngOnInit() {

        let id;

        this.route.params
            .map((params: Params) => params['id'])
            .subscribe(x => id = x)

        this.item = this.mockedItem;

        // this.service.getSingleItem(id)
        //     .subscribe(x => this.item = x);
    }

    private mockedItem = {
        id: 13,
        brand: 'Lexus',
        model: 'LC 500h',
        year: "2018",
        pictures: [
            'http://www.lexus-int.com/models/LC/images/LC-500h.jpg',
            'https://i.ytimg.com/vi/7v9QpFaQHjE/maxresdefault.jpg'
            ],
        price: 100000
    }
}



