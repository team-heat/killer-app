import { RouterModule, Routes } from '@angular/router';

import { AddListingComponent } from './add-listing.component';
import { CommonModule } from '@angular/common';
import { ItemListingService } from '../services/item-listing.service';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'submit', component: AddListingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  declarations: [AddListingComponent],
  providers: [ItemListingService]
})
export class AddListingModule { }
