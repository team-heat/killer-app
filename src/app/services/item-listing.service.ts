import { ApiUrlsConfigService } from './api-urls-config.service';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';
import { ItemListing } from '../models/item-listing.model';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

@Injectable()
export class ItemListingService {

  private galleryApiUrl: string;
  private contentTypeHeaderObject: {} = { 'Content-Type': 'application/json' };

  constructor(
    private httpRequesterService: HttpRequesterService,
    private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService,
    private apiUrlsConfigService: ApiUrlsConfigService) {

    this.galleryApiUrl = this.apiUrlsConfigService.galleryApiUrl;
  }

  submitItem(item: ItemListing): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.galleryApiUrl, item, this.contentTypeHeaderObject);

    return this.httpRequesterService.post(httpRequestOptions);
  }

  // TODO: 
  removeItem(Item: ItemListing): Observable<Response> {
    return null;
  };
}
