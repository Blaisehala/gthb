import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOpts]'
})
export class OptsDirective {

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.color="lightblue"
   }

}
