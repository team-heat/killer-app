import { Headers, Http, Response, } from '@angular/http';
import { HttpRequestOptions } from './../models/http-request-options.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequesterService {

  constructor(private ngHttpService: Http) { }

  get(options: HttpRequestOptions): Observable<Response> {
    const headers = new Headers(options.headers);
    return this.ngHttpService.get(options.url, { headers });
  }

  post(options: HttpRequestOptions): Observable<Response> {
    const content = JSON.stringify(options.content);
    const headers = new Headers(options.headers);
    return this.ngHttpService.post(options.url, content, { headers });
  }

  put(options: HttpRequestOptions): Observable<Response> {
    const content = JSON.stringify(options.content);
    const headers = new Headers(options.headers);
    return this.ngHttpService.put(options.url, content, { headers });
  }
}
