import { Injectable } from '@angular/core';

import { ApiUrlsConfigService } from './api-urls-config.service';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';

@Injectable()
export class StatisticService {
    private contentTypeHeaderObject: {} = { 'Content-Type': 'application/json' };

    constructor(
        private httpRequesterService: HttpRequesterService,
        private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService,
        private apiUrlsConfigService: ApiUrlsConfigService) {

    }

    getTopBuyers() {
        const url = this.apiUrlsConfigService.topBuyersUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getTopSellers() {
        const url = this.apiUrlsConfigService.topSellersUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getTopActiveUsers() {
        const url = this.apiUrlsConfigService.topActiveUsersUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getMostExpensiveItems() {
        const url = this.apiUrlsConfigService.mostExpensiveItemsUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getMostSaledMakes() {
        const url = this.apiUrlsConfigService.mostSaledMakesUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getMostOfferedItems() {
        const url = this.apiUrlsConfigService.mostOfferedItemsUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getMostCommentedItems() {
        const url = this.apiUrlsConfigService.mostCommentedItemsUrl;

        const httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(url, {}, this.contentTypeHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }
}