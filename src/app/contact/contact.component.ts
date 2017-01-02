import { Component, OnInit } from '@angular/core';

import { ToastrNotificationOptionsFactoryService } from '../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from '../services/toastr-notification.service';
import { MailService } from '../services/mail.service';
import { Mail } from '../models/mail.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mail: Mail;

  constructor(
    private mailService: MailService,
    private toastrNotificationService: ToastrNotificationService,
    private toastrNotificationOptionsFactoryService: ToastrNotificationOptionsFactoryService) {

    this.mail = {
      senderName: '',
      senderEmail: '',
      subject: '',
      content: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.mailService.sendMail(this.mail)
      .subscribe((resp) => {
        const method = 'success';
        const message = `EMail sent!`;
        const heading = 'Yay!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, (err) => {
        const method = 'error';
        const message = 'Something went wrong.';
        const heading = 'Oops!';
        const toastrNotificationOptions = this.toastrNotificationOptionsFactoryService
          .createToastrNotificationOptions(method, message, heading);

        this.toastrNotificationService.enqueueNotification(toastrNotificationOptions);
      }, () => { });
  }
}
