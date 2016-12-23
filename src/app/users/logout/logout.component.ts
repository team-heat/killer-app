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
    private userStorage: UserStorageService) { }

  ngOnInit() {
    this.userStorage.clearLoggedUser();
    this.appRouter.navigateByUrl('/');
  }
}
