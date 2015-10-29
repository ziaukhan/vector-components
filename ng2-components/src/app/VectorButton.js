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
//https://github.com/angular/angular/issues/4506
var VectorButton = (function () {
    function VectorButton(elementRef) {
        this.elementRef = elementRef;
    }
    VectorButton.prototype.afterViewInit = function () {
        console.log("afterViewInit() called");
        d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
    };
    VectorButton = __decorate([
        angular2_1.Component({
            selector: 'vector-button',
            template: "<div>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"100\" width=\"100\">\n        <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />\n        Sorry, your browser does not support inline SVG.  \n    </svg></div>\n    ",
            providers: [angular2_1.ElementRef]
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], VectorButton);
    return VectorButton;
})();
exports.VectorButton = VectorButton;
//# sourceMappingURL=VectorButton.js.map