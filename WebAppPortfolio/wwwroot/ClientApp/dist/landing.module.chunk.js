webpackJsonp(["landing.module"],{

/***/ "./ClientApp/app/pages/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"landing-header\"> \n  <p class=\"logo\">GRADUS</p>\n  <p class=\"intro-text\">Angular 5 Material Design Admin Template</p>            \n  <p class=\"desc m-0\">Start creating your app with GRADUS template</p>\n  <p class=\"desc\"> 8 layouts, 6 color styles, 35+ pages</p>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n     <button mat-raised-button color=\"primary\" (click)=\"scrollToDemos()\">View demos</button>\n     <a mat-raised-button color=\"accent\" href=\"https://themeforest.net/item/gradus-angular-5-material-design-admin-template/21241729\" target=\"blank\">Purchase now</a>\n  </div> \n</div>\n\n<div class=\"container\">\n  <h2 class=\"muted-text\">Check out our demo styles</h2>\n  <p class=\"muted-text desc\">Fully responsive, organized folder structure, clean & customizable code, easy to use and much more...</p>\n  <div fxLayout=\"row wrap\" class=\"py-1\">\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \n        <p class=\"text\">Vertical default menu</p>\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','default', false)\" class=\"link\">\n            <img src=\"assets/img/landing/vertical-default.jpg\">        \n        </a>                \n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\n        <p class=\"text\">Horizontal default menu</p>\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','default', false)\" class=\"link\">\n            <img src=\"assets/img/landing/horizontal-default.jpg\">        \n        </a>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \n        <p class=\"text\">Vertical compact menu</p>\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','compact', false)\" class=\"link\">\n            <img src=\"assets/img/landing/vertical-compact.jpg\">        \n        </a>                \n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\n        <p class=\"text\">Horizontal compact menu</p>\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','compact', false)\" class=\"link\">\n            <img src=\"assets/img/landing/horizontal-compact.jpg\">        \n        </a>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \n        <p class=\"text\">Vertical mini menu</p>\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','mini', false)\" class=\"link\">\n            <img src=\"assets/img/landing/vertical-mini.jpg\">        \n        </a>                \n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\n        <p class=\"text\">Horizontal mini menu</p>\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','mini', false)\" class=\"link\">\n            <img src=\"assets/img/landing/horizontal-mini.jpg\">        \n        </a>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \n        <p class=\"text\">Vertical menu RTL</p>\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','default', true)\" class=\"link\">\n            <img src=\"assets/img/landing/vertical-rtl.jpg\">        \n        </a>                \n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\n        <p class=\"text\">Horizontal menu RTL</p>\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','default', true)\" class=\"link\">\n            <img src=\"assets/img/landing/horizontal-rtl.jpg\">        \n        </a>\n    </div>\n  </div> \n  <h2 class=\"muted-text\">Skins</h2> \n  <div fxLayout=\"row wrap\" class=\"py-1\">\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \n        <a routerLink=\"/\" (click)=\"changeTheme('indigo-light')\" class=\"link\">\n            <img src=\"assets/img/landing/vertical-default.jpg\">        \n        </a>                \n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \n        <a routerLink=\"/\" (click)=\"changeTheme('teal-light')\" class=\"link\">\n            <img src=\"assets/img/landing/teal-light.jpg\">        \n        </a>                \n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \n        <a routerLink=\"/\" (click)=\"changeTheme('red-light')\" class=\"link\">\n            <img src=\"assets/img/landing/red-light.jpg\">        \n        </a>                \n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \n        <a routerLink=\"/\" (click)=\"changeTheme('blue-dark')\" class=\"link\">\n            <img src=\"assets/img/landing/blue-dark.jpg\">        \n        </a>                \n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \n        <a routerLink=\"/\" (click)=\"changeTheme('green-dark')\" class=\"link\">\n            <img src=\"assets/img/landing/green-dark.jpg\">        \n        </a>                \n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \n        <a routerLink=\"/\" (click)=\"changeTheme('pink-dark')\" class=\"link\">\n            <img src=\"assets/img/landing/pink-dark.jpg\">        \n        </a>                \n    </div>\n  </div>     \n</div>\n\n<div class=\"bg-primary w-100\">\n  <div fxLayout.xs=\"column\" fxLayout.gt-xs=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"landing-footer\">\n    <span>Copyright ©2018 All Rights Reserved</span>\n    <span>made by <a mat-button href=\"https://themeforest.net/user/theme_season/portfolio\" target=\"blank\">ThemeSeason</a></span>\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/landing/landing.component.scss":
/***/ (function(module, exports) {

module.exports = ".landing-header {\n  position: relative;\n  color: #fff;\n  height: 520px;\n  text-align: center; }\n  .landing-header:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 520px;\n    background-color: #242424;\n    background-image: url('header.6db18e5f8cfcdbdf8394.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position-y: center;\n    z-index: -1; }\n  .landing-header p {\n    margin-bottom: 1rem; }\n  .landing-header .logo {\n    font-size: 48px; }\n  .landing-header .intro-text {\n    font-size: 36px; }\n  .landing-header .desc {\n    font-size: 16px;\n    font-weight: 300;\n    letter-spacing: 0.03rem; }\n  .landing-header .mat-raised-button {\n    margin: 0 14px; }\n  .container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px 32px;\n  text-align: center; }\n  .container h2 {\n    font-size: 2rem; }\n  .container .desc {\n    font-size: 1.25rem; }\n  .container .demo {\n    padding: 16px; }\n  .container .demo .text {\n      font-size: 16px;\n      text-transform: uppercase;\n      margin-bottom: 1rem; }\n  .container .demo .link {\n      display: block; }\n  .container .demo .link img {\n        width: 100%;\n        -webkit-box-shadow: 0px 1px 5px 1px #999;\n                box-shadow: 0px 1px 5px 1px #999;\n        -webkit-transition: .2s;\n        transition: .2s; }\n  .container .demo .link img:hover {\n          -webkit-box-shadow: 0px 1px 5px 5px #999;\n                  box-shadow: 0px 1px 5px 5px #999; }\n  .landing-footer {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px; }\n  @media (max-width: 767px) {\n  .landing-header .logo {\n    font-size: 36px; }\n  .landing-header .intro-text {\n    font-size: 24px; } }\n"

/***/ }),

/***/ "./ClientApp/app/pages/landing/landing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var LandingComponent = /** @class */ (function () {
    function LandingComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.settings.rtl = false;
    };
    LandingComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    LandingComponent.prototype.scrollToDemos = function () {
        setTimeout(function () { window.scrollTo(0, 520); });
    };
    LandingComponent.prototype.changeLayout = function (menu, menuType, isRtl) {
        this.settings.menu = menu;
        this.settings.menuType = menuType;
        this.settings.rtl = isRtl;
        this.settings.theme = 'indigo-light';
    };
    LandingComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'app-landing',
            template: __webpack_require__("./ClientApp/app/pages/landing/landing.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;


/***/ }),

/***/ "./ClientApp/app/pages/landing/landing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var landing_component_1 = __webpack_require__("./ClientApp/app/pages/landing/landing.component.ts");
exports.routes = [
    { path: '', component: landing_component_1.LandingComponent, pathMatch: 'full' }
];
var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                shared_module_1.SharedModule
            ],
            declarations: [
                landing_component_1.LandingComponent
            ]
        })
    ], LandingModule);
    return LandingModule;
}());
exports.LandingModule = LandingModule;


/***/ })

});
//# sourceMappingURL=landing.module.chunk.js.map