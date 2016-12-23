import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsService {
    httpService: Http;

    constructor(httpService: Http) {
        this.httpService = httpService;
    }

    // single item server route
    private singleUrl = '/api/gallery/'; // +id

    // collection of items server route
    private collectionUrl = '/api/gallery'

    getSingleItem(id: string | number): Observable<Response> {
        return this.httpService.get(this.singleUrl + id)
            .map((res: Response) => res.json());
    }

    getCollectionOfItems(): Observable<Response> {
        return this.httpService.get(this.collectionUrl)
            .map((res: Response) => res.json());
    }
}