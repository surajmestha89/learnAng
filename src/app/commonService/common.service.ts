import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  countryUrl:string = environment.Countryurl;
  countrylist:any;
  session:string = '';


  
  GetCountryList(){
    
    if(!this.countrylist){
       
      return this.http.get(this.countryUrl).pipe(
        map((data:any) => data.data.countryList ),tap(data =>{this.countrylist = data})
      )
      // map((data:any) => data.data.countryList ).
    }
    else{
      return this.countrylist;
    }
    
   
  }  
    

}
