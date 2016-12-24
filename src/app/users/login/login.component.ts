import 'rxjs/add/operator/map';
import { AuthenticationResponseModel } from './../../models/authentication-response.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  isLoading: boolean;

  constructor(
    private userService: UserService,
    private userStorage: UserStorageService,
    private appRouter: Router) {

    this.user = new User();
    this.isLoading = false;
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isLoading = true;
    this.userService.loginUser(this.user)
      .map((res) => res.json())
      .subscribe(response => {
        if (!response.username || !response.auth_token) {
          throw new Error('Incorrect response');
        }
        this.userStorage.setLoggedUser(response as AuthenticationResponseModel);
      }, (err) => {
        this.isLoading = false;
      }, () => {
        this.appRouter.navigateByUrl('profile');
      });
  }
}
