import { LoginComponent } from './../users/login/login.component';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class UserService implements OnInit {
  httpService: Http;
  cookieService: CookieService;
  appRouter: Router;
  registerResponse: Observable<Response>;

  private _loggedUser: User;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  // TO BE DELETED
  users: User[];


  constructor(httpService: Http, cookieService: CookieService, appRouter: Router) {
    this.httpService = httpService;
    this.cookieService = cookieService;
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

  // Create server Router
  // Only Redirect on Successful Login
  // Display message on incorrect login
  registerUser(user: User): void {
    const token = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjE1MCwidXNlcm5hbWUiOiIxMjMiLCJwYXNzd29yZCI6IjEyMyIsImlhdCI6MTQ4MjQzNTg2OX0.sJu5AMxPQ_nncUbP2L2TYkh1nWrMlFATxuX6e2ZHUwk';
    // for testing 
    this.httpService.put('/api/users', JSON.stringify(user), { headers: new Headers({ 'Authorization': token }) })
      .subscribe((responseUser: any) => {
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
      });
  }

  // Create server Router
  // Only Redirect on Successful Login
  // Display message on incorrect login
  loginUser(user: User): void {
    console.log(user);
    // for testing 
    // Observable.of(user)
    this.httpService.post('/api/users', JSON.stringify(user), { headers: this.headers })
      .subscribe((responseUser: any) => {
        console.log(responseUser);
        // const newUser = new User();
        // newUser.username = responseUser.username;
        // newUser.password = responseUser.password;

        // this.cookieService.put('user', JSON.stringify(newUser));
        // this._loggedUser = newUser;
        // this.users.push(newUser);
      }, (err) => {
        console.log(err);
      }, () => {
        this.appRouter.navigateByUrl('profile');
      });
  }

  ngOnInit() {
  }
}
