import { CustomService } from './../custom.service';
import { Component,Input, OnInit ,Output,EventEmitter, } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  val:any = {};
  constructor(private service:CustomService,private router:Router,private active:ActivatedRoute,private gp:FormBuilder){

  }
  @Input() updatedata:any;
 @Output()output= new EventEmitter<any>();
  Json:any;
  newForm:any;
  isEdit:boolean = false;
  userlist:Array<any> = [];
  ngOnInit(){
  
    this.userlist = this.service.displayitem();
    this.newForm = this.gp.group({
      city:['',Validators.required],
      name: ['',[Validators.required,Validators.minLength(10)]],
      email: ['',[Validators.required,Validators.email]]
    }
  )
  if(this.updatedata){
    this.newForm.patchValue({
      city:this.updatedata.city,
      name:this.updatedata.name,
      email: this.updatedata.email
    });
    this.isEdit = true;
  }
  }
  
  getformcontrol(){}

  submit(data:any){
     
    this.service.additem(data);
    alert("registered successfully");
    this.newForm.reset();
    
  }
  editform(data:any){
    data.RID = this.updatedata.RID;
    this.service.Updatitem(data);
    this.output.emit(false);

  }
  
  
 
}

