import { Directive, ElementRef, HostListener, DoCheck } from '@angular/core';

@Directive({
  selector: '[appFormDefaultValue]'
})
export class FormDefaultValueDirective implements DoCheck {

  constructor(private domElement: ElementRef) { }

  ngDoCheck() {
    if (this.domElement.nativeElement.value === '-1') {
      this.domElement.nativeElement.value = '0';
    }
  }
}
