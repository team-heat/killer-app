import { ApiUrlsConfigService } from './api-urls-config.service';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';
import { ItemListing } from '../models/item-listing.model';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

import { Offer } from './../models/offer.model';
import { Comment } from '../models/comment.model';

@Injectable()
export class ItemListingService {

  private galleryApiUrl: string;
  private contentTypeHeaderObject: {} = { 'Content-Type': 'application/json' };

  // GET  -> all items
  // POST -> create item
  // GET  /:id -> item details
  // PUT  /:id -> update listing
  // POST /:id -> submit offer

  constructor(
    private httpRequesterService: HttpRequesterService,
    private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService,
    private apiUrlsConfigService: ApiUrlsConfigService) {

    this.galleryApiUrl = this.apiUrlsConfigService.galleryApiUrl;
  }

  addItem(item: ItemListing): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.galleryApiUrl, item, this.contentTypeHeaderObject);

    return this.httpRequesterService.post(httpRequestOptions);
  }

  getSingleItem(id: number | string): Observable<Response> {
    const url = this.galleryApiUrl + '/' + id;

    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

    return this.httpRequesterService.get(httpRequestOptions);
  }

  getItemsCollection(): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.galleryApiUrl, {}, this.contentTypeHeaderObject);

    return this.httpRequesterService.get(httpRequestOptions);
  }

  makeOffer(offer: Offer) {
    const url = this.galleryApiUrl + '/' + offer.id;

    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(url, offer, this.contentTypeHeaderObject);

    return this.httpRequesterService.post(httpRequestOptions);
  }

  addComment(comment: Comment): Observable<Response> {
    const url = `${this.galleryApiUrl}/${comment.listingId}/comments`;

    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(url, comment, this.contentTypeHeaderObject);

    return this.httpRequesterService.put(httpRequestOptions);
  }

  updateItem(item: ItemListing) {
    const url = this.galleryApiUrl + '/' + item._id;

    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(url, item, this.contentTypeHeaderObject);

    return this.httpRequesterService.put(httpRequestOptions);
  }

  // TODO: 
  removeItem(Item: ItemListing): Observable<Response> {
    return null;
  };
}
