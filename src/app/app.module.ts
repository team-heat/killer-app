import { Router, RouterModule } from '@angular/router';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

import { AddListingModule } from './add-listing/add-listing.module';
import { AddToFavoritesComponent } from './users/add-to-favorites/add-to-favorites.component';
import { ApiUrlsConfigService } from './services/api-urls-config.service';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselListComponent } from './carousel-list/carousel-list.component';
import { ContactComponent } from './contact/contact.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { DateProviderService } from './services/helpers/date-provider.service';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FooterComponent } from './footer/footer.component';
import { FormDefaultValueDirective } from './directives/form-default-value.directive';
import { FormYearValidationDirective } from './directives/form-year-validation.directive';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HttpModule } from '@angular/http';
import { HttpRequesterOptionsFactoryService } from './services/http-requester-options-factory.service';
import { HttpRequesterService } from './services/http-requester.service';
import { ItemsModule } from './items/items.module';
import { MailService } from './services/mail.service';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationHoverDirective } from './directives/navigation-hover.directive';
import { Ng2PaginationModule } from 'ng2-pagination';
import { NgModule } from '@angular/core';
import { ToastrNotificationOptionsFactoryService } from './services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from './services/toastr-notification.service';
import { ToastrNotificationsHandlerComponent } from './toastr-notifications-handler/toastr-notifications-handler.component';
import { UserService } from './services/user.service';
import { UserStorageService } from './services/user-storage.service';
import { UsersModule } from './users/users.module';
import { StatisticsModule } from './statistics/statistics.module';

/** MOCK */
// import { MockedModule } from './mocked-module/mocked.module'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ToastrNotificationsHandlerComponent,
    NavigationHoverDirective,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    ItemsModule,
    StatisticsModule,
    BrowserModule,
    FormsModule,
    HomeModule,
    HttpModule,
    UsersModule,
    AddListingModule,
    ToastModule,
    Ng2PaginationModule,
    RouterModule.forRoot([
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ], { useHash: true })
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
    AddToFavoritesComponent,
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
