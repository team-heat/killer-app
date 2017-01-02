import { PriceLessThenPipe } from './../../pipes/price-less-then.pipe';
import { YearLessThenPipe } from './../../pipes/year-less-then.pipe';
import { PriceGreaterThenPipe } from './../../pipes/price-greater-then.pipe';
import { YearGreaterThenPipe } from './../../pipes/year-greater-then.pipe';
import { ExteriorColorFilterPipe } from './../../pipes/exterior-color.pipe';
import { MakeFilterPipe } from './../../pipes/make-filter.pipe';
import { UserStorageService } from './../../services/user-storage.service';
import { Component, OnInit } from '@angular/core';

import { ItemListing } from './../../models/item-listing.model';

import { ItemListingService } from './../../services/item-listing.service';

@Component({
  selector: 'app-items-collection',
  templateUrl: './items-collection.component.html',
  styleUrls: ['./items-collection.component.scss']
})

export class ItemsCollectionComponent implements OnInit {

  items: ItemListing[];
  originalItems: ItemListing[];
  activeItem: ItemListing;
  activeItemIndex: number;

  makeFilterPipe = new MakeFilterPipe();
  colorFilterPipe = new ExteriorColorFilterPipe();
  minimumYearPipe = new YearGreaterThenPipe();
  maximumYearPipe = new YearLessThenPipe();
  minimuPricePipe = new PriceGreaterThenPipe();
  maximumPricePipe = new PriceLessThenPipe();

  makeFilter: string = '';
  colorFilter: string = '';
  minimumYearFilter: number = 0;
  maximumYearFilter: number = 0;
  minimumPriceFilter: number = 0;
  maximumPriceFilter: number = 0;

  constructor(
    private userStorage: UserStorageService,
    private service: ItemListingService) {

    this.items = [];
    this.originalItems = [];
    this.activeItemIndex = 0;
  }

  onPrevious() {
    if (this.activeItemIndex > 0) {
      this.activeItemIndex -= 1;
    } else {
      this.activeItemIndex = this.items.length - 1;
    }

    this.activeItem = this.items[this.activeItemIndex];
  }

  onNext() {
    if (this.activeItemIndex < this.items.length - 1) {
      this.activeItemIndex += 1;
    } else {
      this.activeItemIndex = 0;
    }

    this.activeItem = this.items[this.activeItemIndex];
  }

  onMakeFilter(makeFilterValue: string): void {
    this.makeFilter = makeFilterValue;
    this.applyFiltersToItems();
  }

  onColorFilter(colorFilterValue: string): void {
    this.colorFilter = colorFilterValue;
    this.applyFiltersToItems();
  }

  onMinimumYearFilter(minimumYearFilterValue: number): void {
    this.minimumYearFilter = minimumYearFilterValue;
    this.applyFiltersToItems();
  }

  onMaximumYearFilter(maximumYearFilterValue: number): void {
    this.maximumYearFilter = maximumYearFilterValue;
    this.applyFiltersToItems();
  }

  onMinimumPriceFilter(minimumPriceFilterValue: number): void {
    this.minimumPriceFilter = minimumPriceFilterValue;
    this.applyFiltersToItems();
  }

  onMaximumPriceFilter(maximumPriceFilterValue: number): void {
    this.maximumPriceFilter = maximumPriceFilterValue;
    this.applyFiltersToItems();
  }

  applyFiltersToItems() {
    this.items = [...this.originalItems];
    if (this.makeFilter) {
      this.items = this.makeFilterPipe.transform(this.items, this.makeFilter);
    }

    if (this.colorFilter) {
      this.items = this.colorFilterPipe.transform(this.items, this.colorFilter);
    }

    if (this.minimumYearFilter) {
      this.items = this.minimumYearPipe.transform(this.items, this.minimumYearFilter);
    }

    if (this.maximumYearFilter) {
      this.items = this.maximumYearPipe.transform(this.items, this.maximumYearFilter);
    }

    if (this.minimumPriceFilter) {
      this.items = this.minimuPricePipe.transform(this.items, this.minimumPriceFilter);
    }

    if (this.maximumPriceFilter) {
      this.items = this.maximumPricePipe.transform(this.items, this.maximumPriceFilter);
    }

    this.activeItem = this.items[0];
  }

  ngOnInit() {
    this.service.getItemsCollection()
      .map(response => response.json())
      .subscribe((response) => {
        this.originalItems = response;
        this.items = [...this.originalItems];
      }, (err) => {
        console.log(err);
      }, () => {
        if (this.items.length > 0) {
          this.activeItem = this.items[this.activeItemIndex];
        }
      });
  }
}
