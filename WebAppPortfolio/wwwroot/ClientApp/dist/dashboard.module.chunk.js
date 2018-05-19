webpackJsonp(["dashboard.module"],{

/***/ "./ClientApp/app/pages/dashboard/analytics/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header fxLayoutAlign=\"center\">                \r\n        <mat-card-subtitle><h2>Analytics</h2></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div class=\"w-100 h-300p\" #resizedDiv>\r\n            <ngx-charts-line-chart\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"analytics\"\r\n                [gradient]=\"gradient\"\r\n                [xAxis]=\"showXAxis\"\r\n                [yAxis]=\"showYAxis\"\r\n                [legend]=\"showLegend\"\r\n                [showXAxisLabel]=\"showXAxisLabel\"\r\n                [showYAxisLabel]=\"showYAxisLabel\"\r\n                [xAxisLabel]=\"xAxisLabel\"\r\n                [yAxisLabel]=\"yAxisLabel\"\r\n                [autoScale]=\"autoScale\"\r\n                [roundDomains]=\"roundDomains\"\r\n                (select)=\"onSelect($event)\">\r\n            </ngx-charts-line-chart>             \r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./ClientApp/app/pages/dashboard/analytics/analytics.component.ts":
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
var dashboard_data_1 = __webpack_require__("./ClientApp/app/pages/dashboard/dashboard.data.ts");
var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = false;
        this.xAxisLabel = 'Year';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Profit';
        this.colorScheme = {
            domain: ['#283593', '#039BE5', '#FF5252']
        };
        this.autoScale = true;
        this.roundDomains = true;
        this.previousWidthOfResizedDiv = 0;
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        this.analytics = dashboard_data_1.analytics;
    };
    AnalyticsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    AnalyticsComponent.prototype.ngAfterViewChecked = function () {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            this.analytics = dashboard_data_1.analytics.slice();
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    };
    __decorate([
        core_1.ViewChild('resizedDiv'),
        __metadata("design:type", core_1.ElementRef)
    ], AnalyticsComponent.prototype, "resizedDiv", void 0);
    AnalyticsComponent = __decorate([
        core_1.Component({
            selector: 'app-analytics',
            template: __webpack_require__("./ClientApp/app/pages/dashboard/analytics/analytics.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());
exports.AnalyticsComponent = AnalyticsComponent;


/***/ }),

/***/ "./ClientApp/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-info-cards></app-info-cards>\r\n\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"45\" class=\"flex-p\"> \r\n        <app-disk-space></app-disk-space>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"55\" class=\"flex-p\">\r\n        <app-todo></app-todo>\r\n    </div>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"70\" class=\"flex-p\"> \r\n        <app-analytics></app-analytics>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxLayout=\"column\">\r\n        <div fxFlex=\"100\" class=\"flex-p\">\r\n            <mat-card>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"muted-text\">\r\n                    <mat-icon class=\"icon-lg\">monetization_on</mat-icon>\r\n                    <div>\r\n                        <h1>$ 35700</h1>\r\n                        <h2 class=\"fw-400\">Profit</h2>\r\n                    </div>                \r\n                </div>            \r\n            </mat-card>\r\n        </div>\r\n        <div fxFlex=\"100\" class=\"flex-p\">\r\n            <mat-card>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"muted-text\">\r\n                    <mat-icon class=\"icon-lg\">cloud_download</mat-icon>\r\n                    <div>\r\n                        <h1>187230</h1>\r\n                        <h2 class=\"fw-400\">Downloads</h2>\r\n                    </div>                \r\n                </div>            \r\n            </mat-card>\r\n        </div>       \r\n        <div fxFlex=\"100\" class=\"flex-p\">\r\n            <mat-card>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"muted-text\">\r\n                    <mat-icon class=\"icon-lg\">shopping_cart</mat-icon>\r\n                    <div>\r\n                        <h1>78,25 %</h1>\r\n                        <h2 class=\"fw-400\">Sales</h2>\r\n                    </div>                \r\n                </div>            \r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".fw-400 {\n  font-weight: 400; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/dashboard/dashboard.component.ts":
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
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./ClientApp/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./ClientApp/app/pages/dashboard/dashboard.data.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = [
    {
        name: 'Orders',
        series: [
            {
                name: "1980",
                value: 21632
            }
        ]
    }
];
exports.products = [
    {
        "name": "Product-1",
        "value": 69400
    },
    {
        "name": "Product-2",
        "value": 59400
    },
    {
        "name": "Product-3",
        "value": 82400
    },
    {
        "name": "Product-4",
        "value": 73400
    },
    {
        "name": "Product-5",
        "value": 25400
    },
    {
        "name": "Product-6",
        "value": 23400
    },
    {
        "name": "Product-7",
        "value": 49300
    },
    {
        "name": "Product-8",
        "value": 55400
    },
    {
        "name": "Product-9",
        "value": 37400
    },
    {
        "name": "Product-10",
        "value": 65220
    },
    {
        "name": "Product-11",
        "value": 79400
    },
    {
        "name": "Product-12",
        "value": 58400
    },
    {
        "name": "Product-13",
        "value": 41400
    },
    {
        "name": "Product-14",
        "value": 37400
    },
    {
        "name": "Product-15",
        "value": 33700
    },
    {
        "name": "Product-16",
        "value": 42700
    },
    {
        "name": "Product-17",
        "value": 52700
    },
    {
        "name": "Product-18",
        "value": 62700
    }
];
exports.customers = [
    {
        name: 'Customers',
        series: [
            {
                name: "2000",
                value: 34502
            }
        ]
    }
];
exports.refunds = [
    {
        "name": "Item-1",
        "value": 23701
    },
    {
        "name": "Item-2",
        "value": 33701
    },
    {
        "name": "Item-3",
        "value": 63701
    },
    {
        "name": "Item-4",
        "value": 52701
    },
    {
        "name": "Item-5",
        "value": 73701
    },
    {
        "name": "Item-6",
        "value": 43701
    },
    {
        "name": "Item-7",
        "value": 83701
    },
    {
        "name": "Item-8",
        "value": 29701
    },
    {
        "name": "Item-9",
        "value": 69701
    },
    {
        "name": "Item-10",
        "value": 58701
    },
    {
        "name": "Item-11",
        "value": 65701
    },
    {
        "name": "Item-12",
        "value": 47701
    },
    {
        "name": "Item-13",
        "value": 41701
    },
    {
        "name": "Item-14",
        "value": 25701
    },
    {
        "name": "Item-15",
        "value": 35701
    }
];
exports.disk_space = [
    {
        "name": "Disk C:",
        "value": 178
    },
    {
        "name": "Disk D:",
        "value": 340
    },
    {
        "name": "Disk E:",
        "value": 280
    }
];
exports.analytics = [
    {
        name: 'Company 1',
        series: [
            {
                name: '2010',
                value: 31632
            },
            {
                name: '2011',
                value: 42589
            },
            {
                name: '2012',
                value: 52458
            },
            {
                name: '2013',
                value: 69632
            },
            {
                name: '2014',
                value: 52305
            },
            {
                name: '2015',
                value: 72412
            },
            {
                name: '2016',
                value: 66285
            },
            {
                name: '2017',
                value: 49855
            }
        ]
    },
    {
        name: 'Company 2',
        series: [
            {
                name: '2010',
                value: 61632
            },
            {
                name: '2011',
                value: 68589
            },
            {
                name: '2012',
                value: 55458
            },
            {
                name: '2013',
                value: 62632
            },
            {
                name: '2014',
                value: 38305
            },
            {
                name: '2015',
                value: 41412
            },
            {
                name: '2016',
                value: 32285
            },
            {
                name: '2017',
                value: 31855
            }
        ]
    },
    {
        name: 'Company 3',
        series: [
            {
                name: '2010',
                value: 55632
            },
            {
                name: '2011',
                value: 63589
            },
            {
                name: '2012',
                value: 70458
            },
            {
                name: '2013',
                value: 79632
            },
            {
                name: '2014',
                value: 59305
            },
            {
                name: '2015',
                value: 56412
            },
            {
                name: '2016',
                value: 49285
            },
            {
                name: '2017',
                value: 38855
            }
        ]
    }
];


/***/ }),

/***/ "./ClientApp/app/pages/dashboard/dashboard.module.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ngx_charts_1 = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
var ngx_perfect_scrollbar_1 = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var dashboard_component_1 = __webpack_require__("./ClientApp/app/pages/dashboard/dashboard.component.ts");
var info_cards_component_1 = __webpack_require__("./ClientApp/app/pages/dashboard/info-cards/info-cards.component.ts");
var disk_space_component_1 = __webpack_require__("./ClientApp/app/pages/dashboard/disk-space/disk-space.component.ts");
var todo_component_1 = __webpack_require__("./ClientApp/app/pages/dashboard/todo/todo.component.ts");
var analytics_component_1 = __webpack_require__("./ClientApp/app/pages/dashboard/analytics/analytics.component.ts");
exports.routes = [
    { path: '', component: dashboard_component_1.DashboardComponent, pathMatch: 'full' }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                forms_1.FormsModule,
                ngx_charts_1.NgxChartsModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                info_cards_component_1.InfoCardsComponent,
                disk_space_component_1.DiskSpaceComponent,
                todo_component_1.TodoComponent,
                analytics_component_1.AnalyticsComponent
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;


/***/ }),

/***/ "./ClientApp/app/pages/dashboard/disk-space/disk-space.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header fxLayoutAlign=\"center\">                \r\n        <mat-card-subtitle><h2>Disk Space</h2></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\r\n            <mat-checkbox color=\"primary\" class=\"example-margin\" [checked]=\"explodeSlices\" (change)=\"explodeSlices = !explodeSlices\">Explode Slices</mat-checkbox>\r\n            <mat-checkbox color=\"primary\" class=\"example-margin\" [checked]=\"showLabels\" (change)=\"showLabels = !showLabels\">Show Labels</mat-checkbox>\r\n        </div>\r\n        <div class=\"w-100 h-300p\" #resizedDiv>\r\n            <ngx-charts-pie-chart\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"data\"\r\n                [legend]=\"showLegend\"\r\n                [explodeSlices]=\"explodeSlices\"\r\n                [labels]=\"showLabels\"\r\n                [doughnut]=\"doughnut\"\r\n                [gradient]=\"gradient\"\r\n                (select)=\"onSelect($event)\">\r\n            </ngx-charts-pie-chart>   \r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./ClientApp/app/pages/dashboard/disk-space/disk-space.component.ts":
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
var dashboard_data_1 = __webpack_require__("./ClientApp/app/pages/dashboard/dashboard.data.ts");
var DiskSpaceComponent = /** @class */ (function () {
    function DiskSpaceComponent() {
        this.showLegend = false;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B']
        };
        this.showLabels = true;
        this.explodeSlices = true;
        this.doughnut = false;
        this.previousWidthOfResizedDiv = 0;
    }
    DiskSpaceComponent.prototype.ngOnInit = function () {
        this.data = dashboard_data_1.disk_space;
    };
    DiskSpaceComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    DiskSpaceComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(function () { return _this.data = dashboard_data_1.disk_space.slice(); });
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    };
    __decorate([
        core_1.ViewChild('resizedDiv'),
        __metadata("design:type", core_1.ElementRef)
    ], DiskSpaceComponent.prototype, "resizedDiv", void 0);
    DiskSpaceComponent = __decorate([
        core_1.Component({
            selector: 'app-disk-space',
            template: __webpack_require__("./ClientApp/app/pages/dashboard/disk-space/disk-space.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DiskSpaceComponent);
    return DiskSpaceComponent;
}());
exports.DiskSpaceComponent = DiskSpaceComponent;


/***/ }),

/***/ "./ClientApp/app/pages/dashboard/info-cards/info-cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" #resizedDiv>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">\r\n            <mat-card-header class=\"p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-subtitle class=\"m-0\">Products profit</mat-card-subtitle>\r\n                <mat-chip-list>\r\n                    <mat-chip color=\"accent\" selected=\"true\" class=\"info-chip\">\r\n                        <mat-icon class=\"icon-sm\">trending_up</mat-icon>37%\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-header>         \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-bar-vertical\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"products\"                      \r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical>                   \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">\r\n            <mat-card-header class=\"p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-subtitle class=\"m-0\">Total orders</mat-card-subtitle>\r\n                <mat-chip-list>\r\n                    <mat-chip color=\"primary\" selected=\"true\" class=\"info-chip\">\r\n                        <mat-icon class=\"icon-sm\">trending_up</mat-icon>15%\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-header>         \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-line-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"orders\"                      \r\n                    [autoScale]=\"autoScale\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-line-chart>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">\r\n            <mat-card-header class=\"p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-subtitle class=\"m-0\">Refunds</mat-card-subtitle>\r\n                <mat-chip-list>\r\n                    <mat-chip color=\"warn\" selected=\"true\" class=\"info-chip\">\r\n                        <mat-icon class=\"icon-sm\">trending_down</mat-icon>-9%\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-header>         \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-bar-vertical\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"refunds\"                      \r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical>                     \r\n            </div>\r\n        </mat-card>\r\n    </div>    \r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">\r\n            <mat-card-header class=\"p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-subtitle class=\"m-0\">Customers</mat-card-subtitle>\r\n                <mat-chip-list>\r\n                    <mat-chip color=\"accent\" selected=\"true\" class=\"info-chip\">\r\n                        <mat-icon class=\"icon-sm\">trending_up</mat-icon>12%\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-header>         \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-line-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"customers\"                      \r\n                    [autoScale]=\"autoScale\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-line-chart>                    \r\n            </div>\r\n        </mat-card>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/dashboard/info-cards/info-cards.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-chip.info-chip {\n  padding: 4px 8px; }\n  .mat-chip.info-chip .mat-icon {\n    margin-right: 4px; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/dashboard/info-cards/info-cards.component.ts":
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
var dashboard_data_1 = __webpack_require__("./ClientApp/app/pages/dashboard/dashboard.data.ts");
var InfoCardsComponent = /** @class */ (function () {
    function InfoCardsComponent(appSettings) {
        this.appSettings = appSettings;
        this.colorScheme = {
            domain: ['#999']
        };
        this.autoScale = true;
        this.previousWidthOfResizedDiv = 0;
        this.settings = this.appSettings.settings;
    }
    InfoCardsComponent.prototype.ngOnInit = function () {
        this.orders = dashboard_data_1.orders;
        this.products = dashboard_data_1.products;
        this.customers = dashboard_data_1.customers;
        this.refunds = dashboard_data_1.refunds;
        this.orders = this.addRandomValue('orders');
        this.customers = this.addRandomValue('customers');
    };
    InfoCardsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    InfoCardsComponent.prototype.addRandomValue = function (param) {
        switch (param) {
            case 'orders':
                for (var i = 1; i < 30; i++) {
                    this.orders[0].series.push({ "name": 1980 + i, "value": Math.ceil(Math.random() * 1000000) });
                }
                return this.orders;
            case 'customers':
                for (var i = 1; i < 15; i++) {
                    this.customers[0].series.push({ "name": 2000 + i, "value": Math.ceil(Math.random() * 1000000) });
                }
                return this.customers;
            default:
                return this.orders;
        }
    };
    InfoCardsComponent.prototype.ngOnDestroy = function () {
        this.orders[0].series.length = 0;
        this.customers[0].series.length = 0;
    };
    InfoCardsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(function () { return _this.orders = dashboard_data_1.orders.slice(); });
            setTimeout(function () { return _this.products = dashboard_data_1.products.slice(); });
            setTimeout(function () { return _this.customers = dashboard_data_1.customers.slice(); });
            setTimeout(function () { return _this.refunds = dashboard_data_1.refunds.slice(); });
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    };
    __decorate([
        core_1.ViewChild('resizedDiv'),
        __metadata("design:type", core_1.ElementRef)
    ], InfoCardsComponent.prototype, "resizedDiv", void 0);
    InfoCardsComponent = __decorate([
        core_1.Component({
            selector: 'app-info-cards',
            template: __webpack_require__("./ClientApp/app/pages/dashboard/info-cards/info-cards.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/dashboard/info-cards/info-cards.component.scss")]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], InfoCardsComponent);
    return InfoCardsComponent;
}());
exports.InfoCardsComponent = InfoCardsComponent;


/***/ }),

/***/ "./ClientApp/app/pages/dashboard/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header fxLayoutAlign=\"center\">                \r\n        <mat-card-subtitle><h2>To Do List</h2></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div fxLayoutAlign=\"space-between\">\r\n            <mat-form-field class=\"w-100\">\r\n                <input matInput placeholder=\"Task to do...\" (keyup)=\"addToDoItem($event)\" [(ngModel)]=\"newTodoText\">\r\n            </mat-form-field>\r\n            <button mat-mini-fab color=\"primary\" (click)=\"addToDoItem($event)\">\r\n               <mat-icon>add</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div perfectScrollbar class=\"todo-list\">\r\n            <mat-selection-list>\r\n                <mat-list-option *ngFor=\"let item of getNotDeleted()\" checkboxPosition=\"before\" (mouseenter)=\"item.isActive=true\" (mouseleave)=\"item.isActive=false\">\r\n                    <div fxLayoutAlign=\"space-between center\">\r\n                        <span class=\"text-truncate\">{{ item.text }}</span>\r\n                        <button mat-icon-button (click)=\"item.deleted = true\" color=\"warn\" *ngIf=\"item.isActive\">\r\n                            <mat-icon>delete_forever</mat-icon> \r\n                        </button>\r\n                    </div>               \r\n                </mat-list-option>\r\n            </mat-selection-list>\r\n        </div>          \r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./ClientApp/app/pages/dashboard/todo/todo.component.scss":
/***/ (function(module, exports) {

module.exports = ".todo-list {\n  height: 267px; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/dashboard/todo/todo.component.ts":
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
var todo_service_1 = __webpack_require__("./ClientApp/app/pages/dashboard/todo/todo.service.ts");
var TodoComponent = /** @class */ (function () {
    function TodoComponent(_todoService) {
        this._todoService = _todoService;
        this.newTodoText = '';
        this.todoList = this._todoService.getTodoList();
    }
    TodoComponent.prototype.getNotDeleted = function () {
        return this.todoList.filter(function (item) {
            return !item.deleted;
        });
    };
    TodoComponent.prototype.addToDoItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
            this.todoList.unshift({
                text: this.newTodoText
            });
            this.newTodoText = '';
        }
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'app-todo',
            template: __webpack_require__("./ClientApp/app/pages/dashboard/todo/todo.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/dashboard/todo/todo.component.scss")],
            providers: [todo_service_1.TodoService]
        }),
        __metadata("design:paramtypes", [todo_service_1.TodoService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;


/***/ }),

/***/ "./ClientApp/app/pages/dashboard/todo/todo.service.ts":
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
var TodoService = /** @class */ (function () {
    function TodoService() {
        this._todoList = [
            { text: 'Check me out' },
            { text: 'Curabitur dignissim nunc a tellus euismod, quis pretium ipsum convallis' },
            { text: 'Vivamus dapibus pulvinar ipsum, sit amet elementum sapien tincidunt non' },
            { text: 'Praesent viverra nisl a pharetra viverra' },
            { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
            { text: 'Ex has semper alterum, expetenda dignissim' },
            { text: 'Nulla nisl urna, lobortis in leo vel, porta faucibus nulla' },
            { text: 'Simul erroribus ad usu' }
        ];
    }
    TodoService.prototype.getTodoList = function () {
        return this._todoList;
    };
    TodoService = __decorate([
        core_1.Injectable()
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;


/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map