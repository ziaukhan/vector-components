/// <reference path="./../../typings/tsd.d.ts" />

import {Component, bootstrap } from 'angular2/angular2';
import {VButton} from './VButton';


@Component({
    selector: 'my-app',
    directives: [VButton],
    template: `
        <h1>Vector Components:</h1>
            <vbutton stroke='white' radius='40' stroke-width='1' transparancy='1'  fill='red' ></vbutton>
        `
})
class AppComponent { 
    constructor() {
        
    }
    
    
}
bootstrap(AppComponent);