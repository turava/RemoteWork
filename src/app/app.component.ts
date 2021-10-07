import {Component, OnInit} from '@angular/core';
import {ApiUserService} from './services/api-user.service';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from './services/auth.service';
import {User} from './Class/User';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

 // user: User = new User(); setting = false;
  public user: Observable<User>;
  private subscrUserData: Subscription = new Subscription();
  token = '';
  constructor(private apiUser: ApiUserService,
              private apiAuth: AuthService) {}
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
}
