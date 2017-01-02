import { FormPriceValidationDirective } from './form-price-validation.directive';
import { FormStringLengthValidationDirective } from './form-string-length-validation.directive';
import { FormYearValidationDirective } from './form-year-validation.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FormYearValidationDirective,
    FormPriceValidationDirective,
    FormStringLengthValidationDirective
  ],
  exports: [
    FormYearValidationDirective,
    FormPriceValidationDirective,
    FormStringLengthValidationDirective
  ]
})
export class DirectivesExportModule { }
