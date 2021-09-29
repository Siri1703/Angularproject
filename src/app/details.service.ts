import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { laptop } from './laptop';
import { user } from './user';
@Injectable({
  providedIn: 'root'
})

export class DetailsService {

  d:Array<any>=[];
 info:Array<any>=[];
 url:any
 url1:any;
 posturl:any
 exurl:any
 usrurl:any
 mngurl:any
 bool:boolean=false;
 em:any;

  constructor(private httpclient:HttpClient) { 
   // this.url = "http://localhost:8000/users";
    this.url1 = "http://localhost:8080/laptopavailable";
    this.posturl="http://localhost:8080/lap";
    this.exurl="http://localhost:2000/home";
    this.usrurl="http://localhost:2000/user";
    this.mngurl="http://localhost:2000/alluser";
  }
  adddetails(details:any)
  {
     this.info.push(details);
     console.log(this.info);
  }
  addusers(user:any)
  {
    console.log(user)
    return this.httpclient.post<any>(this.usrurl,user);
  }
  getdetails()
  {
    return this.info;
  }
   getPosts():Observable<user[]>{
    
     return this.httpclient.get<user[]>(this.url)
       
    
  }
  getlaptop():Observable<laptop[]>{
    
    return this.httpclient.get<laptop[]>(this.url1)
      
   
 }
  msg:boolean=false
  addposts(value:any)
  {
    console.log(value)
    return this.httpclient.post(this.url,value);
    
  }
  addlaptop(value:any)
  {
    return this.httpclient.post(this.posturl,value)
    console.log(value)
  }
  verify(d:any)
  {
    console.log(d.email);
    return this.httpclient.post<any>(this.exurl,d)
   
    
  }
  getmongo():Observable<any>
  {
    return this.httpclient.get<any>(this.mngurl);
  }

}
