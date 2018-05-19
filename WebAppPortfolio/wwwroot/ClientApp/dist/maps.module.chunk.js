webpackJsonp(["maps.module"],{

/***/ "./ClientApp/app/pages/maps/google-maps/google-maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\">\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\"></agm-marker>\r\n        </agm-map>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/maps/google-maps/google-maps.component.ts":
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
var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent(appSettings) {
        this.appSettings = appSettings;
        this.lat = 45.421530;
        this.lng = -75.697193;
        this.zoom = 7;
        this.settings = this.appSettings.settings;
    }
    GoogleMapsComponent = __decorate([
        core_1.Component({
            selector: 'app-google-maps',
            template: __webpack_require__("./ClientApp/app/pages/maps/google-maps/google-maps.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());
exports.GoogleMapsComponent = GoogleMapsComponent;


/***/ }),

/***/ "./ClientApp/app/pages/maps/maps.module.ts":
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
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var google_maps_component_1 = __webpack_require__("./ClientApp/app/pages/maps/google-maps/google-maps.component.ts");
exports.routes = [
    { path: '', redirectTo: 'googlemaps', pathMatch: 'full' },
    { path: 'googlemaps', component: google_maps_component_1.GoogleMapsComponent, data: { breadcrumb: 'Google Maps' } },
];
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                core_2.AgmCoreModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                google_maps_component_1.GoogleMapsComponent
            ]
        })
    ], MapsModule);
    return MapsModule;
}());
exports.MapsModule = MapsModule;


/***/ })

});
//# sourceMappingURL=maps.module.chunk.js.map