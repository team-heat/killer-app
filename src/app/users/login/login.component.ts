import 'rxjs/add/operator/map';
import { AuthenticationResponseModel } from './../../models/authentication-response.model';
import { Component, OnInit } from '@angular/core';
import { HashingService } from './../../services/hashing.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ToastrNotificationOptionsFactoryService } from './../../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from './../../services/toastr-notification.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from './../../models/user.model';
import { UserFactoryService } from './../../services/user-factory.service';
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
    private userFactoryService: UserFactoryService,
    private appRouter: Router,
    private toastrNotificationService: ToastrNotificationService,
    private toastrNotificationOptionsFactoryService: ToastrNotificationOptionsFactoryService,
    private hashingService: HashingService) {

    this.user = this.userFactoryService.createUser();
    this.isLoading = false;
  }

  ngOnInit() {
    if (this.userStorage.isLogged()) {
      const method = 'error';
      const message = 'User is already logged in.';
      const heading = 'Oops!';
      const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
        .createToastrNotificationOptions(method, message, heading);

      this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);

      this.appRouter.navigateByUrl('profile');
    }
  }

  onSubmit(): void {
    const hashedPassword = this.hashingService.generateHash(this.user.password);
    this.user.password = hashedPassword;

    this.isLoading = true;
    this.userService.loginUser(this.user)
      .map((res) => res.json())
      .subscribe(response => {
        if (!response.username || !response.auth_token) {
          throw new Error('Incorrect response');
        }

        this.userStorage.setLoggedUser(response as AuthenticationResponseModel);

        const method = 'success';
        const message = `Welcome back ${this.userStorage.loggedUser}`;
        const heading = 'Yay!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, (err) => {
        this.isLoading = false;

        const method = 'error';
        const message = 'Incorrect username or password, please try again.';
        const heading = 'Oops!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, () => {
        const that = this;
        setTimeout(function () {
          that.appRouter.navigateByUrl('profile');
        }, 1000);
      });
  }
}
