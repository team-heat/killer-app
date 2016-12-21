import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users.component';
import { UserService } from './../services/user.service';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    FacebookLoginComponent,
    ProfileComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
