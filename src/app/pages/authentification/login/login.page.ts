import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showMenu = true;
  constructor( private router: ActivatedRoute,
               public authService: AuthService) {
  }

  ngOnInit() {
  }
  showSlide(){ // Menu css boolean
   if(this.showMenu){this.showMenu = false;
   } else{  this.showMenu = true;}
   console.log(this.showMenu);
  }
  createNewUser(){
     // this.router.navigate(['/signup']);
  }
}
