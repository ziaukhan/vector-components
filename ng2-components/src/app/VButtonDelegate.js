/// <reference path="./../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VAbstractComponentDelegate_1 = require('./VAbstractComponentDelegate');
var VButtonDelegate = (function (_super) {
    __extends(VButtonDelegate, _super);
    function VButtonDelegate(settings) {
        this.svg = settings.rootElement.firstChild;
        _super.call(this, settings);
    }
    Object.defineProperty(VButtonDelegate.prototype, "mySettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    VButtonDelegate.prototype.init = function () {
        console.log("VButtonDelegate.Init Called");
        console.log("SVG Element: " + this.svg);
        var s = Snap(this.svg);
        /*let bigCircle = s.circle(200, 200, 4);
        bigCircle.attr({
            fill: "#bada55",
            stroke: "#000",
            strokeWidth: 5
        });
        bigCircle.animate({r: 100}, 1000);*/
    };
    return VButtonDelegate;
})(VAbstractComponentDelegate_1.VAbstractComponentDelegate);
exports.VButtonDelegate = VButtonDelegate;
//# sourceMappingURL=VButtonDelegate.js.map