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
    private toastrNotification: ToastrNotificationService,
    private toastrOptions: ToastrNotificationOptionsFactoryService) {

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
    this.mailService.sendMail(this.mail);
  }
}
