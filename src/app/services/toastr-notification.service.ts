import { Injectable } from '@angular/core';
import { ToastrNotificationOptions } from './../models/toasts-notification-options.model';

@Injectable()
export class ToastrNotificationService {

  private minimumTimeBetweenEnqueueInMs: number = 200;

  private notificationsQueue: ToastrNotificationOptions[];
  private lastItemInQueue: ToastrNotificationOptions;
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

  enqueueNotification(newNotification: ToastrNotificationOptions): void {
    let notificationsAreEqual = false;
    if (this.lastItemInQueue) {
      notificationsAreEqual = this.notificationsAreEqual(newNotification, this.lastItemInQueue);
    }

    const currentTimestamp = Date.now();
    if (notificationsAreEqual && currentTimestamp - this.lastNotificationTimestamp < this.minimumTimeBetweenEnqueueInMs) {
      return;
    }

    this.notificationsQueue.push(newNotification);
    this.lastNotificationTimestamp = Date.now();
    this.lastItemInQueue = newNotification;
  }

  private notificationsAreEqual(newNotification: ToastrNotificationOptions, lastNotification: ToastrNotificationOptions): boolean {
    const messageIsEqual = newNotification.message === lastNotification.message;
    const headingIsEqual = newNotification.heading === lastNotification.heading;

    return messageIsEqual && headingIsEqual;
  }
}
