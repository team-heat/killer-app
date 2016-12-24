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
    private vRef: ViewContainerRef,
    private toastrNotificationService: ToastrNotificationService) {

    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
  }

  ngDoCheck() {
    while (this.toastrNotificationService.hasNotificationsInQueue) {
      const nextToast = this.toastrNotificationService.nextNotificationInQueue;
      this.toastr[nextToast.method](nextToast.message);
    }
  }
}
