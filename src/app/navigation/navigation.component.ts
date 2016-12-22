import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, DoCheck {
  userService: UserService;
  activeItem: string;
  hasLoggedUser: boolean;
  loggedUserName: string;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.activeItem = 'Home';
    this.hasLoggedUser = this.userService.isLogged();
    this.loggedUserName = this.userService.loggedUser;
  }

  ngDoCheck() {
    this.hasLoggedUser = this.userService.isLogged();
    this.loggedUserName = this.userService.loggedUser;
  }

  setActiveItem(selectedItem: string) {
    selectedItem = selectedItem || '';
    this.activeItem = selectedItem;
  }
}
