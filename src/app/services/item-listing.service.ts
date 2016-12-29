import { ApiUrlsConfigService } from './api-urls-config.service';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';
import { ItemListing } from '../models/item-listing.model';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

import { Offer } from './../models/offer.model';

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

  // TODO: 
  removeItem(Item: ItemListing): Observable<Response> {
    return null;
  };
}
