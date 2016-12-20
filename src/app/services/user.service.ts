import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from './../models/user.model';

@Injectable()
export class UserService implements OnInit {
  httpService: Http;

  private _loggedUser: User;

  constructor(httpService: Http) {
    this.httpService = httpService;
  }

  get loggedUser() {
    return this._loggedUser;
  }

  isLogged(): boolean {
    // if (this._loggedUser) {
    //   return true;
    // }

    // return false;
    return true;
  }

  ngOnInit() {

  }
}
