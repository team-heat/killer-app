import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormYearValidation]'
})
export class FormYearValidationDirective {

  constructor(private domElement: ElementRef) { }

  @HostListener('change') onChange() {
    const value = +this.domElement.nativeElement.value;
    if (!value) {
      this.domElement.nativeElement.value = '';
      return;
    }

    if (value < 1850) {
      this.domElement.nativeElement.value = '1850';
    }

    if (2017 < value) {
      this.domElement.nativeElement.value = '2017';
    }
  }
}
