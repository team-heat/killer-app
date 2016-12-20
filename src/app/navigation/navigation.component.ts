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

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.activeItem = 'Home';
  }

  setActiveItem(selectedItem: string) {
    selectedItem = selectedItem || '';
    this.activeItem = selectedItem;
  }
}
