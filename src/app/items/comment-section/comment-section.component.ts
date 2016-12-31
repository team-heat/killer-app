import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ItemListing } from '../../models/item-listing.model';
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
    private route: ActivatedRoute,
    private itemListingService: ItemListingService,
    private userStorageService: UserStorageService,
    private toastrNotification: ToastrNotificationService,
    private toastrOptions: ToastrNotificationOptionsFactoryService
  ) { }

  ngOnInit() {
    let listingId;

    this.route.params
      .map((params: Params) => params['id'])
      .subscribe(id => listingId = id);

    this.itemListingService.getSingleItem(listingId)
      .map(response => response.json())
      .subscribe((listing: ItemListing) => this.listingComments = listing.comments);
  }

  onSubmit(): void {
    // this.listingComments.push(this.comment);
  }

}
