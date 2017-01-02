import { FormPriceValidationDirective } from './form-price-validation.directive';
import { FormYearValidationDirective } from './form-year-validation.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FormYearValidationDirective,
    FormPriceValidationDirective
  ],
  exports: [
    FormYearValidationDirective,
    FormPriceValidationDirective
  ]
})
export class DirectivesExportModule { }
