import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  userService: UserService;
  activeItem: string;
  hasLoggedUser: boolean;
  loggedUser: User;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.activeItem = 'Home';
    this.hasLoggedUser = this.userService.isLogged();
    this.loggedUser = this.userService.loggedUser;
  }

  setActiveItem(selectedItem: string) {
    selectedItem = selectedItem || '';
    this.activeItem = selectedItem;
  }
}
