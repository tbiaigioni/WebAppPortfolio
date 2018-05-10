"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Halcyonbodycomponent = require("./halcyon-body/halcyon-body.component");
var HalcyonBodyComponent = Halcyonbodycomponent.HalcyonBodyComponent;
var content_component_1 = require("./Content/content.component");
var HalcyonModule = /** @class */ (function () {
    function HalcyonModule() {
    }
    HalcyonModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            exports: [
                HalcyonBodyComponent
            ],
            declarations: [
                HalcyonBodyComponent,
                content_component_1.ContentComponent
            ]
        })
    ], HalcyonModule);
    return HalcyonModule;
}());
exports.HalcyonModule = HalcyonModule;
//# sourceMappingURL=halcyon.module.js.map