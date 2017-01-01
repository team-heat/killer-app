import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-make-filter',
  templateUrl: './make-filter.component.html',
  styleUrls: ['./make-filter.component.scss']
})
export class MakeFilterComponent {

  @Output() onMakeFilter: EventEmitter<string> = new EventEmitter<string>();

  makeFilterValue: string;

  constructor() { }

  updateValue() {
    console.log(this.makeFilterValue);
    this.onMakeFilter.emit(this.makeFilterValue);
  }
}
