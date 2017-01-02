import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

let routes = [
    // {path: route, component: component}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatisticsRouterModule { }