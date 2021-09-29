import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  showPass: boolean;
  public type = 'password';
  constructor( public authService: AuthService) { }

  ngOnInit() {
  }
  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
