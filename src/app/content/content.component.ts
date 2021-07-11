import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  @Input()data:string = '';
  val:string = '';
  childdata:string = "chlddata";
  @Output()passval = new EventEmitter()
  ngOnInit(): void {
  }
   click(){
     this.passval.emit(this.val)
   }
}
