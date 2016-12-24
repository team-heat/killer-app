import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;
  isLoading: boolean;

  constructor(
    private userService: UserService,
    private userStorage: UserStorageService,
    private appRouter: Router,
    private toastr: ToastsManager,
    private vRef: ViewContainerRef) {

    this.user = new User();
    this.isLoading = false;
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    if (this.userStorage.isLogged()) {
      this.appRouter.navigateByUrl('profile');
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    this.userService.registerUser(this.user)
      .subscribe((responseUser: any) => {

      }, (err) => {
        this.isLoading = false;
        this.toastr.error('Please try again.', 'Error');
      }, () => {
        this.appRouter.navigateByUrl('login');
      });
  }
}
