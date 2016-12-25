import { CommonModule } from '@angular/common';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { FormsModule } from '@angular/forms';
import { HashingService } from './../services/hashing.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserFactoryService } from './../services/user-factory.service';
import { UsersComponent } from './users.component';
import { UserService } from './../services/user.service';
import { UsersRouterModule } from './users.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRouterModule
  ],
  declarations: [
    FacebookLoginComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    RegisterComponent,
    UsersComponent
  ],
  providers: [
    UserFactoryService,
    HashingService
  ]
})
export class UsersModule { }
