import { Component, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:CustomService) { }
  grid:Array<any>=[];
  obj:any;
  isedit:boolean = false;
  ngOnInit(): void {
    this.grid = this.service.displayitem();
  }
 edit(item:any){
   this.obj = item;
   this.isedit = true;
 }
 delete(item:any){
   this.service.deleteitem(item.RID);
   this.grid = this.service.displayitem();
 }
 getaction(action:any){
  this.isedit = action;
 }
}
