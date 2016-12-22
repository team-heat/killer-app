import { AuthenticationResponseModel } from './../models/authentication-response.model';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserStorageService {
  cookieService: CookieService;

  constructor(cookieService: CookieService) {
    this.cookieService = cookieService;
  }

  getLoggedUser(): AuthenticationResponseModel {
    const cookieContent = this.cookieService.getObject('killerapp');
    return cookieContent as AuthenticationResponseModel;
  }

  setLoggedUser(authResponse: AuthenticationResponseModel) {
    this.cookieService.putObject('killerapp', authResponse, { expires: new Date(2017, 12, 30) });
  }

  clearCookie(): void {
    this.cookieService.remove('killerapp');
  }
}
