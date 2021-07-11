import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContentComponent } from './../content/content.component';
import { HttpClient } from '@angular/common/http';
import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 name:string = '';
 simple:any = {};
 formobj:any = {};
 city:string = '';
 jsonObj:any = {};
 simpleformobj:any ={};
 task:string = '5';
 reactValiadtionFormObj:any = {};
 cdata:string = '';
  constructor(private route:Router,private http:HttpClient,private formbuild:FormBuilder) { }
  
  ngOnInit(): void {

    // reactive form example 
   this.formobj = new FormGroup({
     email: new FormControl(''),
     username: new FormControl(''),
     password: new FormControl(''),
     checkout: new FormControl('')

   });
   this.reactValiadtionFormObj = this.formbuild.group({
    email: ['',[Validators.required,Validators.email]],
    username: ['',[Validators.required,Validators.minLength(5)]],
    password: ['',[Validators.required,Validators.minLength(4)]],
    checkout: ['',Validators.required]
   })
  //  fetch json file 
    this.http.get('./assets/msg.json').subscribe(data =>
      this.jsonObj = data,
      error => console.log(error));

  }
  
  // simple form submit function 
  submit(){
    console.log(this.simpleformobj)
    alert("Thank You !!! "+this.simpleformobj.username )
    this.simpleformobj = {};

  }
  // reactive form submit function 
  submit2(data:any){
    console.log(data)
    alert("Thank You !!! "+data.username );

  }
  getchilddata(data:any){
    this.cdata = data;
  }
  clickbtn(){
    let navigateObject = { 
      queryParams:{
        name:this.name
      },
      state:{ 
        data:{
          name:this.name,
          city:this.city
        }
      }
    }
    this.route.navigate(['/demo'],navigateObject)
   
  }
 
}
