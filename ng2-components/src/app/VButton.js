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
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    VButton.prototype.onClick = function () {
        alert("hello");
    };
    VButton.prototype.afterViewInit = function () {
        console.log("afterViewInit() called");
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
            template: "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"1000\" width=\"1000\">\n                    </svg>\n               </div>\n                ",
            providers: [angular2_1.ElementRef],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef, angular2_1.Renderer])
    ], VButton);
    return VButton;
})();
exports.VButton = VButton;
//# sourceMappingURL=VButton.js.map