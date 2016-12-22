import { SingleItemComponent } from './single-item/single-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

let routes = [
    { path: 'gallery/:id', component: SingleItemComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemsRouterModule { }