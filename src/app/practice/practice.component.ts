import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent  {
  


  constructor(private d:DetailsService,private auth:SocialAuthService)
  {
  }
  signin():void{
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID).then(data =>{
      console.log(data);
      localStorage.setItem('login','true');
    })
     }
    
  submit(register:any)
    {
      if(register.value.password!=register.value.repassword)
      {
        alert("password does not match")
      }
      else{
       console.log("details registered")
      // this.d.adddetails(register.value)
      this.d.addusers(register.value).subscribe(data =>{
        console.log(data);
      })
      }
    }
}
