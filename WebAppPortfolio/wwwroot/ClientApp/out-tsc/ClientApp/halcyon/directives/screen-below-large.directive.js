"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var screen_service_1 = require("../Services/screen.service");
var ScreenBelowLarge = /** @class */ (function () {
    function ScreenBelowLarge(viewContainer, template, screenService) {
        var _this = this;
        this.viewContainer = viewContainer;
        this.template = template;
        this.screenService = screenService;
        this.hasView = false;
        this.screenSubscription = screenService.resize$.subscribe(function () { return _this.onResize(); });
    }
    Object.defineProperty(ScreenBelowLarge.prototype, "screenBelowLarge", {
        set: function (condition) {
            // ignore the passed condition and set it based on screen size
            condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;
            if (condition && !this.hasView) {
                this.hasView = true;
                this.viewContainer.createEmbeddedView(this.template);
            }
            else if (!condition && this.hasView) {
                this.hasView = false;
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    ScreenBelowLarge.prototype.ngOnDestroy = function () {
        this.screenSubscription.unsubscribe();
    };
    ScreenBelowLarge.prototype.onResize = function () {
        // trigger the setter
        this.screenBelowLarge = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ScreenBelowLarge.prototype, "screenBelowLarge", null);
    ScreenBelowLarge = __decorate([
        core_1.Directive({ selector: '[screenBelowLarge]' }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef,
            core_1.TemplateRef,
            screen_service_1.ScreenService])
    ], ScreenBelowLarge);
    return ScreenBelowLarge;
}());
exports.ScreenBelowLarge = ScreenBelowLarge;
//# sourceMappingURL=screen-below-large.directive.js.map