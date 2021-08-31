import { CommonService } from './commonService/common.service';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router:Router,private service:CommonService) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{

   if( this.service.session === ''){
    return false;
   }
   else
      return true;

  }
}
