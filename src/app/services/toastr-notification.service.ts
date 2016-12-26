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
    this.lastItemInQueue = {
      method: '',
      message: '',
      heading: '',
      delay: 1500000
    };
  }

  get hasNotificationsInQueue(): boolean {
    return this.notificationsQueue.length > 0;
  }

  get nextNotificationInQueue(): ToastrNotificationOptions {
    const nextNotification = this.notificationsQueue.shift();
    return nextNotification;
  }

  enqueueNotification(newNotification: ToastrNotificationOptions): void {
    const notificationsAreEqual = this.notificationsAreEqual(newNotification, this.lastItemInQueue);
    const currentTimestamp = Date.now();
    const durationBetweenToastrsIsValid = currentTimestamp - this.lastNotificationTimestamp < this.minimumTimeBetweenEnqueueInMs;
    if (notificationsAreEqual && durationBetweenToastrsIsValid) {
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
