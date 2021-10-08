import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private subject = new Subject<any>();

  constructor() { }

  sendNotifications(notification: string) {
    this.subject.next({ text: notification });
  }

  clearNotifications() {
    this.subject.next();
  }

  getNotifications(): Observable<any> {
    return this.subject.asObservable();
  }
}
