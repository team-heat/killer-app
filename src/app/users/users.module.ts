import { UsersRouterModuler } from './users.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users.component';
import { UserService } from './../services/user.service';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    UsersRouterModuler
  ],
  declarations: [
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    FacebookLoginComponent,
    ProfileComponent,
    LogoutComponent
  ]
})
export class UsersModule { }
