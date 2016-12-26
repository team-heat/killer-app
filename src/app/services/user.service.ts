import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { Injectable, OnInit } from '@angular/core';
import { LoginComponent } from './../users/login/login.component';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import { User } from './../models/user.model';

@Injectable()
export class UserService {

  private userApiUrl: string = '/api/users';
  private userLogoutApiUrl: string = '/api/logout';
  private contentTypeHeaderObject: {} = { 'Content-Type': 'application/json' };

  constructor(
    private httpRequester: HttpRequesterService,
    private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService) { }

  registerUser(user: User): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);

    return this.httpRequester.put(httpRequestOptions);
  }

  loginUser(user: User): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);

    return this.httpRequester.post(httpRequestOptions);
  }

  logoutUser(): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory.createHttpRequesterOptions(this.userLogoutApiUrl);
    return this.httpRequester.get(httpRequestOptions);
  }

  // Using Cookies 
  // { headers: new Headers({ 'Authorization': `JWT ${token}` }) }
  getUserDetails(): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory.createHttpRequesterOptions(this.userApiUrl);
    return this.httpRequester.get(httpRequestOptions);
  }
}
