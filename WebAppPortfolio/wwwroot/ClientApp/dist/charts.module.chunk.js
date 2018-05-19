webpackJsonp(["charts.module"],{

/***/ "./ClientApp/app/pages/charts/bar/bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Vertical Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-vertical\r\n                      [scheme]=\"colorScheme\"\r\n                      [gradient]=\"gradient\"\r\n                      [xAxis]=\"showXAxis\"\r\n                      [yAxis]=\"showYAxis\"\r\n                      [legend]=\"showLegend\"\r\n                      [showXAxisLabel]=\"showXAxisLabel\"\r\n                      [showYAxisLabel]=\"showYAxisLabel\"\r\n                      [xAxisLabel]=\"xAxisLabel\"\r\n                      [yAxisLabel]=\"yAxisLabel\"\r\n                      [results]=\"single\"\r\n                      (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Horizontal Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-horizontal\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"single\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"yAxisLabel\"\r\n                    [yAxisLabel]=\"xAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-horizontal>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\"  class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Grouped Vertical Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-vertical-2d\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical-2d>        \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Grouped Horizontal Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-horizontal-2d\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"yAxisLabel\"\r\n                    [yAxisLabel]=\"xAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-horizontal-2d>        \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Stacked Vertical Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-vertical-stacked\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical-stacked>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Stacked Horizontal Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-horizontal-stacked\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"yAxisLabel\"\r\n                    [yAxisLabel]=\"xAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-horizontal-stacked>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Normalized Vertical Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-vertical-normalized\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical-normalized>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Normalized Horizontal Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-horizontal-normalized\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"yAxisLabel\"\r\n                    [yAxisLabel]=\"xAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-horizontal-normalized>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/charts/bar/bar.component.ts":
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
var charts_data_1 = __webpack_require__("./ClientApp/app/pages/charts/charts.data.ts");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var BarComponent = /** @class */ (function () {
    function BarComponent(appSettings) {
        this.appSettings = appSettings;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.settings = this.appSettings.settings;
        Object.assign(this, { single: charts_data_1.single, multi: charts_data_1.multi });
    }
    BarComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    BarComponent = __decorate([
        core_1.Component({
            selector: 'app-bar',
            template: __webpack_require__("./ClientApp/app/pages/charts/bar/bar.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], BarComponent);
    return BarComponent;
}());
exports.BarComponent = BarComponent;


/***/ }),

/***/ "./ClientApp/app/pages/charts/bubble/bubble.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Bubble Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bubble-chart\r\n                    [results]=\"bubble\"\r\n                    [showGridLines]=\"showGridLines\"\r\n                    [legend]=\"showLegend\"\r\n                    [legendTitle]=\"legendTitle\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    [autoScale]=\"autoScale\"\r\n                    [scheme]=\"colorScheme\"\r\n                    [schemeType]=\"schemeType\"\r\n                    [roundDomains]=\"roundDomains\"\r\n                    [tooltipDisabled]=\"tooltipDisabled\"\r\n                    [minRadius]=\"minRadius\"\r\n                    [maxRadius]=\"maxRadius\">\r\n                </ngx-charts-bubble-chart>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/charts/bubble/bubble.component.ts":
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
var charts_data_1 = __webpack_require__("./ClientApp/app/pages/charts/charts.data.ts");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var BubbleComponent = /** @class */ (function () {
    function BubbleComponent(appSettings) {
        this.appSettings = appSettings;
        this.legendTitle = 'Legend';
        this.showLegend = true;
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.schemeType = 'ordinal';
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Census Date';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Life expectancy [years]';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.autoScale = true;
        this.settings = this.appSettings.settings;
        Object.assign(this, { bubble: charts_data_1.bubble });
    }
    BubbleComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    BubbleComponent = __decorate([
        core_1.Component({
            selector: 'app-bubble',
            template: __webpack_require__("./ClientApp/app/pages/charts/bubble/bubble.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], BubbleComponent);
    return BubbleComponent;
}());
exports.BubbleComponent = BubbleComponent;


/***/ }),

/***/ "./ClientApp/app/pages/charts/charts.data.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.single = [
    {
        name: 'Germany',
        value: 40632
    },
    {
        name: 'United States',
        value: 49737
    },
    {
        name: 'France',
        value: 36745
    },
    {
        name: 'United Kingdom',
        value: 36240
    },
    {
        name: 'Spain',
        value: 33000
    },
    {
        name: 'Italy',
        value: 35800
    }
];
exports.multi = [
    {
        name: 'Germany',
        series: [
            {
                name: '2017',
                value: 71632
            },
            {
                name: '2010',
                value: 40632
            },
            {
                name: '2000',
                value: 76953
            },
            {
                name: '1990',
                value: 31476
            }
        ]
    },
    {
        name: 'United States',
        series: [
            {
                name: '2017',
                value: 82632
            },
            {
                name: '2010',
                value: 49737
            },
            {
                name: '2000',
                value: 55986
            },
            {
                name: '1990',
                value: 37060
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2017',
                value: 51732
            },
            {
                name: '2010',
                value: 36745
            },
            {
                name: '2000',
                value: 34774
            },
            {
                name: '1990',
                value: 29476
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: '2017',
                value: 95652
            },
            {
                name: '2010',
                value: 36240
            },
            {
                name: '2000',
                value: 32543
            },
            {
                name: '1990',
                value: 26424
            }
        ]
    }
];
exports.bubble = [
    {
        name: 'Germany',
        series: [
            {
                name: '2009',
                x: new Date(2009, 0, 1),
                y: 80.3,
                r: 80.4
            },
            {
                name: '2006',
                x: new Date(2006, 0, 1),
                y: 80.3,
                r: 78
            },
            {
                name: '1995',
                x: new Date(1995, 0, 1),
                y: 77.7,
                r: 58.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 75.4,
                r: 79
            }
        ]
    },
    {
        name: 'United States',
        series: [
            {
                name: '2010',
                x: new Date(2010, 0, 1),
                y: 78.8,
                r: 310
            },
            {
                name: '2005',
                x: new Date(2005, 0, 1),
                y: 76.9,
                r: 283
            },
            {
                name: '1996',
                x: new Date(1996, 0, 1),
                y: 78.7,
                r: 59.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 75.4,
                r: 253
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2008',
                x: new Date(2008, 0, 1),
                y: 81.4,
                r: 63
            },
            {
                name: '2000',
                x: new Date(2000, 0, 1),
                y: 79.1,
                r: 59.4
            },
            {
                name: '1994',
                x: new Date(1994, 0, 1),
                y: 76.7,
                r: 58.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 77.2,
                r: 56.9
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: '2007',
                x: new Date(2007, 0, 1),
                y: 80.2,
                r: 62.7
            },
            {
                name: '2003',
                x: new Date(2003, 0, 1),
                y: 77.8,
                r: 58.9
            },
            {
                name: '1995',
                x: new Date(1995, 0, 1),
                y: 78.7,
                r: 59.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 75.7,
                r: 57.1
            }
        ]
    }
];


/***/ }),

/***/ "./ClientApp/app/pages/charts/charts.module.ts":
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
var ngx_charts_1 = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var bar_component_1 = __webpack_require__("./ClientApp/app/pages/charts/bar/bar.component.ts");
var bubble_component_1 = __webpack_require__("./ClientApp/app/pages/charts/bubble/bubble.component.ts");
var line_component_1 = __webpack_require__("./ClientApp/app/pages/charts/line/line.component.ts");
var pie_component_1 = __webpack_require__("./ClientApp/app/pages/charts/pie/pie.component.ts");
exports.routes = [
    { path: '', redirectTo: 'bar', pathMatch: 'full' },
    { path: 'bar', component: bar_component_1.BarComponent, data: { breadcrumb: 'Bar Charts' } },
    { path: 'pie', component: pie_component_1.PieComponent, data: { breadcrumb: 'Pie Charts' } },
    { path: 'line', component: line_component_1.LineComponent, data: { breadcrumb: 'Line Charts' } },
    { path: 'bubble', component: bubble_component_1.BubbleComponent, data: { breadcrumb: 'Bubble Charts' } }
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                ngx_charts_1.NgxChartsModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                bar_component_1.BarComponent,
                bubble_component_1.BubbleComponent,
                line_component_1.LineComponent,
                pie_component_1.PieComponent
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ "./ClientApp/app/pages/charts/line/line.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Line Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-line-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    [autoScale]=\"autoScale\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-line-chart>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Area Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-area-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    [autoScale]=\"autoScale\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-area-chart>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Stacked Area Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-area-chart-stacked                     \r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-area-chart-stacked>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n      <mat-card>\r\n          <mat-card-header fxLayoutAlign=\"center center\">                \r\n              <mat-card-subtitle><h2>Normalized Area Chart</h2></mat-card-subtitle>\r\n          </mat-card-header>\r\n          <div class=\"w-100 h-300p\">\r\n              <ngx-charts-area-chart-normalized\r\n                  [scheme]=\"colorScheme\"\r\n                  [results]=\"multi\"\r\n                  [gradient]=\"gradient\"\r\n                  [xAxis]=\"showXAxis\"\r\n                  [yAxis]=\"showYAxis\"\r\n                  [legend]=\"showLegend\"\r\n                  [showXAxisLabel]=\"showXAxisLabel\"\r\n                  [showYAxisLabel]=\"showYAxisLabel\"\r\n                  [xAxisLabel]=\"xAxisLabel\"\r\n                  [yAxisLabel]=\"yAxisLabel\"\r\n                  (select)=\"onSelect($event)\">\r\n              </ngx-charts-area-chart-normalized>          \r\n          </div>\r\n      </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/charts/line/line.component.ts":
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
var charts_data_1 = __webpack_require__("./ClientApp/app/pages/charts/charts.data.ts");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var LineComponent = /** @class */ (function () {
    function LineComponent(appSettings) {
        this.appSettings = appSettings;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.autoScale = true;
        this.settings = this.appSettings.settings;
        Object.assign(this, { single: charts_data_1.single, multi: charts_data_1.multi });
    }
    LineComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    LineComponent = __decorate([
        core_1.Component({
            selector: 'app-line',
            template: __webpack_require__("./ClientApp/app/pages/charts/line/line.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], LineComponent);
    return LineComponent;
}());
exports.LineComponent = LineComponent;


/***/ }),

/***/ "./ClientApp/app/pages/charts/pie/pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Pie Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-pie-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"single\"\r\n                    [legend]=\"showLegend\"\r\n                    [explodeSlices]=\"explodeSlices\"\r\n                    [labels]=\"showLabels\"\r\n                    [doughnut]=\"doughnut\"\r\n                    [gradient]=\"gradient\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-pie-chart>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Advanced Pie Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-advanced-pie-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"single\"\r\n                    [gradient]=\"gradient\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-advanced-pie-chart>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Pie Grid Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-pie-grid\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"single\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-pie-grid>        \r\n            </div>\r\n        </mat-card>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/charts/pie/pie.component.ts":
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
var charts_data_1 = __webpack_require__("./ClientApp/app/pages/charts/charts.data.ts");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var PieComponent = /** @class */ (function () {
    function PieComponent(appSettings) {
        this.appSettings = appSettings;
        this.showLegend = true;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.settings = this.appSettings.settings;
        Object.assign(this, { single: charts_data_1.single, multi: charts_data_1.multi });
    }
    PieComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    PieComponent = __decorate([
        core_1.Component({
            selector: 'app-pie',
            template: __webpack_require__("./ClientApp/app/pages/charts/pie/pie.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], PieComponent);
    return PieComponent;
}());
exports.PieComponent = PieComponent;


/***/ })

});
//# sourceMappingURL=charts.module.chunk.js.map