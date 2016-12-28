import { Component, DoCheck, OnInit } from '@angular/core';

import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { UserStorageService } from './../services/user-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, DoCheck {

  activeItem: string;
  hasLoggedUser: boolean;
  loggedUserName: string;

  constructor(private userStorage: UserStorageService) { }

  ngOnInit() {
    this.activeItem = 'Home';
    this.hasLoggedUser = this.userStorage.isLogged();
    this.loggedUserName = this.userStorage.loggedUser;
  }

  ngDoCheck() {
    this.hasLoggedUser = this.userStorage.isLogged();
    this.loggedUserName = this.userStorage.loggedUser;
  }

  setActiveItem(selectedItem: string) {
    selectedItem = selectedItem || '';
    this.activeItem = selectedItem;
  }
}
