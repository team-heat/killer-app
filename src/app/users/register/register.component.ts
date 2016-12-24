import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';

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
    private appRouter: Router) {

    this.userService = userService;
    this.user = new User();
    this.isLoading = false;
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isLoading = true;
    this.userService.registerUser(this.user)
      .subscribe((responseUser: any) => {

      }, (err) => {
        this.isLoading = false;
      }, () => {
        this.appRouter.navigateByUrl('login');
      });
  }
}
