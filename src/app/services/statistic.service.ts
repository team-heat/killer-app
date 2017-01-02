import { Injectable } from '@angular/core';

import { ApiUrlsConfigService } from './api-urls-config.service';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';

import { Observable } from 'rxjs';
import { Response } from '@angular/http';

@Injectable()
export class StatisticService {
    private contentTypeHeaderObject: {} = { 'Content-Type': 'application/json' };

    constructor(
        private httpRequesterService: HttpRequesterService,
        private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService,
        private apiUrlsConfigService: ApiUrlsConfigService) {

    }

    getTopBuyers(): Observable<Response> {
        const url = this.apiUrlsConfigService.topBuyersUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getTopSellers(): Observable<Response> {
        const url = this.apiUrlsConfigService.topSellersUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getTopActiveUsers(): Observable<Response> {
        const url = this.apiUrlsConfigService.topActiveUsersUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getMostExpensiveItems(): Observable<Response> {
        const url = this.apiUrlsConfigService.mostExpensiveItemsUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getMostSalledMakes(): Observable<Response> {
        const url = this.apiUrlsConfigService.mostSalledMakesUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getMostOfferedItems(): Observable<Response> {
        const url = this.apiUrlsConfigService.mostOfferedItemsUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getMostCommentedItems(): Observable<Response> {
        const url = this.apiUrlsConfigService.mostCommentedItemsUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }
}