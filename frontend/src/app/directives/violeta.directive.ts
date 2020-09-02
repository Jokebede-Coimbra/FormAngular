import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVioleta]'
})
export class VioletaDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#4c06f1';
  }


}
