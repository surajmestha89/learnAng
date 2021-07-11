import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(ele:ElementRef,render:Renderer2) { 
    render.setStyle(ele.nativeElement,"color",'white');
    ele.nativeElement.style.background = "green";
  }

}
