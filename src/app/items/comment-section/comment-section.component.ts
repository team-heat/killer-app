import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Comment } from '../../models/comment.model';
import { ItemListing } from '../../models/item-listing.model';
import { ItemListingService } from '../../services/item-listing.service';
import { Response } from '@angular/http';
import { ToastrNotificationOptionsFactoryService } from '../../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from '../../services/toastr-notification.service';
import { UserStorageService } from '../../services/user-storage.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  comment: Comment;
  listingComments: Comment[];

  private minContentLength: number = 10;
  private maxContentLength: number = 150;

  constructor(
    private route: ActivatedRoute,
    private itemListingService: ItemListingService,
    private userStorageService: UserStorageService,
    private toastrNotification: ToastrNotificationService,
    private toastrOptions: ToastrNotificationOptionsFactoryService) {

    this.comment = {
      listingId: '',
      username: '',
      content: ''
    };
  }

  ngOnInit() {

    let listingId;

    this.route.params
      .map((params: Params) => params['id'])
      .subscribe(id => listingId = id);

    this.itemListingService.getSingleItem(listingId)
      .map(response => response.json())
      .subscribe((listing: ItemListing) => {
        this.comment.listingId = listing._id;
        this.listingComments = listing.comments;
      });
  }

  onSubmit(): void {

    this.comment.username = this.userStorageService.loggedUser;
    let isContentLengthInRange: boolean =
      this.comment.content.length < this.minContentLength ||
      this.comment.content.length > this.maxContentLength;

    if (!this.comment.username) {
      let toastrOptions = this.toastrOptions
        .createToastrNotificationOptions('error', 'You must be logged in.');
      this.toastrNotification.enqueueNotification(toastrOptions);
    } else if (isContentLengthInRange) {
      let toastrOptions = this.toastrOptions
        .createToastrNotificationOptions('error', `Content length must be between ${this.minContentLength} and ${this.maxContentLength}`);
      this.toastrNotification.enqueueNotification(toastrOptions);
    } else {
      this.itemListingService.addComment(this.comment)
        .subscribe((response: Response) => {
          let toastrOptions = this.toastrOptions
            .createToastrNotificationOptions('success', 'Comment submitted successfully.');
          this.toastrNotification.enqueueNotification(toastrOptions);
        }, err => {
          let toastrOptions = this.toastrOptions
            .createToastrNotificationOptions('error', 'You must be logged in.');
          this.toastrNotification.enqueueNotification(toastrOptions);
        }, () => this.comment.content = '');
    }
  }
}
