import 'rxjs/add/operator/map';
import { AuthenticationResponseModel } from './../../models/authentication-response.model';
import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  isLoading: boolean;

  constructor(
    private userService: UserService,
    private userStorage: UserStorageService,
    private appRouter: Router,
    private toastr: ToastsManager,
    private vRef: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vRef);
    this.user = new User();
    this.isLoading = false;
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isLoading = true;
    this.userService.loginUser(this.user)
      .map((res) => res.json())
      .subscribe(response => {
        if (!response.username || !response.auth_token) {
          throw new Error('Incorrect response');
        }
        this.userStorage.setLoggedUser(response as AuthenticationResponseModel);
      }, (err) => {
        this.isLoading = false;
        this.toastr.error('Incorrect username or password, please try again.');
      }, () => {
        this.appRouter.navigateByUrl('profile');
      });
  }
}
