/// <reference path="./../../typings/tsd.d.ts" />


import {Component, bootstrap, ElementRef, CORE_DIRECTIVES, Renderer, AfterViewInit} from 'angular2/angular2';
import {VButtonDelegate} from './VButtonDelegate';
import {VButtonSettings} from './VButtonSettings';


@Component({
    selector: 'vbutton',
    inputs: ['radius', 'stroke', 'strokeWidth', 'transparancy', 'fill'],
    template: `<div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    version="1.1" height="500" width="500">
                    

                    <circle cx="100" cy="100" [attr.r]="radius" [attr.stroke]="stroke" [attr.stroke-width]="strokeWidth" 
                        [attr.fill-opacity]="transparancy - 1" [attr.fill]="fill" />
                    
                    </svg>
                    <div>{{fill}}</div>
               </div>
                `,
    providers: [ElementRef],
    directives: [CORE_DIRECTIVES]
})
export class VButton implements AfterViewInit, VButtonSettings { 
    protected elementRef: ElementRef;
    protected renderer: Renderer;//https://github.com/angular/angular/issues/4973
    protected componentDelegate: VButtonDelegate;
    
    rootElement: Node;
    
    public radius: number = 40;
    public stroke = "white";
    public stokeWidth: number = 1;
    public transparancy: number = 1;
    public fill: string = "blue";
    
    constructor(elementRef: ElementRef, renderer: Renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        
    }
    
    onClick(){
        alert("hello");
        
    }
    
    afterViewInit(){
        console.log("afterViewInit() called");
        var aa = this.renderer.getNativeElementSync(this.elementRef).firstChild.firstChild;
        console.log("AAAAA" + aa);
        
        let nativeElement = this.elementRef.nativeElement;
        if(nativeElement){
            console.log("VButton: " + nativeElement.firstChild.firstChild);
            this.rootElement = nativeElement.firstChild;
            this.componentDelegate = new VButtonDelegate(this);
        }
        
    }
}