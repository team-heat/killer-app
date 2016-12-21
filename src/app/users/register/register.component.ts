import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userService: UserService;
  appRouter: Router;
  user: User;

  constructor(userService: UserService, appRouter: Router) {
    this.userService = userService;
    this.appRouter = appRouter;
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.user);
    const obeservable = this.userService.registerUser(this.user);
    obeservable.subscribe((user) => {
      console.log(user);
      this.user = user;
    }, (err) => {
      console.log(err);
    }, () => {
      this.appRouter.navigateByUrl('profile');
    });
  }
}
