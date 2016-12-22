import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsService {
    httpService: Http;

    constructor(httpService: Http) {
        this.httpService = httpService;
    }

    // TODO url finishing with /
    private url = '';

    getSingleItem(id: any) :Observable<Response> {
        return this.httpService.get(this.url + id)
            .map((res: Response) => res.json());
    }
}