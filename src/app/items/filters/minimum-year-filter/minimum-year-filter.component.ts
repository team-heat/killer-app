import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minimum-year-filter',
  templateUrl: './minimum-year-filter.component.html',
  styleUrls: ['./minimum-year-filter.component.scss']
})
export class MinimumYearFilterComponent {

  @Output() onMinimumYearFilter: EventEmitter<number> = new EventEmitter<number>();

  minimumYearFilterValue: number;

  constructor() { }

  updateValue() {
    this.onMinimumYearFilter.emit(+this.minimumYearFilterValue);
  }

  updateValidation(value: number): void {
    if (!value) {
      this.minimumYearFilterValue = undefined;
    } else {
      this.minimumYearFilterValue = +value;
    }
  }
}
