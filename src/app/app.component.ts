import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private toastr: ToastsManager,
    private vRef: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vRef);
  }

  toastrError(msg: string): void {
    this.toastr.error(msg);
  }
}
