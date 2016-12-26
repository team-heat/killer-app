import { Component, OnInit } from '@angular/core';

import { ItemListing } from '../models/item-listing.model';
import { ItemListingFactoryService } from '../services/item-listing-factory.service';
import { ItemListingService } from '../services/item-listing.service';
import { Router } from '@angular/router';
import { ToastrNotificationOptionsFactoryService } from '../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from '../services/toastr-notification.service';
import { UserStorageService } from '../services/user-storage.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {

  private itemListing: ItemListing;

  constructor(
    private appRouter: Router,
    private userStorage: UserStorageService,
    private itemListingService: ItemListingService,
    private itemListingFactory: ItemListingFactoryService,
    private toastrNotification: ToastrNotificationService,
    private toastrOptionsFactory: ToastrNotificationOptionsFactoryService) {

    this.itemListing = this.itemListingFactory.createItemListing();
  }

  ngOnInit() {
    if (!this.userStorage.isLogged()) {
      const toastrNotificationOptions = this.toastrOptionsFactory
        .createToastrNotificationOptions('error', 'You must be logged in to continue.', 'Oops');

      this.toastrNotification.enqueueNotification(toastrNotificationOptions);

      this.appRouter.navigateByUrl('login');
    }
  }

  onsubmit(): void {
    this.itemListingService.addItem(this.itemListing)
      .subscribe((response: any) => {
        const 
      });
  }
}
