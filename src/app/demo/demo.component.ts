// import { CustomService } from './../custom.service';
import { Location } from '@angular/common';
import { Component,Input, OnInit ,Output,EventEmitter, AfterContentChecked, } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{

  val:any = {};
  routeEmitData:any;
  val1:any;
  val2='';
  name = '';
  constructor(private router:Router,private route:ActivatedRoute){
    this.val1 = this.router.getCurrentNavigation()?.extras.state;
  }
 ngOnInit(){

 this.routeEmitData = history.state.data;
 this.route.queryParams.subscribe(data =>{
     console.log("get data from queryparms:"+data)
     this.val1 = data.name;
   });

   this.val = JSON.stringify(this.routeEmitData);
  console.log("get data from history state object:"+this.routeEmitData);

  this.name = (this.routeEmitData)?this.routeEmitData.name:'unkown';
// alert dialog 
    setTimeout( ()=>{
      alert('HI '+ this.name)
    },1000); 
 }
    
}

