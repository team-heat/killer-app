import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrNotificationService } from './../../services/toastr-notification.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from './../../models/user.model';
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
    private appRouter: Router,
    private toastrNotificationService: ToastrNotificationService) {

    this.user = new User();
    this.isLoading = false;
  }

  ngOnInit() {
    if (this.userStorage.isLogged()) {
      this.appRouter.navigateByUrl('profile');
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    this.userService.registerUser(this.user)
      .subscribe((responseUser: any) => {
        this.toastrNotificationService.enqueueNotification({
          method: 'success',
          message: `Successful registration.`,
          heading: 'Yay!',
          delay: 0
        });
      }, (err) => {
        this.isLoading = false;
        this.toastrNotificationService.enqueueNotification({
          method: 'error',
          message: 'Please try again.',
          heading: 'Oops!',
          delay: 0
        });
      }, () => {
        const that = this;
        setTimeout(function () {
          that.appRouter.navigateByUrl('login');
        }, 500);
      });
  }
}
