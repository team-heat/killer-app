import { AddToFavoritesComponent } from './users/add-to-favorites/add-to-favorites.component';
import { Router, RouterModule } from '@angular/router';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

import { AddListingModule } from './add-listing/add-listing.module';
import { ApiUrlsConfigService } from './services/api-urls-config.service';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { DateProviderService } from './services/helpers/date-provider.service';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FormDefaultValueDirective } from './directives/form-default-value.directive';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HttpModule } from '@angular/http';
import { HttpRequesterOptionsFactoryService } from './services/http-requester-options-factory.service';
import { HttpRequesterService } from './services/http-requester.service';
import { ItemsModule } from './items/items.module';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationHoverDirective } from './directives/navigation-hover.directive';
import { NgModule } from '@angular/core';
import { ToastrNotificationOptionsFactoryService } from './services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from './services/toastr-notification.service';
import { ToastrNotificationsHandlerComponent } from './toastr-notifications-handler/toastr-notifications-handler.component';
import { UserService } from './services/user.service';
import { UserStorageService } from './services/user-storage.service';
import { UsersModule } from './users/users.module';
import { FormYearValidationDirective } from './directives/form-year-validation.directive';

/** MOCK */
// import { MockedModule } from './mocked-module/mocked.module'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ToastrNotificationsHandlerComponent,
    NavigationHoverDirective
  ],
  imports: [
    // MockedModule,
    ItemsModule,
    BrowserModule,
    FormsModule,
    HomeModule,
    HttpModule,
    UsersModule,
    AddListingModule,
    ToastModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ],
      { useHash: true })
  ],
  providers: [
    ApiUrlsConfigService,
    CookieService,
    DateProviderService,
    HttpRequesterOptionsFactoryService,
    HttpRequesterService,
    ToastrNotificationOptionsFactoryService,
    ToastrNotificationService,
    UserService,
    UserStorageService,
    AddToFavoritesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
