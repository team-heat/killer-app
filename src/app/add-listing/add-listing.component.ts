import { Component, OnInit } from '@angular/core';

import { FileUploadResponse } from './../models/file-upload-response.model';
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

  itemListing: ItemListing;
  resetState: boolean;

  constructor(
    private appRouter: Router,
    private userStorage: UserStorageService,
    private itemListingService: ItemListingService,
    private itemListingFactory: ItemListingFactoryService,
    private toastrNotification: ToastrNotificationService,
    private toastrOptionsFactory: ToastrNotificationOptionsFactoryService) {

    this.itemListing = this.itemListingFactory.createItemListing();
    this.resetState = false;
  }

  ngOnInit() {
    if (!this.userStorage.isLogged()) {
      const toastrNotificationOptions = this.toastrOptionsFactory
        .createToastrNotificationOptions('error', 'You must be logged in to continue.', 'Oops');

      this.toastrNotification.enqueueNotification(toastrNotificationOptions);

      this.appRouter.navigateByUrl('login');
    }
  }

  updateYearProp(value: number): void {
    if (!value) {
      this.itemListing.year = undefined;
      return;
    }

    this.itemListing.year = +value;
  }

  updatePriceProp(value: number): void {
    if (!value) {
      this.itemListing.price = undefined;
      return;
    }

    this.itemListing.price = +value;
  }

  onSubmit(): void {
    this.itemListingService.addItem(this.itemListing)
      .subscribe((response: any) => {
        const toastrNotificationOptions = this.toastrOptionsFactory
          .createToastrNotificationOptions('success', 'You have submitted the item successfully.', 'Add Item');

        this.toastrNotification.enqueueNotification(toastrNotificationOptions);
        this.resetState = true;
      });
  }

  onFileUpload(uploadedFiles: FileUploadResponse[]): void {
    this.itemListing.pictures = uploadedFiles;
  }
}
