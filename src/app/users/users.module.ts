import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users.component';
import { UserService } from './../services/user.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    UsersComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
