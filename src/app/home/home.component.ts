import { Component, OnInit } from '@angular/core';
import { PracticeComponent } from '../practice/practice.component';
import { FormsModule } from '@angular/forms';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';
import { GuardGuard } from '../guard.guard';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
constructor(private de:DetailsService,private router:Router){
  

}

dumm:Array<any>=[];
d:Array<any>=[];
k:any
  sub(del:any)
  {
    // this.dumm=this.de.getdetails();
    // console.log(this.dumm[0].name);
    // this.dumm.forEach((value,index)=>{
    //   console.log(del.value.email);
    //   console.log(value)
    //   console.log(index)
      
    //   if(del.value.email==value.name) 
    //   this.d=this.dumm.splice(index,value)});
    //   console.log(this.d);
      
      this.de.verify(del.value).subscribe(data=> {
        console.log(data)
        this.k=jwtDecode(data.message)
        console.log(this.k.email);
        if(this.k.role=="users"){
      this.de.bool=true;
      console.log(this.de.bool);
       localStorage.setItem("login",data.message);
          this.router.navigateByUrl("/displaycomponent");
        }
        else{
          this.de.bool=false;
          console.log(this.de.bool);
        }
      });
  }
  
}
