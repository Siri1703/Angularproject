import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  constructor(private de:DetailsService,private auth:SocialAuthService){

  }
//   signin():void{
//  this.auth.signIn(GoogleLoginProvider.PROVIDER_ID).then(data =>{
//    localStorage.setItem('login','true');
//  })
//   }
  log():void
  {
    console.log("hello i am in");
    // this.auth.signOut().then(data =>{
    //   console.log("user logged out!");
    // })
 window.confirm("Are you sure you want to logout?")
   window.localStorage.clear();
  }
}
