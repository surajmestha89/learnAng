import { environment } from './../../environments/environment';
import { CommonService } from './../commonService/common.service';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ContentComponent } from './../content/content.component';
import { HttpClient } from '@angular/common/http';
import {  AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { isObservable } from 'rxjs';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

 name:string = '';
 simple:any = {};
 formobj:any = {};
 countrylist:Array<any> =[];
 city:string = '';
 jsonObj:any = {};
 simpleformobj:any ={};
 task:string = '0';
 reactValiadtionFormObj:any = {};
 cdata:string = '';
  constructor(private route:Router,private http:HttpClient,private el:ElementRef,private rander:Renderer2,private formbuild:FormBuilder,private service:CommonService) { 
    this.service.session = '';
  }
  
  ngOnInit(): void {

    // reactive form example 
   this.formobj = new FormGroup({
     email: new FormControl(''),
     username: new FormControl(''),
     password: new FormControl(''),
     checkout: new FormControl('')

   });
   // reactive form with validation  example  
   this.reactValiadtionFormObj = this.formbuild.group({
    email: ['',[Validators.required,Validators.email]],
    username: ['',[Validators.required,Validators.minLength(5)]],
    password: [''],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10}')]],
    countrycode: ['',Validators.required],
    message:['',[Validators.required,Validators.minLength(50),Validators.maxLength(100)]],
    checkout: ['']
   })
   this.reactValiadtionFormObj.get('countrycode').setValue('88'),
   this.reactValiadtionFormObj.patchValue({
    countrycode : '99',
    phone : 9632529881
   });
   
  //  fetch json file 
    this.http.get('./assets/msg.json').subscribe(data =>
      this.jsonObj = data,
      error => console.log(error));

      if(isObservable(this.service.GetCountryList())){
       this.service.GetCountryList().subscribe((data:any) => {
         console.log(data)
         this.countrylist = data;
       })
      }
      else{
        this.countrylist = this.service.countrylist;
      }
      
      
  }
  
  @ViewChild('demo', { static: false })
  getdom!: ElementRef;
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.getdom.nativeElement.innerHTML="hello world";
   let div = this.rander.createElement('div')
   let content = this.rander.createText('render is for dom cration')
   this.rander.appendChild(div,content)
   this.rander.addClass(div,'border')
   this.rander.appendChild(this.getdom.nativeElement,div)
    this.getdom.nativeElement.insertAdjacentHTML('afterend', '<div class="two">two</div>');
  }
  // simple form submit function 
  submit(){
    console.log(this.simpleformobj)
    alert("Thank You !!! "+this.simpleformobj.username )
    this.simpleformobj = {};

  }
  // reactive form submit function 
  submit2(data:NgForm){
    console.log(data.value)
    alert("Thank You !!! "+data.value.username );

  }
  // task 3 emit child data 
  getchilddata(data:any){
    this.cdata = data;
  }
  // task 1 
  clickbtn(){
    this.service.session = this.name;
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
