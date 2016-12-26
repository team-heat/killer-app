import { Injectable } from '@angular/core';

@Injectable()
export class DateProviderService {

  constructor() { }

  get currentTimestamp(): number {
    return Date.now();
  }
}
