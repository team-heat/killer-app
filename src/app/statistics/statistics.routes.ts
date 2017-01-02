import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

let routes = [
    { path: 'statistics/items/mostExpensiveItems', component: component },
    { path: 'statistics/items/mostSalledMakes', component: component },
    { path: 'statistics/items/mostOfferedItems', component: component },
    { path: 'statistics/items/mostCommentedItems', component: component },
    { path: 'statistics/users/topSellers', component: component },
    { path: 'statistics/users/topBuyers', component: component },
    { path: 'statistics/users/topActiveUsers', component: component }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatisticsRouterModule { }