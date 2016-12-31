import 'rxjs/add/operator/map';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrNotificationOptionsFactoryService } from './../../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from './../../services/toastr-notification.service';
import { UserService } from './../../services/user.service';
import { UserStorageService } from './../../services/user-storage.service';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {

  private _itemIdToFavorite: string;
  private itemIsFavorite: boolean;

  constructor(
    private userService: UserService,
    private userStorage: UserStorageService,
    private toastrNotificationService: ToastrNotificationService,
    private toastrNotificationOptionsFactoryService: ToastrNotificationOptionsFactoryService, ) { }

  get itemIdToFavorite(): string {
    return this._itemIdToFavorite;
  }

  @Input() set itemIdToFavorite(value: string) {
    this._itemIdToFavorite = value;
    const savedUserFavorites = this.userStorage.getLoggedUserFavorites();
    this.itemIsFavorite = savedUserFavorites.some(item => item === this.itemIdToFavorite);
  }

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
        this.userStorage.setLoggedUserFavorites(response.favorites);
        this.itemIsFavorite = true;
      }, (err) => {
        const method = 'error';
        const message = 'Item already exists in your favorites list.';
        const heading = 'Oops!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, () => { });
  }

  removeFromFavorites() {
    return this.userService.removeItemToUserFavorites(this.itemIdToFavorite)
      .map(response => response.json())
      .subscribe((response) => {
        const method = 'success';
        const message = `Removed an item from favorites.`;
        const heading = 'Yay!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
        this.userStorage.setLoggedUserFavorites(response.favorites);
        this.itemIsFavorite = false;
      }, (err) => {
        const method = 'error';
        const message = 'Item does not exist in your favorites list.';
        const heading = 'Oops!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, () => { });
  }
}
