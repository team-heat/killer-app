import { ApiUrlsConfigService } from './api-urls-config.service';
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
  private logoutApiUrl: string = '/api/logout';
  private favoritesApiUrl: string = '/api/favorites';
  private contentTypeHeaderObject: {} = { 'Content-Type': 'application/json' };

  constructor(
    private httpRequesterService: HttpRequesterService,
    private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService,
    private apiUrlsConfigService: ApiUrlsConfigService) {

    this.userApiUrl = this.apiUrlsConfigService.usersApiUrl;
    this.logoutApiUrl = this.apiUrlsConfigService.logoutApiUrl;
    this.favoritesApiUrl = this.apiUrlsConfigService.favoritesApiUrl;
  }

  registerUser(user: User): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);

    return this.httpRequesterService.put(httpRequestOptions);
  }

  loginUser(user: User): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);

    return this.httpRequesterService.post(httpRequestOptions);
  }

  logoutUser(): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory.createHttpRequesterOptions(this.logoutApiUrl);
    return this.httpRequesterService.get(httpRequestOptions);
  }

  // Using Cookies 
  // { headers: new Headers({ 'Authorization': `JWT ${token}` }) }
  getUserDetails(): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory.createHttpRequesterOptions(this.userApiUrl);
    return this.httpRequesterService.get(httpRequestOptions);
  }

  addItemToUserFavorites(id: string): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.favoritesApiUrl, id, this.contentTypeHeaderObject);

    return this.httpRequesterService.post(httpRequestOptions);
  }
}
