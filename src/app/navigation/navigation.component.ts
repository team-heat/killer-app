import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    activeItem: string;

    constructor() { }

    ngOnInit() {
        this.activeItem = 'Home';
    }

    setActiveItem(selectedItem: string) {
        selectedItem = selectedItem || '';
        this.activeItem = selectedItem;
    }
}
