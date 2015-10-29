/// <reference path="./../../typings/tsd.d.ts" />

import {Component, bootstrap, ElementRef} from 'angular2/angular2';
import {VectorButton} from './VectorButton';


@Component({
    selector: 'my-app',
    directives: [VectorButton],
    template: `
        <h1>Vector Components:</h1>
            <vector-button></vector-button>
        `
})
class AppComponent { 
    constructor() {
        
    }
    
    
}
bootstrap(AppComponent);