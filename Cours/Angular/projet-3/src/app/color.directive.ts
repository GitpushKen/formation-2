import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective {

  @Input('appColor') color='blue';

  constructor(private el:ElementRef) { }

  @HostListener('click')
  onClick() {
    this.el.nativeElement.style.backgroundColor = this.color 
  }

}
