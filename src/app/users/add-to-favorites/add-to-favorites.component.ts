import 'rxjs/add/operator/switchMap';
import { ApiUrlsConfigService } from './../../services/api-urls-config.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    private userService: UserService,
    private toastrNotificationService: ToastrNotificationService,
    private toastrNotificationOptionsFactoryService: ToastrNotificationOptionsFactoryService, ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        const itemListingId = params['id'];
        return this.userService.addItemToUserFavorites(itemListingId);
      })
      .subscribe((response) => {
        const method = 'success';
        const message = `Added a new item to favorites.`;
        const heading = 'Yay!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, (err) => {
        const method = 'error';
        const message = 'User already has this item in favorites.';
        const heading = 'Oops!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, () => {
        this.router.navigateByUrl('favorites');
      });
  }
}
