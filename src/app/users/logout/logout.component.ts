import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private userStorage: UserStorageService) { }

  ngOnInit() {
    this.userService.logoutUser()
      .subscribe(
      // success
      (response) => {
        this.userStorage.clearLoggedUser();
      },
      // error
      (err) => {
        console.log(err);
      },
      // complete
      () => {
        this.appRouter.navigateByUrl('/');
      });
  }
}
