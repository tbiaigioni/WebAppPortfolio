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
var ngx_responsive_1 = require("ngx-responsive");
var ContentComponent = /** @class */ (function () {
    function ContentComponent(ieInfoRx, browserInfoRx, devicesInfoRx, devicesStandardInfoRx, orientationInfoRx, responsiveSizeInfoRx, userAgentInfoRx) {
        this.ieInfoRx = ieInfoRx;
        this.browserInfoRx = browserInfoRx;
        this.devicesInfoRx = devicesInfoRx;
        this.devicesStandardInfoRx = devicesStandardInfoRx;
        this.orientationInfoRx = orientationInfoRx;
        this.responsiveSizeInfoRx = responsiveSizeInfoRx;
        this.userAgentInfoRx = userAgentInfoRx;
        this._subscriptions = [];
    }
    ContentComponent.prototype.ngOnInit = function () {
        this._subscribe();
        this.ieInfoRx.connect();
        this.browserInfoRx.connect();
        this.devicesInfoRx.connect();
        this.devicesStandardInfoRx.connect();
        this.orientationInfoRx.connect();
        this.responsiveSizeInfoRx.connect();
        this.userAgentInfoRx.connect();
    };
    ContentComponent.prototype._subscribe = function () {
        this._subscriptions.push(this.ieInfoRx.getIE.subscribe(function (data) {
            console.log('this.ieInfoRx.getIE ===>', data);
        }, function (err) {
            console.log('Error', err);
        }));
        this._subscriptions.push(this.browserInfoRx.getBrowser.subscribe(function (data) {
            console.log('this.browserInfoRx.getBrowser ===>', data);
        }, function (err) {
            console.log('Error', err);
        }));
        this._subscriptions.push(this.devicesInfoRx.getDevice.subscribe(function (data) {
            console.log('this.devicesInfoRx.getDevice ===>', data);
        }, function (err) {
            console.log('Error', err);
        }));
        this._subscriptions.push(this.devicesStandardInfoRx.getStandardDevice.subscribe(function (data) {
            console.log('this.devicesStandardInfoRx.subject$ ===>', data);
        }, function (err) {
            console.log('Error', err);
        }));
        this._subscriptions.push(this.orientationInfoRx.getOrientation.subscribe(function (data) {
            console.log('this.orientationInfoRx.getOrientation ===>', data);
        }, function (err) {
            console.log('Error', err);
        }));
        this._subscriptions.push(this.responsiveSizeInfoRx.getResponsiveSize.subscribe(function (data) {
            console.log('this.responsiveSizeInfoRx.getResponsiveSize ===>', data);
        }, function (err) {
            console.log('Error', err);
        }));
        this._subscriptions.push(this.userAgentInfoRx.getUserAgent.subscribe(function (data) {
            console.log('this.userAgentInfoRx.getUserAgent ===>', data);
        }, function (err) {
            console.log('Error', err);
        }));
    };
    ContentComponent.prototype._unsubscribe = function () {
        this._subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    ContentComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe();
        this.ieInfoRx.disconnect();
        this.browserInfoRx.disconnect();
        this.devicesInfoRx.disconnect();
        this.devicesStandardInfoRx.disconnect();
        this.orientationInfoRx.disconnect();
        this.responsiveSizeInfoRx.disconnect();
        this.userAgentInfoRx.disconnect();
    };
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'halcyon-content',
            templateUrl: "./content.component.html",
            styleUrls: ["./content.component.css"]
        }),
        __metadata("design:paramtypes", [ngx_responsive_1.IeInfoRx,
            ngx_responsive_1.BrowserInfoRx,
            ngx_responsive_1.DeviceInfoRx,
            ngx_responsive_1.DeviceStandardInfoRx,
            ngx_responsive_1.OrientationInfoRx,
            ngx_responsive_1.ResponsiveSizeInfoRx,
            ngx_responsive_1.UserAgentInfoRx])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map