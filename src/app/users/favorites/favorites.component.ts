import { Component, OnInit } from '@angular/core';
import { ItemListingService } from '../../services/item-listing.service';
import { Router } from '@angular/router';
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
    private appRouter: Router,
    private userService: UserService,
    private userStorage: UserStorageService) {

    this.items = [];
    this.activeItemIndex = 0;
  }

  ngOnInit() {
    if (!this.userStorage.isLogged()) {
      this.appRouter.navigateByUrl('login');
      return;
    }

    this.userService.getUserDetails()
      .map(response => response.json())
      .subscribe((responseJson) => {
        this.items = responseJson.favorites;
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
