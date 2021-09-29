import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent  {

  receiveddata:Array<any>=[];
   detail:Array<any>=[];
   mongousers:Array<any>=[];
  constructor(private d:DetailsService){}
   info()
   {
     this.receiveddata=this.d.getdetails();
     console.log(this.d.getdetails())
     console.log(this.receiveddata[0].name);
   }
   info1()
   {
       this.d.getlaptop().subscribe(data => this.detail = data);
       //return this.detail
      
   }
    a= {id:9,name:'siri',address:'xyz'};
    msg=false
   adddetail(n:any)
   {
     this.d.addposts(n.value).subscribe(data => {
      console.log(this.a); 
      console.log(data)
      this.msg=true;});
   }
   addlap(l:any)
   {
     console.log(JSON.stringify(l.value))
     this.d.addlaptop(JSON.stringify(l.value)).subscribe(data =>{
      console.log(data)
      this.msg=true;
     });
   }
   getmongousers(){
     this.d.getmongo().subscribe(data =>{
       this.mongousers=data}
       )
   }
}
