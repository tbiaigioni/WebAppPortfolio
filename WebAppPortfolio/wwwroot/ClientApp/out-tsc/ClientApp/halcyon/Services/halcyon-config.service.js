"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HalcyonConfigService = /** @class */ (function () {
    function HalcyonConfigService() {
        this.showLanguageSelector = true;
        this.showUserControls = true;
        this.showStatusBar = true;
        this.showStatusBarBreakpoint = 0;
        this.socialIcons = new Array();
    }
    HalcyonConfigService.prototype.configure = function (settings) {
        Object.assign(this, settings);
    };
    HalcyonConfigService = __decorate([
        core_1.Injectable()
    ], HalcyonConfigService);
    return HalcyonConfigService;
}());
exports.HalcyonConfigService = HalcyonConfigService;
//# sourceMappingURL=halcyon-config.service.js.map