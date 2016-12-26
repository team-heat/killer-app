import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { HashingService } from './../../services/hashing.service';
import { Router } from '@angular/router';
import { ToastrNotificationOptionsFactoryService } from './../../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from './../../services/toastr-notification.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from './../../models/user.model';
import { UserFactoryService } from './../../services/user-factory.service';
import { UserService } from './../../services/user.service';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  onGenderSelect(gender: string): void {
    this.user.gender = gender;
  }

  onSubmit(): void {
    const hashedPassword = this.hashingService.generateHash(this.user.password);
    this.user.password = hashedPassword;

    this.isLoading = true;
    this.userService.registerUser(this.user)
      .map((res) => res.json())
      .subscribe((responseUser: any) => {
        const method = 'success';
        const message = 'Successful registration.';
        const heading = 'Yay!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, (err) => {
        this.isLoading = false;

        const method = 'error';
        const message = 'Email or username already in use.';
        const heading = 'Oops!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, () => {
        const that = this;
        setTimeout(function () {
          that.appRouter.navigateByUrl('login');
        }, 1000);
      });
  }
}
