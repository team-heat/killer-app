import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

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
        let id = +this.route.params['id'];
        this.service.getSingleItem(id)
            .subscribe(x => this.item = x);
    }
}