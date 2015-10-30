/// <reference path="./../../typings/tsd.d.ts" />


import {Component, bootstrap, ElementRef, CORE_DIRECTIVES, Renderer, AfterViewInit} from 'angular2/angular2';
import {VButtonDelegate} from './VButtonDelegate';
import {VButtonSettings} from './VButtonSettings';


@Component({
    selector: 'vbutton',
    
    template: `<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="1000" width="1000">
                    </svg>
               </div>
                `,
    providers: [ElementRef],
    directives: [CORE_DIRECTIVES]
})
export class VButton implements AfterViewInit, VButtonSettings { 
    protected elementRef: ElementRef;
    protected renderer: Renderer;
    protected componentDelegate: VButtonDelegate;
    
    rootElement: Node;
    
    constructor(elementRef: ElementRef, renderer: Renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    
    onClick(){
        alert("hello");
        
    }
    
    afterViewInit(){
        console.log("afterViewInit() called");
        let nativeElement = this.elementRef.nativeElement;
        if(nativeElement){
            console.log("VButton: " + nativeElement.firstChild.firstChild);
            this.rootElement = nativeElement.firstChild;
            this.componentDelegate = new VButtonDelegate(this);
        }
        
    }
}