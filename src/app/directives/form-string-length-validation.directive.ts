import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormStringLengthValidation]'
})
export class FormStringLengthValidationDirective {

  private allowedStringLength: number;

  constructor(private domElement: ElementRef) {

    this.allowedStringLength = 30;
  }

  @HostListener('change') onChange() {
    const value = this.domElement.nativeElement.value;
    if (!value) {
      this.domElement.nativeElement.value = '';
      return;
    }

    if (value.length > this.allowedStringLength) {
      this.domElement.nativeElement.value = '';
    }
  }
}
