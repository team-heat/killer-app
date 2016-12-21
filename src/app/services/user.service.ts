import { Http, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from './../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService implements OnInit {
  httpService: Http;
  registerResponse: Observable<Response>;

  private _loggedUser: User;

  constructor(httpService: Http) {
    this.httpService = httpService;

    this._loggedUser = new User();
    this._loggedUser.username = 'Test User';
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

  registerUser(user: User): Observable<User> {
    // for testing 
    return Observable.of(user);
  }

  ngOnInit() {
  }
}
