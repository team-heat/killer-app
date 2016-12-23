import { AuthenticationResponseModel } from './../models/authentication-response.model';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { LoginComponent } from './../users/login/login.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { UserStorageService } from './user-storage.service';

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
  loginUser(user: User): Observable<Response> {
    // for testing 
    // Observable.of(user)
    return this.httpService.post('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
  }

  getUserDetails(): Observable<Response> {
    const cookie = this.userStorage.getLoggedUser();
    const token = cookie.auth_token;

    //  { headers: new Headers({ 'Authorization': 'JWT' + token }) }   
    return this.httpService.get('/api/users', { headers: new Headers({ 'Authorization': `JWT ${token}` }) });
  }

  ngOnInit() {
  }
}
