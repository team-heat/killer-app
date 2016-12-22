import { UsersModule } from './users/users.module';
import { UserService } from './services/user.service';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ItemsModule } from './items/items.module';

/** MOCK */
// import { MockedModule } from './mocked-module/mocked.module'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    // MockedModule,
    ItemsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    UsersModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ])
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
