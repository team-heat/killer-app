import { Component, OnInit, DoCheck, ViewContainerRef } from '@angular/core';
import { ToastrNotificationService } from './../services/toastr-notification.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-toastr-notifications-handler',
  templateUrl: './toastr-notifications-handler.component.html',
  styleUrls: ['./toastr-notifications-handler.component.scss']
})
export class ToastrNotificationsHandlerComponent implements OnInit, DoCheck {

  private toasterDurationInMs: number = 3000;

  constructor(
    private toastr: ToastsManager,
    private viewContainerRef: ViewContainerRef,
    private toastrNotificationService: ToastrNotificationService) { }

  ngOnInit(): void {
    this.toastr.setRootViewContainerRef(this.viewContainerRef);
  }

  ngDoCheck(): void {
    let toasterDurationDelay = 0;
    while (this.toastrNotificationService.hasNotificationsInQueue) {
      const that = this;
      const nextToast = this.toastrNotificationService.nextNotificationInQueue;
      setTimeout(function () {
        that.toastr.setRootViewContainerRef(that.viewContainerRef);
        that.toastr[nextToast.method](nextToast.message, nextToast.heading);
      }, nextToast.delay + toasterDurationDelay);
      // no delay for the first toast,
      // delay each next toast with the duration
      // of the lifetime of the previous one.
      toasterDurationDelay = this.toasterDurationInMs;
    }
  }
}
