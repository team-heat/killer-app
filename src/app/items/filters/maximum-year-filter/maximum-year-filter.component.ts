import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maximum-year-filter',
  templateUrl: './maximum-year-filter.component.html',
  styleUrls: ['./maximum-year-filter.component.scss']
})
export class MaximumYearFilterComponent {

  @Output() onMaximumYearFilter: EventEmitter<number> = new EventEmitter<number>();

  maximumYearFilterValue: number;

  constructor() { }

  updateValue() {
    this.onMaximumYearFilter.emit(+this.maximumYearFilterValue);
  }
}
