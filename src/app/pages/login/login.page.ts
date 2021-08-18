import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showMenu = false;
  constructor() {
  }

  ngOnInit() {
  }
  showSlide(){
   if(this.showMenu){this.showMenu = false;
   } else{  this.showMenu = true;}
   console.log(this.showMenu);
  }
}
