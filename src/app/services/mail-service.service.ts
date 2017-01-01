import { ApiUrlsConfigService } from './api-urls-config.service';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';
import { Mail } from '../models/mail.model';

@Injectable()
export class MailServiceService {

  private mailApiUrl: string;
  private contentTypeHeaderObject: {} = { 'Content-Type': 'application/json' };

  constructor(
    private httpRequesterService: HttpRequesterService,
    private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService,
    private apiUrlsConfigService: ApiUrlsConfigService) {

    this.mailApiUrl = this.apiUrlsConfigService.mailApiUrl;
  }

  sendMail(mail: Mail) {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.mailApiUrl, mail, this.contentTypeHeaderObject);

    return this.httpRequesterService.post(httpRequestOptions);
  }
}
