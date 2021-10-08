import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiUserService} from './services/api-user.service';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from './services/auth.service';
import {User} from './Class/User';
import {NotificationsService} from './services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{

 // user: User = new User(); setting = false;
  token = '';
  notifications: any[] = [];
  subscription: Subscription;
  public user: Observable<User>;
  private subscrUserData: Subscription = new Subscription();
  constructor(private apiUser: ApiUserService,
              private apiAuth: AuthService,
              private notificationsService: NotificationsService) {
    // subscribe to tab3 notifications
    this.subscription = this.notificationsService.getNotifications()
      .subscribe(notification => {
      if (notification) {
        this.notifications.push(notification);
        console.log(notification);
      } else {
        console.log('no notifications');
        // clear notifications when empty notification received
        this.notifications = [];
      }
    });
  }
  async ngOnInit() {
    if (await this.userState()) {
      this.token = <string>await this.userToken();
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
  // User State
  async userState(){
    return await this.apiAuth.userState()
      .then(async ()  => true,
        () => false
      );
  }
  async userToken(){
    return await this.apiAuth.userToken()
      .then(async (token)  => token,
        (error) =>  error);
  }
  async getUserData(){
    const data = {
      token: this.token
    };
    this.subscrUserData =  await this.apiUser.getUserData(data)
      .subscribe(
        (response: any ) => {
          if(response.errorList[0]){
          }else {
            this.user = response;
            console.log(response);
            localStorage.setItem('user', JSON.stringify(this.user));
            console.log(JSON.parse(localStorage.getItem('user')));
          }
        },
        () => {}
      );
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
