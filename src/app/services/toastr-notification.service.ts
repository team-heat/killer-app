import { Injectable } from '@angular/core';
import { ToastrNotificationOptions } from './../models/toasts-notification-options.model';

@Injectable()
export class ToastrNotificationService {

  private notificationsQueue: ToastrNotificationOptions[];

  constructor() {
    this.notificationsQueue = [];
  }

  get hasNotificationsInQueue(): boolean {
    return this.notificationsQueue.length > 0;
  }

  get nextNotificationInQueue(): ToastrNotificationOptions {
    const nextNotification = this.notificationsQueue.shift();
    return nextNotification;
  }

  enqueueNotification(options: ToastrNotificationOptions): void {
    this.notificationsQueue.push(options);
  }
}
