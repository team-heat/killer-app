import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersloginComponent } from './userslogin/userslogin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersComponent, UsersloginComponent, LoginComponent, RegisterComponent]
})
export class UsersModule { }
