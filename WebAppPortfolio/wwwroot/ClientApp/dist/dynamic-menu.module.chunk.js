webpackJsonp(["dynamic-menu.module"],{

/***/ "./ClientApp/app/pages/dynamic-menu/dynamic-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.sm=\"60\" class=\"flex-p\">\r\n        <mat-card class=\"list\">\r\n            <mat-card-content>\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">      \r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Title\" formControlName=\"title\">\r\n                        <mat-error *ngIf=\"form.controls.title.errors?.required\">Menu title is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.title.hasError('minlength')\">Menu title isn't long enough, minimum of 3 characters</mat-error>\r\n                    </mat-form-field> \r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-select placeholder=\"Icon\" formControlName=\"icon\">\r\n                            <mat-option *ngFor=\"let icon of icons\" [value]=\"icon\">\r\n                                <mat-icon>{{ icon }}</mat-icon>\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\" >\r\n                        <input matInput placeholder=\"RouterLink\" formControlName=\"routerLink\" matTooltip=\"e.g. /dashboard\" matTooltipPosition=\"after\">\r\n                        <mat-error *ngIf=\"form.controls.routerLink.errors?.required\">Routerlink or href is required</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-checkbox formControlName=\"hasSubMenu\">Has sub menu</mat-checkbox>\r\n                    <mat-form-field class=\"w-100\" >\r\n                        <input matInput placeholder=\"Href\" formControlName=\"href\" matTooltip=\"e.g. http://themeseason.com\" matTooltipPosition=\"after\">\r\n                        <mat-error *ngIf=\"form.controls.href.errors?.required\">Href or routerlink is required</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-radio-group formControlName=\"target\">\r\n                        <mat-radio-button value=\"_blank\">_blank</mat-radio-button>\r\n                        <mat-radio-button value=\"_self\">_self</mat-radio-button>\r\n                    </mat-radio-group>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-select placeholder=\"Parent menu\" formControlName=\"parentId\">\r\n                            <mat-option value=\"0\">-- Select Parent Menu --</mat-option>\r\n                            <mat-option *ngFor=\"let menuItem of menuItems\" [value]=\"menuItem.id\">\r\n                                {{menuItem.title}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n                        <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid\" type=\"submit\">Add New Menu Item</button>\r\n                    </div>\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n      </div> \r\n</div> "

/***/ }),

/***/ "./ClientApp/app/pages/dynamic-menu/dynamic-menu.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var menu_service_1 = __webpack_require__("./ClientApp/app/theme/components/menu/menu.service.ts");
var dynamic_menu_service_1 = __webpack_require__("./ClientApp/app/pages/dynamic-menu/dynamic-menu.service.ts");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var vertical_menu_component_1 = __webpack_require__("./ClientApp/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
var app_animation_1 = __webpack_require__("./ClientApp/app/theme/utils/app-animation.ts");
var DynamicMenuComponent = /** @class */ (function () {
    function DynamicMenuComponent(appSettings, formBuilder, snackBar, menuService, dynamicMenuService) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.menuService = menuService;
        this.dynamicMenuService = dynamicMenuService;
        this.icons = ['home', 'person', 'card_travel', 'delete', 'event', 'favorite', 'help'];
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getVerticalMenuItems();
    }
    DynamicMenuComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            'title': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            'icon': null,
            'routerLink': ['', forms_1.Validators.required],
            'href': ['', forms_1.Validators.required],
            'target': null,
            'hasSubMenu': false,
            'parentId': 0
        });
    };
    DynamicMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.form.valueChanges.debounceTime(500).subscribe(function (menu) {
            if (menu.routerLink && menu.routerLink != '') {
                _this.form.controls['href'].setValue(null);
                _this.form.controls['href'].disable();
                _this.form.controls['href'].clearValidators();
                _this.form.controls['target'].setValue(null);
                _this.form.controls['target'].disable();
            }
            else {
                _this.form.controls['href'].enable();
                _this.form.controls['href'].setValidators([forms_1.Validators.required]);
                _this.form.controls['target'].enable();
            }
            _this.form.controls['href'].updateValueAndValidity();
            if (menu.href && menu.href != '') {
                _this.form.controls['routerLink'].setValue(null);
                _this.form.controls['routerLink'].disable();
                _this.form.controls['routerLink'].clearValidators();
                _this.form.controls['hasSubMenu'].setValue(false);
                _this.form.controls['hasSubMenu'].disable();
            }
            else {
                _this.form.controls['routerLink'].enable();
                _this.form.controls['routerLink'].setValidators([forms_1.Validators.required]);
                _this.form.controls['hasSubMenu'].enable();
            }
            _this.form.controls['routerLink'].updateValueAndValidity();
        });
    };
    DynamicMenuComponent.prototype.onSubmit = function (menu) {
        if (this.form.valid) {
            this.dynamicMenuService.addNewMenuItem(vertical_menu_component_1.VerticalMenuComponent, this.menuItems, menu);
            this.snackBar.open('New menu item added successfully!', null, {
                duration: 2000,
            });
            this.form.reset({
                hasSubMenu: false,
                parentId: 0
            });
        }
    };
    DynamicMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-dynamic-menu',
            template: __webpack_require__("./ClientApp/app/pages/dynamic-menu/dynamic-menu.component.html"),
            providers: [dynamic_menu_service_1.DynamicMenuService, menu_service_1.MenuService],
            animations: [app_animation_1.listTransition],
            host: {
                '[@listTransition]': ''
            }
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings,
            forms_1.FormBuilder,
            material_1.MatSnackBar,
            menu_service_1.MenuService,
            dynamic_menu_service_1.DynamicMenuService])
    ], DynamicMenuComponent);
    return DynamicMenuComponent;
}());
exports.DynamicMenuComponent = DynamicMenuComponent;


/***/ }),

/***/ "./ClientApp/app/pages/dynamic-menu/dynamic-menu.module.ts":
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
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var dynamic_menu_component_1 = __webpack_require__("./ClientApp/app/pages/dynamic-menu/dynamic-menu.component.ts");
exports.routes = [
    { path: '', component: dynamic_menu_component_1.DynamicMenuComponent, pathMatch: 'full' }
];
var DynamicMenuModule = /** @class */ (function () {
    function DynamicMenuModule() {
    }
    DynamicMenuModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(exports.routes),
                shared_module_1.SharedModule
            ],
            declarations: [
                dynamic_menu_component_1.DynamicMenuComponent
            ]
        })
    ], DynamicMenuModule);
    return DynamicMenuModule;
}());
exports.DynamicMenuModule = DynamicMenuModule;


/***/ }),

/***/ "./ClientApp/app/pages/dynamic-menu/dynamic-menu.service.ts":
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
var menu_model_1 = __webpack_require__("./ClientApp/app/theme/components/menu/menu.model.ts");
var DynamicMenuService = /** @class */ (function () {
    function DynamicMenuService(componentFactoryResolver, applicationRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
    }
    DynamicMenuService.prototype.addNewMenuItem = function (component, menuItems, menuItem) {
        var lastId = menuItems[menuItems.length - 1].id;
        var newMenuItem = new menu_model_1.Menu(lastId + 1, menuItem['title'], menuItem['routerLink'], menuItem['href'], menuItem['icon'], menuItem['target'], menuItem['hasSubMenu'], parseInt(menuItem['parentId']));
        menuItems.push(newMenuItem);
        var item = menuItems.filter(function (item) { return item.id == newMenuItem.parentId; })[0];
        if (item)
            item.hasSubMenu = true;
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.applicationRef.attachView(componentRef.hostView);
        var instance = componentRef.instance;
        instance.menuItems = menuItems;
        instance.menuParentId = 0;
        var elem = componentRef.hostView.rootNodes[0];
        var sidenav = document.getElementById('sidenav-menu-outer');
        sidenav.replaceChild(elem, sidenav.children[0]);
    };
    DynamicMenuService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
            core_1.ApplicationRef,
            core_1.Injector])
    ], DynamicMenuService);
    return DynamicMenuService;
}());
exports.DynamicMenuService = DynamicMenuService;


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounceTime = __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__["a" /* debounceTime */];
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounceTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_debounceTime PURE_IMPORTS_END */


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__["a" /* debounceTime */])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map


/***/ })

});
//# sourceMappingURL=dynamic-menu.module.chunk.js.map