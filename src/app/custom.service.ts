import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor( private http:HttpClient) { }
  itemlist:Array<any> = [];

  additem(item:any){
    if(!this.itemlist.length){
      item.RID = 1;
    }else{
      item.RID = this.itemlist.length+1;
    }
      this.itemlist.push(item);
  }
  Updatitem(item:any){
    
   let index =  this.itemlist.findIndex(x => x.RID === item.RID);
    this.itemlist[index] = item;
    
  }
deleteitem(id:number){
  let index = this.itemlist.findIndex(x => x.RID === id);
  this.itemlist.splice(index,1);
}

  // get method 
  displayitem(){
    return this.itemlist;
  }
}
