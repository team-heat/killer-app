import { NgModule } from '@angular/core';
import { Router } from '@angular/router'

import { SingleItemComponent } from './single-item/single-item.component';

let itemsRoutes = [
    { path: 'gallery/:id', SingleItemComponent }
]

@NgModule({
    imports: [],
    declarations: [SingleItemComponent],
    providers: []
})

export class ItemsModule {

}