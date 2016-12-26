import { AuthenticationResponseModel } from './../models/authentication-response.model';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { LoginComponent } from './../users/login/login.component';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';

@Injectable()
export class UserService {

  private contentTypeHeaders = new Headers({ 'Content-Type': 'application/json' });

  constructor(private httpService: Http) { }

  registerUser(user: User): Observable<Response> {
    return this.httpService.put('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
  }

  loginUser(user: User): Observable<Response> {
    return this.httpService.post('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
  }

  logoutUser(): Observable<Response> {
    return this.httpService.get('/api/logout');
  }

  // Using Cookies 
  // { headers: new Headers({ 'Authorization': `JWT ${token}` }) }
  getUserDetails(): Observable<Response> {
    return this.httpService.get('/api/users');
  }
}
