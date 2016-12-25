import { DateFormatterPipe } from './../../pipes/date-formatter.pipe';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { UserFactoryService } from './../../services/user-factory.service';
import { UserService } from './../../services/user.service';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private userStorage: UserStorageService,
    private appRouter: Router,
    private userFactoryService: UserFactoryService) {

    this.user = this.userFactoryService.createUser();
  }

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
        response.createdOn = new Date(response.createdOn);
        this.user = response;
      });
  }
}
