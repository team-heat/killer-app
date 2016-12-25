import { AuthenticationResponseModel } from './../models/authentication-response.model';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { LoginComponent } from './../users/login/login.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { UserStorageService } from './user-storage.service';

@Injectable()
export class UserService {

  private contentTypeHeaders = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private httpService: Http,
    private userStorage: UserStorageService,
    private appRouter: Router) { }

  registerUser(user: User): Observable<Response> {
    return this.httpService.put('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
  }

  loginUser(user: User): Observable<Response> {
    return this.httpService.post('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
  }

  // Using Cookies 
  // { headers: new Headers({ 'Authorization': `JWT ${token}` }) }
  getUserDetails(token: string): Observable<Response> {
    return this.httpService.get('/api/users');
  }
}
