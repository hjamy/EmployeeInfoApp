import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMostExperienced]'
})
export class MostExperiencedDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }

   @Input() set appMostExperienced(condition: boolean){
     if(condition){
       this.renderer.addClass(this.element.nativeElement, 'highlight');
     }
   }

}
