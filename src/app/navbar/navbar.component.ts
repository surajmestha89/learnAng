import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
// import { CustomService } from '../custom.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  grid:Array<any>=[];
  obj:string = '';
  isedit:boolean = false;
  ngOnInit(): void {
    // this.grid = this.service.displayitem();
    // this.obj = history.state.data;
     this.route.queryParams.subscribe(
      data=> {this.obj = data.Id;
      console.log(this.obj)
      }
      )
  }
 edit(item:any){
   this.obj = item;
   this.isedit = true;
 }
//  delete(item:any){
//    this.service.deleteitem(item.RID);
//    this.grid = this.service.displayitem();
//  }
//  getaction(action:any){
//   this.isedit = action;
//  }
}
