/// <reference path="./../../typings/tsd.d.ts" />

import {VAbstractComponentDelegate} from './VAbstractComponentDelegate';
import {VButtonSettings} from './VButtonSettings';

export class VButtonDelegate extends VAbstractComponentDelegate{
    
    svg: SVGElement;
    
    get mySettings() : VButtonSettings {
        return this.settings as VButtonSettings;
    }
	 
	constructor(settings: VButtonSettings){
        this.svg = settings.rootElement.firstChild as SVGElement;
        super(settings);
	}
	
	init(){
        console.log("VButtonDelegate.Init Called");
        console.log("SVG Element: " + this.svg);
        let s = Snap(this.svg);
        let bigCircle = s.circle(200, 200, 4);
        bigCircle.attr({
            fill: "#bada55",
            stroke: "#000",
            strokeWidth: 5
        });
        bigCircle.animate({r: 100}, 1000);
	}
}