import {Component, bootstrap, ElementRef} from 'angular2/angular2';


//https://github.com/angular/angular/issues/4506

@Component({
    selector: 'vector-button',
    
    template: `<div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        Sorry, your browser does not support inline SVG.  
    </svg></div>
    `,
    providers: [ElementRef]
})
export class VectorButton { 
    elementRef: ElementRef;
    
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    
    afterViewInit(){
        console.log("afterViewInit() called");
        d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
    }
}