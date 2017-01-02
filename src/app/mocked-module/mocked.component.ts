import { Component, OnInit } from '@angular/core';
import { CarouselListComponent } from './../carousel-list/carousel-list.component';

import { StatisticService } from './../services/statistic.service';

@Component({
    selector: 'app-mock',
    templateUrl: './mocked.component.html',
})
export class MockedComponent implements OnInit {

    pictures = [
        'http://ghulmil.com/wp-content/uploads/superb-amazing-lexus-car-wallpaper.jpg',
        'https://s-media-cache-ak0.pinimg.com/originals/1a/71/5f/1a715ff490253e5d5fd6bb825329d3d9.jpg',
        'https://s-media-cache-ak0.pinimg.com/originals/01/21/53/012153f878f71bd62f7e7c7464689b5b.jpg',
        'http://www.hd-wallpapersdownload.com/script/bulk-upload/amazing-car-photos.jpg'
    ];

    list: any[];

    constructor(
        private service: StatisticService
    ) { }

    ngOnInit() {
        this.service.getMostCommentedItems()
            .map(x => x.json())
            .subscribe(x => this.list = x);
    }
}
