import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from './../models/user.model';

@Injectable()
export class UserService implements OnInit {
  httpService: Http;
  loggedUser: User;

  constructor(httpService: Http) {
    this.httpService = httpService;
  }

  isLogged(): boolean {
    if (this.loggedUser) {
      return true;
    }

    return false;
  }

  ngOnInit() {

  }
}
