import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  appRouter: Router;
  userStorage: UserStorageService;

  constructor(appRouter: Router, userStorage: UserStorageService) {
    this.appRouter = appRouter;
    this.userStorage = userStorage;
  }

  ngOnInit() {
    this.userStorage.clearLoggedUser();
    this.appRouter.navigateByUrl('/');
  }
}
