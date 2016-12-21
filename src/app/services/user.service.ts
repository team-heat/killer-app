import { Http, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../models/user.model';

@Injectable()
export class UserService implements OnInit {
  httpService: Http;
  appRouter: Router;
  registerResponse: Observable<Response>;

  private _loggedUser: User;

  constructor(httpService: Http, appRouter: Router) {
    this.httpService = httpService;
    this.appRouter = appRouter;

    // TO BE DELETED
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

  registerUser(user: User): void {
    // for testing 
    const observe = Observable.of(user)
      .subscribe((responseUser) => {
        console.log(responseUser);
        this._loggedUser = responseUser;
      }, (err) => {
        console.log(err);
      }, () => {
        this.appRouter.navigateByUrl('profile');
        observe.unsubscribe();
      });
  }

  ngOnInit() {
  }
}
