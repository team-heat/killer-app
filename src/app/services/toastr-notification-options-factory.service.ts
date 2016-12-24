import { Injectable } from '@angular/core';
import { ToastrNotificationOptions } from './../models/toasts-notification-options.model';

@Injectable()
export class ToastrNotificationOptionsFactoryService {

  constructor() { }

  createToastrNotificationOptions(method: string, message: string, heading: string, delay: number): ToastrNotificationOptions {
    method = method || 'info';
    message = message || 'Hello World!';
    heading = heading || 'Toastr';
    delay = delay || 0;

    return {
      method,
      message,
      heading,
      delay
    };
  }
}
