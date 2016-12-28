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

  userFavorites: any[];
  constructor(private userService: UserService) {
    this.userFavorites = [];
  }

  ngOnInit() {
    const userData = this.userService
      .getUserDetails()
      .subscribe(resp => this.userFavorites = resp.json().favorites);
  }
}
