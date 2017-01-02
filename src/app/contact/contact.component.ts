import { Component, OnInit } from '@angular/core';

import { Mail } from '../models/mail.model';
import { MailService } from '../services/mail.service';
import { ToastrNotificationOptionsFactoryService } from '../services/toastr-notification-options-factory.service';
import { ToastrNotificationService } from '../services/toastr-notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mail: Mail;

  constructor(
    private mailService: MailService,
    private toastrNotification: ToastrNotificationService,
    private toastrOptions: ToastrNotificationOptionsFactoryService) {

    this.mail = {
      senderName: '',
      senderEmail: '',
      subject: '',
      content: ''
    };
  }

  ngOnInit() { }

  onSubmit() {
    if (this.mail.content.length < 50 || this.mail.content.length > 1000) {
      const toastrOptions = this.toastrOptions
        .createToastrNotificationOptions('error', 'Content must be between 50 and 1000 symbols long.');
      this.toastrNotification.enqueueNotification(toastrOptions);

      return;
    }

    this.mailService.sendMail(this.mail)
      .subscribe((resp) => {
        const toastrOptions = this.toastrOptions
          .createToastrNotificationOptions('success', 'We\'ll reply shortly.', 'Thanks for your feedback');
        this.toastrNotification.enqueueNotification(toastrOptions);
      }, err => {
        const toastrOptions = this.toastrOptions
          .createToastrNotificationOptions('error', err.message || 'An error has occured.');
        this.toastrNotification.enqueueNotification(toastrOptions);
      }, () => {
        this.mail.subject = '';
        this.mail.content = '';
      });
  }
}
