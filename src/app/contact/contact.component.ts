import { Component, OnInit } from '@angular/core';

import { ToastrNotificationOptionsFactoryService } from '../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from '../services/toastr-notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailAddress: string;
  name: string;

  constructor(
    private toastrNotification: ToastrNotificationService,
    private toastrOptions: ToastrNotificationOptionsFactoryService) { }

  ngOnInit() {
  }

  onSubmit() {
  }
}
