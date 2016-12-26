import { AddListingComponent } from './add-listing.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemListingService } from '../services/item-listing.service';

@NgModule({
  imports: [CommonModule],
  declarations: [AddListingComponent],
  providers: [ItemListingService]
})
export class AddListingModule { }
