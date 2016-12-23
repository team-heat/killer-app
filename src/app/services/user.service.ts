import { AuthenticationResponseModel } from './../models/authentication-response.model';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { LoginComponent } from './../users/login/login.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { UserStorageService } from './user-storage.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService implements OnInit {
  httpService: Http;
  appRouter: Router;
  userStorage: UserStorageService;
  registerResponse: Observable<Response>;

  private contentTypeHeaders = new Headers({ 'Content-Type': 'application/json' });

  constructor(httpService: Http, userStorage: UserStorageService, appRouter: Router) {
    this.httpService = httpService;
    this.userStorage = userStorage;
    this.appRouter = appRouter;
  }

  get loggedUser(): string {
    const loggedUser = this.userStorage.getLoggedUser();
    if (loggedUser) {
      return loggedUser.username;
    }

    return undefined;
  }

  isLogged(): boolean {
    const loggedUser = this.userStorage.getLoggedUser();
    return loggedUser ? true : false;
  }

  // Create server Router
  // Only Redirect on Successful Login
  // Display message on incorrect login
  registerUser(user: User): void {
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
    // for testing 
    // Observable.of(user)
    this.httpService.post('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders })
      .map((res) => res.json())
      .subscribe(response => {
        if (!response.username || !response.auth_token) {
          throw new Error('Incorrect response');
        }

        this.userStorage.setLoggedUser(response as AuthenticationResponseModel);
      }, (err) => {
        console.log(err);
      }, () => {
        this.appRouter.navigateByUrl('profile');
      });
  }

  getUserDetails(): Observable<Response> {
    const cookie = this.userStorage.getLoggedUser();
    const token = cookie.auth_token;

    //  { headers: new Headers({ 'Authorization': 'JWT' + token }) }   
    return this.httpService.get('/api/users', { headers: new Headers({ 'Authorization': `JWT ${token}` }) })
      .map(res => res.json());
  }

  ngOnInit() {
  }
}
