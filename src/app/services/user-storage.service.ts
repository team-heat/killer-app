import { AuthenticationResponseModel } from './../models/authentication-response.model';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserStorageService {

  private cookieName; string;

  constructor(private cookieService: CookieService) {
    this.cookieName = 'com.herokuapps.killerapp';
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
    const cookieContent = this.cookieService.getObject(this.cookieName);
    return cookieContent as AuthenticationResponseModel;
  }

  setLoggedUser(authResponse: AuthenticationResponseModel) {
    const expirationDate = new Date(2050, 12, 12);
    this.cookieService.putObject(this.cookieName, authResponse, { expires: expirationDate });
  }

  clearLoggedUser(): void {
    this.cookieService.remove(this.cookieName);
  }
}
