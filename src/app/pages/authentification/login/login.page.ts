import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showMenu = true;
  showPass: boolean;
  public type = 'password';
  constructor( private router: Router,
               public authService: AuthService) {
  }

  ngOnInit() {
    this.router.navigate(['/tabs']);
  }
  showSlide(){ // Menu css boolean
   if(this.showMenu){this.showMenu = false;
   } else{  this.showMenu = true;}
   console.log(this.showMenu);
  }
  createNewUser(){
     // this.router.navigate(['/signup']);
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
