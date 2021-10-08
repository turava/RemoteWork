import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiUserService} from '../../../services/api-user.service';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../../Class/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public user: Observable<User>;
  private subscrUserData: Subscription = new Subscription();

  constructor(private apiUser: ApiUserService) { }

  ngOnInit() {
    this. getUserData();
  }
  async getUserData(){
    const data = {
      token: 'ad'
    };
    this.subscrUserData =  await this.apiUser.getUserData(data)
      .subscribe(
        (response: any ) => {
          this.user = response;
          console.log(response);
          localStorage.setItem('user', JSON.stringify(this.user));
        },
        () => {}
      );
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscrUserData.unsubscribe();
  }
}
