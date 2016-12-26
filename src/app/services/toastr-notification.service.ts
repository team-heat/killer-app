import { Injectable } from '@angular/core';
import { ToastrNotificationOptions } from './../models/toasts-notification-options.model';

@Injectable()
export class ToastrNotificationService {

  private minimumTimeBetweenEnqueueInMs: number = 200;

  private notificationsQueue: ToastrNotificationOptions[];
  private lastNotificationTimestamp: number = 0;

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
    const currentTimestamp = Date.now();
    if (currentTimestamp - this.lastNotificationTimestamp < this.minimumTimeBetweenEnqueueInMs) {
      return;
    }

    console.log(currentTimestamp - this.lastNotificationTimestamp);

    this.notificationsQueue.push(options);
    this.lastNotificationTimestamp = Date.now();
  }
}
