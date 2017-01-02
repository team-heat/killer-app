import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minimum-price-filter',
  templateUrl: './minimum-price-filter.component.html',
  styleUrls: ['./minimum-price-filter.component.scss']
})
export class MinimumPriceFilterComponent {

  @Output() onMinimumPriceFilter: EventEmitter<number> = new EventEmitter<number>();

  minimumPriceFilterValue: number;

  constructor() { }

  updateValue() {
    this.onMinimumPriceFilter.emit(+this.minimumPriceFilterValue);
  }

  validationUpdate(value: any) {
    if (!value) {
      this.minimumPriceFilterValue = undefined;
    } else {
      this.minimumPriceFilterValue = +value;
    }
  }
}
