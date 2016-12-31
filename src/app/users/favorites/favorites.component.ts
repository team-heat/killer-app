import { Component, OnInit } from '@angular/core';

import { ItemListingService } from '../../services/item-listing.service';
import { UserService } from '../../services/user.service';
import { UserStorageService } from '../../services/user-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  items: any[];
  activeItem: any;
  activeItemIndex: number;

  constructor(
    private userService: UserService,
    private userStorage: UserStorageService) {

    this.items = [];
    this.activeItemIndex = 0;
  }

  ngOnInit() {
    this.userService.getUserDetails()
      .map(response => response.json())
      .subscribe((responseJson) => {
        this.items = responseJson.favorites;
        console.log(this.items);
      }, (err) => {
        console.log(err);
      }, () => {
        if (this.items.length > 0) {
          this.activeItem = this.items[this.activeItemIndex];
        }
      });
  }

  onPrevious() {
    if (this.activeItemIndex > 0) {
      this.activeItemIndex -= 1;
    } else {
      this.activeItemIndex = this.items.length - 1;
    }

    this.activeItem = this.items[this.activeItemIndex];
  }

  onNext() {
    if (this.activeItemIndex < this.items.length - 1) {
      this.activeItemIndex += 1;
    } else {
      this.activeItemIndex = 0;
    }

    this.activeItem = this.items[this.activeItemIndex];
  }
}
