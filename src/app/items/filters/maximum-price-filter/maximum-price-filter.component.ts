import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maximum-price-filter',
  templateUrl: './maximum-price-filter.component.html',
  styleUrls: ['./maximum-price-filter.component.scss']
})
export class MaximumPriceFilterComponent {

  @Output() onMaximumPriceFilter: EventEmitter<number> = new EventEmitter<number>();

  maximumPriceFilterValue: number;

  constructor() { }

  updateValue() {
    this.onMaximumPriceFilter.emit(+this.maximumPriceFilterValue);
  }

  validationUpdate(value: any) {
    if (!value) {
      this.maximumPriceFilterValue = undefined;
    } else {
      this.maximumPriceFilterValue = +value;
    }
  }
}
