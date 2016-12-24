import { Component, OnInit } from '@angular/core';

import { ItemsService } from './../../services/item.service';

@Component({
    selector: 'items-collection',
    templateUrl: './items-collection.component.html'
})

export class ItemsCollectionComponent implements OnInit {
    service: ItemsService;
    items: any;

    constructor(service: ItemsService) {
        this.service = service;
    }

    ngOnInit() {
        this.items = [];

        for (let i = 0; i < 5; i += 1) {
            this.items.push(this.mockedItem);
        }

        // this.service.getCollectionOfItems()
        //     .subscribe(x => this.items = x);
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