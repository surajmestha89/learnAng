import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string,reverse:boolean): string {
    // string reverse 
    if(typeof value === "string"&& reverse){

      let val = value.split("");
      let rev = val.reverse();
     let reverse = rev.join("");
     return reverse;
    }
    else
      return value;
  }

}
