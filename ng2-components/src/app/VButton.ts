/// <reference path="./../../typings/tsd.d.ts" />


import {Component, bootstrap, ElementRef, CORE_DIRECTIVES, Renderer, AfterViewInit} from 'angular2/angular2';
import {VButtonDelegate} from './VButtonDelegate';
import {VButtonSettings} from './VButtonSettings';


@Component({
    selector: 'vbutton',
    inputs: ['radius', 'stroke', 'strokeWidth', 'transparancy', 'fill'],
    template: `<div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    version="1.1" height="500" width="500">
                    <text x="80" y="30" fill="white" [attr.display]="textDisplay">{{text}}</text>
                    <circle cx="100" cy="100" [attr.r]="radius" [attr.stroke]="stroke" [attr.stroke-width]="strokeWidth" 
                        [attr.fill-opacity]="1-transparancy" [attr.fill]="fill" (mouseenter)='onToogle()' (mouseleave)='onToogle()' />
                    
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
    
    protected textVisible: boolean;
    protected textDisplay: string;
    
    rootElement: Node;
    
    public radius: number = 40;
    public stroke = "white";
    public strokeWidth: number = 1;
    public transparancy: number = 1;
    public fill: string = "blue";
    public text: string = "Twitter";
    
    constructor(elementRef: ElementRef, renderer: Renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.textVisible = true;
        this.textDisplay = "none";
    }
    
    showText(){
        
    }
    
   
    
    onToogle(){
        if(this.textVisible){
            this.textVisible = false;
            this.textDisplay = "true";
        }
        else {
            this.textVisible = true;
            this.textDisplay = "none";
        }
        
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