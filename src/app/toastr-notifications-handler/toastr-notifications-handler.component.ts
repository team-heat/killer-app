import { Component, OnInit, DoCheck, ViewContainerRef } from '@angular/core';
import { ToastrNotificationService } from './../services/toastr-notification.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-toastr-notifications-handler',
  templateUrl: './toastr-notifications-handler.component.html',
  styleUrls: ['./toastr-notifications-handler.component.scss']
})
export class ToastrNotificationsHandlerComponent implements OnInit, DoCheck {

  constructor(
    private toastr: ToastsManager,
    private viewContainerRef: ViewContainerRef,
<<<<<<< HEAD
    private toastrNotificationService: ToastrNotificationService) {
  }
=======
    private toastrNotificationService: ToastrNotificationService) { }
>>>>>>> refs/remotes/origin/master

  ngOnInit() {
    this.toastr.setRootViewContainerRef(this.viewContainerRef);
  }

  ngDoCheck() {
    while (this.toastrNotificationService.hasNotificationsInQueue) {
      const that = this;
      const nextToast = this.toastrNotificationService.nextNotificationInQueue;
      setTimeout(function () {
        that.toastr.setRootViewContainerRef(that.viewContainerRef);
        that.toastr[nextToast.method](nextToast.message, nextToast.heading);
      }, nextToast.delay);
    }
  }
}
