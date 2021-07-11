import { Component, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemlist:Array <any> = [];
  constructor(private service:CustomService) { }
  
  ngOnInit(): void {
  }
  
  // callGetapi(){
  //    this.service.displayitem().subscribe(
  //   next =>{

  //   },
  //   error => {
      
  //   }
  //   )
  // }
 
}
