import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userService: UserService;
  user: User;
  isLoading: boolean;

  images: string[];

  constructor(userService: UserService) {
    this.userService = userService;
    this.user = new User();
    this.isLoading = false;

    this.images = [
      'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
      'https://c1.staticflickr.com/7/6107/6381966401_032df5fe1e_b.jpg',
      'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg'
    ];
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isLoading = true;
    this.userService.loginUser(this.user);
  }
}
