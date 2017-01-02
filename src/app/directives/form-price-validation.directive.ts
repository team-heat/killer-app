import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormPriceValidation]'
})
export class FormPriceValidationDirective {

  constructor(private domElement: ElementRef) { }

  @HostListener('change') onChange() {
    const value = +this.domElement.nativeElement.value;
    if (!value) {
      this.domElement.nativeElement.value = '';
      return;
    }

    if (value < 1) {
      this.domElement.nativeElement.value = '1';
    }

    if (999999999 < value) {
      this.domElement.nativeElement.value = '999999999';
    }
  }

}
