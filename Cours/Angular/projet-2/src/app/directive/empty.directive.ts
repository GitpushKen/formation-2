import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEmpty]',
  standalone: true
})
export class EmptyDirective {

  constructor(private el: ElementRef) {    
    this.el.nativeElement.style.display='none';  
  }

}
