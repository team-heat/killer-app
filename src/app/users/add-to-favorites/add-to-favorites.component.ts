import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ApiUrlsConfigService } from './../../services/api-urls-config.service';
import { Observable } from 'rxjs/Observable';
import { ToastrNotificationOptionsFactoryService } from './../../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from './../../services/toastr-notification.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
    private toastrNotificationService: ToastrNotificationService,
    private toastrNotificationOptionsFactoryService: ToastrNotificationOptionsFactoryService, ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        const itemListingId = params['id'];
        return this.userService.addItemToUserFavorites(itemListingId);
      })
      .map(response => response.json())
      .subscribe((response) => {
        const method = 'success';
        const message = `Added a new item to favorites.`;
        const heading = 'Yay!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);

        this.location.back();
      }, (err) => {
        const method = 'error';
        const message = 'Item already exists in your favorites list.';
        const heading = 'Oops!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);

        this.location.back();
      }, () => { });
  }
}
