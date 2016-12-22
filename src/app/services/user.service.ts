import { AuthenticationResponseModel } from './../models/authentication-response.model';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { LoginComponent } from './../users/login/login.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../models/user.model';

@Injectable()
export class UserService implements OnInit {
  httpService: Http;
  cookieService: CookieService;
  appRouter: Router;
  registerResponse: Observable<Response>;

  private _loggedUser: User;
  private contentTypeHeaders = new Headers({ 'Content-Type': 'application/json' });

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
    //  { headers: new Headers({ 'Authorization': token }) }
    // for testing 
    this.httpService.put('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders })
      .subscribe((responseUser: any) => {
        console.log(responseUser);
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
    this.httpService.post('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders })
      .map(res => res.json())
      .subscribe(response => {
        console.log(response);
      }, (err) => {
        console.log(err);
      }, () => {
        this.appRouter.navigateByUrl('profile');
      });
  }

  ngOnInit() {
  }
}
