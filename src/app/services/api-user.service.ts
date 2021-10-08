import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../Class/User';
//import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  urlDev = 'http://unknown.com';
  public user: Observable<User>;
  private userSubject: BehaviorSubject<User>;
  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }
  //get the current value of the logged in user without subscribe to the user observable
  public get userValue(): User { // Local user
    return this.userSubject.value;
  }

  //Api: Retrieve user data by token
  getUserData(data: object){
    console.log('en el servicio');
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://kuse0.free.beeceptor.com/my/api/user');//this.urlDev+'sdfs' +data
  }
  //Api: Retrieve user data by token
  updateUserData(data: any){
    console.log('en el servicio');
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/j`son');
    return this.http.post<User>(`${environment.apiUrl}/api/user/data`, data, {headers})
      .pipe(map(user => {
        // store user to keep logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }
  removeUser(){
    localStorage.removeItem('user');
    this.userSubject.next(null);
   // this.router.navigate(['/account/login']);
  }
}
