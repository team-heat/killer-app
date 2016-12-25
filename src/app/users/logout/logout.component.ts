import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrNotificationOptionsFactoryService } from './../../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from './../../services/toastr-notification.service';
import { UserService } from './../../services/user.service';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private appRouter: Router,
    private userService: UserService,
    private userStorage: UserStorageService,
    private toastrNotificationService: ToastrNotificationService,
    private toastrNotificationOptionsFactoryService: ToastrNotificationOptionsFactoryService) { }

  ngOnInit() {
    this.userService.logoutUser()
      .subscribe((response) => {
        const method = 'success';
        const message = `Good bye ${this.userStorage.loggedUser}`;
        const heading = 'Aww.';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        this.userStorage.clearLoggedUser();
      }, (err) => {
        console.log(err);

        const method = 'error';
        const message = 'Please try again.';
        const heading = 'Oops!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, () => {
        this.appRouter.navigateByUrl('/');
      });
  }
}
