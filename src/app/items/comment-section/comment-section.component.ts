import { Component, OnInit } from '@angular/core';

import { ItemListingService } from '../../services/item-listing.service';
import { ToastrNotificationOptionsFactoryService } from '../../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from '../../services/toastr-notification.service';
import { UserStorageService } from '../../services/user-storage.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  comment: string = '';
  listingComments: Comment[];

  constructor(
    private itemListingService: ItemListingService,
    private userStorageService: UserStorageService,
    private toastrNotification: ToastrNotificationService,
    private toastrOptions: ToastrNotificationOptionsFactoryService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
