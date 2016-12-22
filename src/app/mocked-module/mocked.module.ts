import { NgModule } from '@angular/core';

import { MockedComponent } from './mocked.component';
import { MockedRouterModule } from './mocked.routes';

@NgModule({
    imports: [
        MockedRouterModule
    ],
    providers: [],
    declarations: [
        MockedComponent
    ]
})

export class MockedModule {

}