import { Http, Response } from '@angular/http';
import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../models/user.model';

@Injectable()
export class UserService implements OnInit {
  @Output() onRegister: EventEmitter<string> = new EventEmitter<string>();

  httpService: Http;
  appRouter: Router;
  registerResponse: Observable<Response>;

  private _loggedUser: User;

  // TO BE DELETED
  users: User[];

  constructor(httpService: Http, appRouter: Router) {
    this.httpService = httpService;
    this.appRouter = appRouter;

    this.users = [];
  }

  get loggedUser() {
    return this._loggedUser;
  }

  isLogged(): boolean {
    if (this._loggedUser) {
      return true;
    }

    return false;
  }

  registerUser(user: User): void {
    // for testing 
    Observable.of(user)
      .subscribe((responseUser) => {
        console.log(responseUser);
        const newUser = new User();
        newUser.username = responseUser.username;
        newUser.password = responseUser.password;

        this._loggedUser = newUser;
        this.users.push(newUser);
        console.log(this.users);
      }, (err) => {
        console.log(err);
      }, () => {
        this.appRouter.navigateByUrl('profile');
        this.onRegister.emit('registerd');
      });
  }

  ngOnInit() {
  }
}
