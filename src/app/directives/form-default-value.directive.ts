import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormDefaultValue]'
})
export class FormDefaultValueDirective {

  constructor(private domElement: ElementRef) { }

  
}
