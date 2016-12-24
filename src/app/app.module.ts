import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HttpModule } from '@angular/http';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { UsersModule } from './users/users.module';
import { UserStorageService } from './services/user-storage.service';

/** MOCK */
// import { MockedModule } from './mocked-module/mocked.module'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    // MockedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    UsersModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ],
      { useHash: true })
  ],
  providers: [
    UserService,
    UserStorageService,
    CookieService,
    UserStorageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
