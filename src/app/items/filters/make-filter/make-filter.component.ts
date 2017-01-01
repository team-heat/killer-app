import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-make-filter',
  templateUrl: './make-filter.component.html',
  styleUrls: ['./make-filter.component.scss']
})
export class MakeFilterComponent {

  @Output() onMakeFilter: EventEmitter<string> = new EventEmitter<string>();

  private makeFilterValue: string;

  constructor() { }

  onModelChange() {
    this.onMakeFilter.emit(this.makeFilterValue);
  }
}
