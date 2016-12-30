import 'rxjs/add/operator/map';

import { Component, OnInit, Input } from '@angular/core';
import { ToastrNotificationOptionsFactoryService } from './../../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from './../../services/toastr-notification.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {

  @Input() itemIdToFavorite: string;

  constructor(
    private userService: UserService,
    private toastrNotificationService: ToastrNotificationService,
    private toastrNotificationOptionsFactoryService: ToastrNotificationOptionsFactoryService, ) { }

  ngOnInit() { }

  addToFavorites() {
    return this.userService.addItemToUserFavorites(this.itemIdToFavorite)
      .map(response => response.json())
      .subscribe((response) => {
        const method = 'success';
        const message = `Added a new item to favorites.`;
        const heading = 'Yay!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, (err) => {
        const method = 'error';
        const message = 'Item already exists in your favorites list.';
        const heading = 'Oops!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, () => { });
  }
}
