import { Injectable } from '@angular/core';
import { ToastrNotificationOptions } from './../models/toasts-notification-options.model';

@Injectable()
export class ToastrNotificationOptionsFactoryService {

  constructor() { }

  createToastrNotificationOptions(method = '', message = '', heading = '', delay = 0): ToastrNotificationOptions {
    method = method || 'info';
    message = message || 'Hello World!';
    heading = heading || '';
    delay = delay || 0;

    return {
      method,
      message,
      heading,
      delay
    };
  }
}
