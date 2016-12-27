import { FormDefaultValueDirective } from './../directives/form-default-value.directive';
import { RouterModule, Routes } from '@angular/router';

import { AddListingComponent } from './add-listing.component';
import { CommonModule } from '@angular/common';
import { ItemListingService } from '../services/item-listing.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemListingFactoryService } from '../services/item-listing-factory.service';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';

const routes: Routes = [
  { path: 'submit', component: AddListingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)],
  declarations: [
    AddListingComponent,
    FormDefaultValueDirective
  ],
  providers: [
    ItemListingService,
    ItemListingFactoryService
  ]
})
export class AddListingModule { }
