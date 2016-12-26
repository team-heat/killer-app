import { AddToFavoritesComponent } from './add-to-favorites/add-to-favorites.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ListedItemsComponent } from './listed-items/listed-items.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'facebook-login', component: ProfileComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'favorites/:id', component: AddToFavoritesComponent },
  { path: 'listed-items', component: ListedItemsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRouterModule { }
