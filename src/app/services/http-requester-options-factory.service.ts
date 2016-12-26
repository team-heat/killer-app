import { HttpRequestOptions } from './../models/http-request-options.model';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpRequesterOptionsFactoryService {

  constructor() { }

  createHttpRequesterOptions(url: string, content = {}, headers = {}): HttpRequestOptions {
    return {
      url,
      content,
      headers
    };
  }
}
