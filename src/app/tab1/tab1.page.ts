import { Component } from '@angular/core';
import {NotificationsService} from '../services/notifications.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private notifactionsService: NotificationsService) {
    this.sendMessage();
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.notifactionsService.sendNotifications('Message from Home Component to App Component!');
  }

  clearMessages(): void {
    // clear messages
    this.notifactionsService.clearNotifications();
  }
}
