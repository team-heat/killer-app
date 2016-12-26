import { AuthenticationResponseModel } from './../models/authentication-response.model';
import { Http, Response, Headers } from '@angular/http';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { Injectable, OnInit } from '@angular/core';
import { LoginComponent } from './../users/login/login.component';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';

@Injectable()
export class UserService {

  private userApiUrl: string = '/api/users';
  private userLogoutApiUrl: string = '/api/logout';
  private contentTypeHeaderObject: {} = { 'Content-Type': 'application/json' };
  // private contentTypeHeaders = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private httpService: Http,
    private httpRequester: HttpRequesterService,
    private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService) { }

  registerUser(user: User): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);

    return this.httpRequester.put(httpRequestOptions);

    // return this.httpService.put('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
  }

  loginUser(user: User): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);

    return this.httpRequester.post(httpRequestOptions);
    // return this.httpService.post('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
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
