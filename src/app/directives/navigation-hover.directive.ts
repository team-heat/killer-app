import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavigationHover]'
})
export class NavigationHoverDirective {

  constructor(private domElement: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.underline('underline');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.underline(null);
  }

  private underline(value: string) {
    this.domElement.nativeElement.style.textDecoration = value;
  }
}
