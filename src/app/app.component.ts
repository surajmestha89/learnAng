import { CustomService } from './custom.service';
import { Component ,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  testName = " Parent data";
  inputValue:number = 100;
  CurrentDate = new Date();
  val:any = {};
  constructor(private service:CustomService){

  }
  ItemList:Array<any> = [];
  
  submit(form:NgForm){
    // alert("data :"+data);
    
    console.log("form data is ")
    console.log(form.value)
    form.reset();
  }
  
  getvalue(data:string){
    // alert('get data from child '+data)
    this.testName =data;
    // this.val = true;
  }
}
