import { AddListingComponent } from './add-listing.component';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { FormDefaultValueDirective } from './../directives/form-default-value.directive';
import { FormsModule } from '@angular/forms';
import { FormYearValidationDirective } from './../directives/form-year-validation.directive';
import { ItemListingFactoryService } from '../services/item-listing-factory.service';
import { ItemListingService } from '../services/item-listing.service';
import { NgModule } from '@angular/core';
import { NgUploaderModule } from 'ngx-uploader';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'submit', component: AddListingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgUploaderModule,
    RouterModule.forChild(routes)],
  declarations: [
    AddListingComponent,
    FormDefaultValueDirective,
    FormYearValidationDirective,
    FileUploaderComponent
  ],
  providers: [
    ItemListingService,
    ItemListingFactoryService
  ],
  exports: [
    FileUploaderComponent,
    FormYearValidationDirective
  ]
})
export class AddListingModule { }
