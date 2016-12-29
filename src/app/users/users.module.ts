import { AddToFavoritesComponent } from './add-to-favorites/add-to-favorites.component';
import { CommonModule } from '@angular/common';
import { DateFormatterPipe } from './../pipes/date-formatter.pipe';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FormsModule } from '@angular/forms';
import { HashingService } from './../services/hashing.service';
import { ItemListingService } from '../services/item-listing.service';
import { ListedItemsComponent } from './listed-items/listed-items.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserFactoryService } from './../services/user-factory.service';
import { UserService } from './../services/user.service';
import { UsersComponent } from './users.component';
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
    UsersComponent,
    DateFormatterPipe,
    FavoritesComponent,
    ListedItemsComponent,
    AddToFavoritesComponent
  ],
  providers: [
    UserFactoryService,
    HashingService
  ],
  exports: [
    AddToFavoritesComponent
  ]
})
export class UsersModule { }
