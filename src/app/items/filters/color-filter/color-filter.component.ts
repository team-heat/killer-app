import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.scss']
})
export class ColorFilterComponent {

@Output() onColorFilter: EventEmitter<string> = new EventEmitter<string>();

  colorFilterValue: string;

  constructor() { }

  updateValue() {
    this.onColorFilter.emit(this.colorFilterValue);
  }
}
