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
var router_1 = require("@angular/router");
var app_settings_1 = require("../../../app.settings");
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    NotFoundComponent.prototype.searchResult = function () {
        this.router.navigate(['/search']);
    };
    NotFoundComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    NotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-not-found',
            templateUrl: './not-found.component.html'
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, router_1.Router])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=not-found.component.js.map