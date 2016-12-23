import { AuthenticationResponseModel } from './../models/authentication-response.model';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserStorageService {
  cookieService: CookieService;

  constructor(cookieService: CookieService) {
    this.cookieService = cookieService;
  }

  get loggedUser(): string {
    const loggedUser = this.getLoggedUser();
    if (loggedUser) {
      return loggedUser.username;
    }

    return undefined;
  }

  isLogged(): boolean {
    const loggedUser = this.getLoggedUser();
    return loggedUser ? true : false;
  }

  getLoggedUser(): AuthenticationResponseModel {
    const cookieContent = this.cookieService.getObject('killerapp');
    return cookieContent as AuthenticationResponseModel;
  }

  setLoggedUser(authResponse: AuthenticationResponseModel) {
    const expirationDate = new Date(2050, 12, 12);
    this.cookieService.putObject('killerapp', authResponse, { expires: expirationDate });
  }

  clearLoggedUser(): void {
    this.cookieService.remove('killerapp');
  }
}
