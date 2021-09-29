import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';
import { DisplayComponent } from './display/display.component';
import { MainhComponent } from './mainh/mainh.component';
import { HttpClientModule } from  '@angular/common/http'
import {SocialAuthServiceConfig,SocialLoginModule,SocialAuthService, GoogleLoginProvider} from 'angularx-social-login'



@NgModule({
  declarations: [
    
    PracticeComponent,
    AppComponent,
    DisplayComponent,
    MainhComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    
  ],
  exports: [
   PracticeComponent
  ],
  providers: [
    {
   provide: 'SocialAuthServiceConfig',
   useValue:{
     autoLogin:false,
     providers:[
       {
         id:GoogleLoginProvider.PROVIDER_ID,
         provider:new GoogleLoginProvider(
           '341384935083-l971bp3sdscn7nfbopg9kqqc3ud4gkta.apps.googleusercontent.com'
         )
       }
     ]
   } as SocialAuthServiceConfig
    }

  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
