/// <reference path="./../../typings/tsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var VButtonDelegate_1 = require('./VButtonDelegate');
var VButton = (function () {
    function VButton(elementRef, renderer) {
        this.radius = 40;
        this.stroke = "white";
        this.strokeWidth = 1;
        this.transparancy = 1;
        this.fill = "blue";
        this.text = "Twitter";
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.textVisible = true;
        this.textDisplay = "none";
    }
    VButton.prototype.showText = function () {
    };
    VButton.prototype.onToogle = function () {
        if (this.textVisible) {
            this.textVisible = false;
            this.textDisplay = "true";
        }
        else {
            this.textVisible = true;
            this.textDisplay = "none";
        }
    };
    VButton.prototype.afterViewInit = function () {
        console.log("afterViewInit() called");
        var aa = this.renderer.getNativeElementSync(this.elementRef).firstChild.firstChild;
        console.log("AAAAA" + aa);
        var nativeElement = this.elementRef.nativeElement;
        if (nativeElement) {
            console.log("VButton: " + nativeElement.firstChild.firstChild);
            this.rootElement = nativeElement.firstChild;
            this.componentDelegate = new VButtonDelegate_1.VButtonDelegate(this);
        }
    };
    VButton = __decorate([
        angular2_1.Component({
            selector: 'vbutton',
            inputs: ['radius', 'stroke', 'strokeWidth', 'transparancy', 'fill'],
            template: "<div><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n                    version=\"1.1\" height=\"500\" width=\"500\">\n                    <text x=\"80\" y=\"30\" fill=\"white\" [attr.display]=\"textDisplay\">{{text}}</text>\n                    <circle cx=\"100\" cy=\"100\" [attr.r]=\"radius\" [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\" \n                        [attr.fill-opacity]=\"1-transparancy\" [attr.fill]=\"fill\" (mouseenter)='onToogle()' (mouseleave)='onToogle()' />\n                    \n                    </svg>\n                    <div>{{fill}}</div>\n               </div>\n                ",
            providers: [angular2_1.ElementRef],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef, angular2_1.Renderer])
    ], VButton);
    return VButton;
})();
exports.VButton = VButton;
//# sourceMappingURL=VButton.js.map