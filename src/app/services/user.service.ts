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

  private contentTypeHeaders = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private httpService: Http,
    private userStorage: UserStorageService,
    private appRouter: Router) { }

  // Create server Router
  // Only Redirect on Successful Login
  // Display message on incorrect login
  registerUser(user: User): Observable<Response> {
    // for testing 
    return this.httpService.put('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
  }

  // Create server Router
  // Only Redirect on Successful Login
  // Display message on incorrect login
  loginUser(user: User): Observable<Response> {
    // for testing 
    // Observable.of(user)
    return this.httpService.post('/api/users', JSON.stringify(user), { headers: this.contentTypeHeaders });
  }

  getUserDetails(token: string): Observable<Response> {
    //  { headers: new Headers({ 'Authorization': 'JWT' + token }) }   
    return this.httpService.get('/api/users', { headers: new Headers({ 'Authorization': `JWT ${token}` }) });
  }

  ngOnInit() {
  }
}
