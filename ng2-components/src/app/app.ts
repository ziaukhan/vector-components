/// <reference path="./../../typings/tsd.d.ts" />

import {Component, bootstrap } from 'angular2/angular2';
import {VButton} from './VButton';


@Component({
    selector: 'my-app',
    directives: [VButton],
    template: `
        <h1>Vector Components:</h1>
            <vbutton></vbutton>
        `
})
class AppComponent { 
    constructor() {
        
    }
    
    
}
bootstrap(AppComponent);