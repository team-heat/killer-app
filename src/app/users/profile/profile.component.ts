import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private userStorage: UserStorageService,
    private appRouter: Router) { }

  ngOnInit() {
    if (!this.userStorage.isLogged()) {
      this.appRouter.navigateByUrl('login');
      return;
    }

    const cookie = this.userStorage.getLoggedUser();
    const token = cookie.auth_token;

    this.userService.getUserDetails(token)
      .map(res => res.json())
      .subscribe(response => {
        console.log(response);
      });
  }
}
