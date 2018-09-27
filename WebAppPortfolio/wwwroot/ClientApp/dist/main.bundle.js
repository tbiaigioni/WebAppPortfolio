webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pages/charts/charts.module": [
		"./ClientApp/app/pages/charts/charts.module.ts",
		"common",
		"charts.module"
	],
	"app/pages/chat/chat.module": [
		"./ClientApp/app/pages/chat/chat.module.ts",
		"chat.module"
	],
	"app/pages/dashboard/dashboard.module": [
		"./ClientApp/app/pages/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"app/pages/drag-drop/drag-drop.module": [
		"./ClientApp/app/pages/drag-drop/drag-drop.module.ts",
		"drag-drop.module"
	],
	"app/pages/dynamic-menu/dynamic-menu.module": [
		"./ClientApp/app/pages/dynamic-menu/dynamic-menu.module.ts",
		"common",
		"dynamic-menu.module"
	],
	"app/pages/form-controls/form-controls.module": [
		"./ClientApp/app/pages/form-controls/form-controls.module.ts",
		"form-controls.module"
	],
	"app/pages/icons/icons.module": [
		"./ClientApp/app/pages/icons/icons.module.ts",
		"icons.module"
	],
	"app/pages/landing/landing.module": [
		"./ClientApp/app/pages/landing/landing.module.ts",
		"landing.module"
	],
	"app/pages/login/login.module": [
		"./ClientApp/app/pages/login/login.module.ts",
		"common",
		"login.module"
	],
	"app/pages/mailbox/mailbox.module": [
		"./ClientApp/app/pages/mailbox/mailbox.module.ts",
		"mailbox.module"
	],
	"app/pages/maps/maps.module": [
		"./ClientApp/app/pages/maps/maps.module.ts",
		"maps.module"
	],
	"app/pages/register/register.module": [
		"./ClientApp/app/pages/register/register.module.ts",
		"common",
		"register.module"
	],
	"app/pages/schedule/schedule.module": [
		"./ClientApp/app/pages/schedule/schedule.module.ts",
		"common",
		"schedule.module"
	],
	"app/pages/tables/tables.module": [
		"./ClientApp/app/pages/tables/tables.module.ts",
		"tables.module"
	],
	"app/pages/ui/ui.module": [
		"./ClientApp/app/pages/ui/ui.module.ts",
		"ui.module"
	],
	"app/pages/users/users.module": [
		"./ClientApp/app/pages/users/users.module.ts",
		"users.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"\r\n     [ngClass]=\"settings.theme\" \r\n     [class.fixed-header]=\"settings.fixedHeader\"\r\n     [class.horizontal-menu]=\"settings.menu == 'horizontal'\" \r\n     [class.compact]=\"settings.menuType == 'compact'\" \r\n     [class.mini]=\"settings.menuType == 'mini'\" >\r\n    <router-outlet></router-outlet>\r\n    <div id=\"app-spinner\" [class.hide]=\"!settings.loadingSpinner\"> \r\n        <mat-spinner color=\"primary\"></mat-spinner>  \r\n        <h4>loading...Please Wait</h4>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".app {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n#app-spinner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.5s, opacity 0.3s linear;\n  transition: visibility 0.5s, opacity 0.3s linear; }\n\n#app-spinner.hide {\n    visibility: hidden;\n    opacity: 0; }\n\n#app-spinner h4 {\n    margin-top: 10px;\n    letter-spacing: 0.02em;\n    opacity: 0;\n    text-transform: uppercase;\n    -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;\n    animation: loading-text-opacity 2s linear 0s infinite normal; }\n\n@keyframes loading-text-opacity {\n  0% {\n    opacity: 0; }\n  20% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes loading-text-opacity {\n  0% {\n    opacity: 0; }\n  20% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
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
var AppComponent = /** @class */ (function () {
    function AppComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var overlay_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
var custom_overlay_container_1 = __webpack_require__("./ClientApp/app/theme/utils/custom-overlay-container.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
var ngx_perfect_scrollbar_1 = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var ngx_perfect_scrollbar_2 = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};
var angular_calendar_1 = __webpack_require__("./node_modules/angular-calendar/esm5/angular-calendar.js");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var pipes_module_1 = __webpack_require__("./ClientApp/app/theme/pipes/pipes.module.ts");
var app_routing_1 = __webpack_require__("./ClientApp/app/app.routing.ts");
var app_component_1 = __webpack_require__("./ClientApp/app/app.component.ts");
var pages_component_1 = __webpack_require__("./ClientApp/app/pages/pages.component.ts");
var blank_component_1 = __webpack_require__("./ClientApp/app/pages/blank/blank.component.ts");
var search_component_1 = __webpack_require__("./ClientApp/app/pages/search/search.component.ts");
var not_found_component_1 = __webpack_require__("./ClientApp/app/pages/errors/not-found/not-found.component.ts");
var error_component_1 = __webpack_require__("./ClientApp/app/pages/errors/error/error.component.ts");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var angular_particle_1 = __webpack_require__("./node_modules/angular-particle/index.js");
var sidenav_component_1 = __webpack_require__("./ClientApp/app/theme/components/sidenav/sidenav.component.ts");
var vertical_menu_component_1 = __webpack_require__("./ClientApp/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
var horizontal_menu_component_1 = __webpack_require__("./ClientApp/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
var breadcrumb_component_1 = __webpack_require__("./ClientApp/app/theme/components/breadcrumb/breadcrumb.component.ts");
var flags_menu_component_1 = __webpack_require__("./ClientApp/app/theme/components/flags-menu/flags-menu.component.ts");
var fullscreen_component_1 = __webpack_require__("./ClientApp/app/theme/components/fullscreen/fullscreen.component.ts");
var applications_component_1 = __webpack_require__("./ClientApp/app/theme/components/applications/applications.component.ts");
var messages_component_1 = __webpack_require__("./ClientApp/app/theme/components/messages/messages.component.ts");
var user_menu_component_1 = __webpack_require__("./ClientApp/app/theme/components/user-menu/user-menu.component.ts");
var about_me_component_1 = __webpack_require__("./ClientApp/app/pages/about-me/about-me.component.ts");
__webpack_require__("./node_modules/hammerjs/hammer.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                pages_component_1.PagesComponent,
                blank_component_1.BlankComponent,
                search_component_1.SearchComponent,
                not_found_component_1.NotFoundComponent,
                error_component_1.ErrorComponent,
                sidenav_component_1.SidenavComponent,
                vertical_menu_component_1.VerticalMenuComponent,
                horizontal_menu_component_1.HorizontalMenuComponent,
                breadcrumb_component_1.BreadcrumbComponent,
                flags_menu_component_1.FlagsMenuComponent,
                fullscreen_component_1.FullScreenComponent,
                applications_component_1.ApplicationsComponent,
                messages_component_1.MessagesComponent,
                user_menu_component_1.UserMenuComponent,
                about_me_component_1.AboutMeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
                }),
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                angular_calendar_1.CalendarModule.forRoot(),
                shared_module_1.SharedModule,
                pipes_module_1.PipesModule,
                angular_particle_1.ParticlesModule,
                app_routing_1.routing
            ],
            providers: [
                dataService_1.DataService,
                app_settings_1.AppSettings,
                { provide: ngx_perfect_scrollbar_2.PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                { provide: overlay_1.OverlayContainer, useClass: custom_overlay_container_1.CustomOverlayContainer },
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./ClientApp/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var pages_component_1 = __webpack_require__("./ClientApp/app/pages/pages.component.ts");
var blank_component_1 = __webpack_require__("./ClientApp/app/pages/blank/blank.component.ts");
var search_component_1 = __webpack_require__("./ClientApp/app/pages/search/search.component.ts");
var not_found_component_1 = __webpack_require__("./ClientApp/app/pages/errors/not-found/not-found.component.ts");
var error_component_1 = __webpack_require__("./ClientApp/app/pages/errors/error/error.component.ts");
var about_me_component_1 = __webpack_require__("./ClientApp/app/pages/about-me/about-me.component.ts");
exports.routes = [
    {
        path: '',
        component: pages_component_1.PagesComponent, children: [
            { path: '', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: 'app/pages/users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'form-controls', loadChildren: 'app/pages/form-controls/form-controls.module#FormControlsModule', data: { breadcrumb: 'Form Controls' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'icons', loadChildren: 'app/pages/icons/icons.module#IconsModule', data: { breadcrumb: 'Material Icons' } },
            { path: 'drag-drop', loadChildren: 'app/pages/drag-drop/drag-drop.module#DragDropModule', data: { breadcrumb: 'Drag & Drop' } },
            { path: 'schedule', loadChildren: 'app/pages/schedule/schedule.module#ScheduleModule', data: { breadcrumb: 'Schedule' } },
            { path: 'mailbox', loadChildren: 'app/pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
            { path: 'chat', loadChildren: 'app/pages/chat/chat.module#ChatModule', data: { breadcrumb: 'Chat' } },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: 'app/pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'blank', component: blank_component_1.BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: search_component_1.SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'about-me', component: about_me_component_1.AboutMeComponent, data: { breadcrumb: 'About Me' } }
        ]
    },
    { path: '', loadChildren: 'app/pages/landing/landing.module#LandingModule' },
    { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
    { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
    { path: 'error', component: error_component_1.ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, {});


/***/ }),

/***/ "./ClientApp/app/app.settings.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Settings = /** @class */ (function () {
    function Settings(name, loadingSpinner, fixedHeader, sidenavIsOpened, sidenavIsPinned, sidenavUserBlock, menu, menuType, theme, rtl, logoText, logoShape) {
        this.name = name;
        this.loadingSpinner = loadingSpinner;
        this.fixedHeader = fixedHeader;
        this.sidenavIsOpened = sidenavIsOpened;
        this.sidenavIsPinned = sidenavIsPinned;
        this.sidenavUserBlock = sidenavUserBlock;
        this.menu = menu;
        this.menuType = menuType;
        this.theme = theme;
        this.rtl = rtl;
        this.logoText = logoText;
        this.logoShape = logoShape;
    }
    return Settings;
}());
exports.Settings = Settings;


/***/ }),

/***/ "./ClientApp/app/app.settings.ts":
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
var app_settings_model_1 = __webpack_require__("./ClientApp/app/app.settings.model.ts");
var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.settings = new app_settings_model_1.Settings('HalcyonPattern', //theme name
        true, //loadingSpinner
        true, //fixedHeader
        true, //sidenavIsOpened
        true, //sidenavIsPinned  
        false, //sidenavUserBlock 
        'vertical', //horizontal , vertical
        'default', //default, compact, mini
        'blue-dark', //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
        false, // true = rtl, false = ltr
        'img/white_logo_transparent_background_noShape_80px.png', //logoText path
        'img/white_logo_transparent_background_noText_80px.png' //logoShape Path
        );
    }
    AppSettings = __decorate([
        core_1.Injectable()
    ], AppSettings);
    return AppSettings;
}());
exports.AppSettings = AppSettings;


/***/ }),

/***/ "./ClientApp/app/pages/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"about-me-header\">\r\n    <particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\r\n    <p class=\"logo\">GRADUS</p>\r\n    <p class=\"intro-text\">Angular 5 Material Design Admin Template</p>\r\n    <p class=\"desc m-0\">Start creating your app with GRADUS template</p>\r\n    <p class=\"desc\"> 8 layouts, 6 color styles, 35+ pages</p>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"scrollToDemos()\">View demos</button>\r\n        <a mat-raised-button color=\"accent\" href=\"https://themeforest.net/item/gradus-angular-5-material-design-admin-template/21241729\" target=\"blank\">Purchase now</a>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <h2 class=\"muted-text\">Check out our demo styles</h2>\r\n    <p class=\"muted-text desc\">Fully responsive, organized folder structure, clean & customizable code, easy to use and much more...</p>\r\n    <div fxLayout=\"row wrap\" class=\"py-1\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n            <p class=\"text\">Vertical default menu</p>\r\n            <a routerLink=\"/\" (click)=\"changeLayout('vertical','default', false)\" class=\"link\">\r\n                <img src=\"assets/img/landing/vertical-default.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n            <p class=\"text\">Horizontal default menu</p>\r\n            <a routerLink=\"/\" (click)=\"changeLayout('horizontal','default', false)\" class=\"link\">\r\n                <img src=\"assets/img/landing/horizontal-default.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n            <p class=\"text\">Vertical compact menu</p>\r\n            <a routerLink=\"/\" (click)=\"changeLayout('vertical','compact', false)\" class=\"link\">\r\n                <img src=\"assets/img/landing/vertical-compact.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n            <p class=\"text\">Horizontal compact menu</p>\r\n            <a routerLink=\"/\" (click)=\"changeLayout('horizontal','compact', false)\" class=\"link\">\r\n                <img src=\"assets/img/landing/horizontal-compact.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n            <p class=\"text\">Vertical mini menu</p>\r\n            <a routerLink=\"/\" (click)=\"changeLayout('vertical','mini', false)\" class=\"link\">\r\n                <img src=\"assets/img/landing/vertical-mini.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n            <p class=\"text\">Horizontal mini menu</p>\r\n            <a routerLink=\"/\" (click)=\"changeLayout('horizontal','mini', false)\" class=\"link\">\r\n                <img src=\"assets/img/landing/horizontal-mini.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n            <p class=\"text\">Vertical menu RTL</p>\r\n            <a routerLink=\"/\" (click)=\"changeLayout('vertical','default', true)\" class=\"link\">\r\n                <img src=\"assets/img/landing/vertical-rtl.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n            <p class=\"text\">Horizontal menu RTL</p>\r\n            <a routerLink=\"/\" (click)=\"changeLayout('horizontal','default', true)\" class=\"link\">\r\n                <img src=\"assets/img/landing/horizontal-rtl.jpg\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <h2 class=\"muted-text\">Skins</h2>\r\n    <div fxLayout=\"row wrap\" class=\"py-1\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\">\r\n            <a routerLink=\"/\" (click)=\"changeTheme('indigo-light')\" class=\"link\">\r\n                <img src=\"assets/img/landing/vertical-default.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\">\r\n            <a routerLink=\"/\" (click)=\"changeTheme('teal-light')\" class=\"link\">\r\n                <img src=\"assets/img/landing/teal-light.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\">\r\n            <a routerLink=\"/\" (click)=\"changeTheme('red-light')\" class=\"link\">\r\n                <img src=\"assets/img/landing/red-light.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\">\r\n            <a routerLink=\"/\" (click)=\"changeTheme('blue-dark')\" class=\"link\">\r\n                <img src=\"assets/img/landing/blue-dark.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\">\r\n            <a routerLink=\"/\" (click)=\"changeTheme('green-dark')\" class=\"link\">\r\n                <img src=\"assets/img/landing/green-dark.jpg\">\r\n            </a>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\">\r\n            <a routerLink=\"/\" (click)=\"changeTheme('pink-dark')\" class=\"link\">\r\n                <img src=\"assets/img/landing/pink-dark.jpg\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"bg-primary w-100\">\r\n    <div fxLayout.xs=\"column\" fxLayout.gt-xs=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"about-me-footer\">\r\n        <span>Copyright �2018 All Rights Reserved</span>\r\n        <span>made by <a mat-button href=\"https://themeforest.net/user/theme_season/portfolio\" target=\"blank\">ThemeSeason</a></span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/about-me/about-me.component.scss":
/***/ (function(module, exports) {

module.exports = ".about-me-header {\n  position: relative;\n  color: #fff;\n  height: 520px;\n  text-align: center; }\n  .about-me-header:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 520px;\n    background-color: #242424;\n    background-image: url('header.6db18e5f8cfcdbdf8394.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position-y: center;\n    z-index: -1; }\n  .about-me-header p {\n    margin-bottom: 1rem; }\n  .about-me-header .logo {\n    font-size: 48px; }\n  .about-me-header .intro-text {\n    font-size: 36px; }\n  .about-me-header .desc {\n    font-size: 16px;\n    font-weight: 300;\n    letter-spacing: 0.03rem; }\n  .about-me-header .mat-raised-button {\n    margin: 0 14px; }\n  .container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px 32px;\n  text-align: center; }\n  .container h2 {\n    font-size: 2rem; }\n  .container .desc {\n    font-size: 1.25rem; }\n  .container .demo {\n    padding: 16px; }\n  .container .demo .text {\n      font-size: 16px;\n      text-transform: uppercase;\n      margin-bottom: 1rem; }\n  .container .demo .link {\n      display: block; }\n  .container .demo .link img {\n        width: 100%;\n        -webkit-box-shadow: 0px 1px 5px 1px #999;\n                box-shadow: 0px 1px 5px 1px #999;\n        -webkit-transition: .2s;\n        transition: .2s; }\n  .container .demo .link img:hover {\n          -webkit-box-shadow: 0px 1px 5px 5px #999;\n                  box-shadow: 0px 1px 5px 5px #999; }\n  .about-me-footer {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px; }\n  @media (max-width: 767px) {\n  .about-me-header .logo {\n    font-size: 36px; }\n  .about-me-header .intro-text {\n    font-size: 24px; } }\n"

/***/ }),

/***/ "./ClientApp/app/pages/about-me/about-me.component.ts":
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
var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 800;
        this.height = 80;
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: "#000"
                    }, image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                }, size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                },
                interactivity: {
                    detect_on: "window",
                    events: {
                        onhover: {
                            enable: false,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: false,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            }
        };
    };
    AboutMeComponent = __decorate([
        core_1.Component({
            selector: 'app-about-me',
            template: __webpack_require__("./ClientApp/app/pages/about-me/about-me.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/about-me/about-me.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());
exports.AboutMeComponent = AboutMeComponent;


/***/ }),

/***/ "./ClientApp/app/pages/blank/blank.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/pages/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/pages/blank/blank.component.ts":
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
var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent = __decorate([
        core_1.Component({
            selector: 'app-blank',
            template: __webpack_require__("./ClientApp/app/pages/blank/blank.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/blank/blank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());
exports.BlankComponent = BlankComponent;


/***/ }),

/***/ "./ClientApp/app/pages/errors/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  \r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                        <mat-icon>warning</mat-icon>\r\n                    </button>\r\n                    <h1 class=\"error\">500</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <span class=\"box-content-header server-error\">Internal server error</span>  \r\n                        <p class=\"box-text\">Opps, something went wrong.</p> \r\n                        <p class=\"box-text\">You can go to home page.</p> \r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"goHome()\">GO HOME</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n          </div>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./ClientApp/app/pages/errors/error/error.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    ErrorComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    ErrorComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'app-error',
            template: __webpack_require__("./ClientApp/app/pages/errors/error/error.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, router_1.Router])
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;


/***/ }),

/***/ "./ClientApp/app/pages/errors/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  \r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                        <mat-icon>error</mat-icon>\r\n                    </button>\r\n                    <h1 class=\"error\">404</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <p class=\"box-text\">Opps, it seems that this page does not exist.</p> \r\n                        <p class=\"box-text\">If you are sure it should, search for it.</p> \r\n                        <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Enter search keyword...\">\r\n                        </mat-form-field>\r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"searchResult()\">SUBMIT</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n          </div>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./ClientApp/app/pages/errors/not-found/not-found.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
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
            template: __webpack_require__("./ClientApp/app/pages/errors/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, router_1.Router])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;


/***/ }),

/***/ "./ClientApp/app/pages/pages.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <mat-sidenav *ngIf=\"settings.menu == 'vertical'\" [opened]=\"settings.sidenavIsOpened\" [mode]=\"(settings.sidenavIsPinned) ? 'side' : 'over'\" #sidenav class=\"sidenav mat-elevation-z6\">\r\n        <app-sidenav></app-sidenav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content perfectScrollbar [disabled]=\"settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\">\r\n        <mat-toolbar color=\"primary\" class=\"flex-p-x\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"w-100\">            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">                    \r\n                    <button *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"toggleSidenav()\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button> \r\n                    <button fxShow=\"false\" fxShow.gt-xs *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\">\r\n                        <mat-icon>person</mat-icon>\r\n                    </button> \r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\"><img src=\"{{settings.logoShape}}\" alt=\"HalcyonPattern\" /></a>\r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\"><img src=\"{{settings.logoText}}\" alt=\"HalcyonPattern\" /></a>  \r\n                </div>            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                    <!--<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-xs class=\"search-bar\">\r\n                        <form method=\"get\">\r\n                            <input type=\"text\" placeholder=\"Type to search...\" class=\"mat-elevation-z3\"  [class.show]=\"toggleSearchBar\">\r\n                            <button mat-icon-button (click)=\"toggleSearchBar = !toggleSearchBar\" type=\"button\">\r\n                                <mat-icon>search</mat-icon>\r\n                            </button> \r\n                        </form>\r\n                    </div>-->                \r\n                    <!--<app-flags-menu fxShow=\"false\" fxShow.gt-sm></app-flags-menu>-->\r\n                    <app-fullscreen></app-fullscreen> \r\n                    <!--<app-applications fxShow=\"false\" fxShow.gt-sm></app-applications>\r\n                    <app-messages fxShow=\"false\" fxShow.gt-xs></app-messages>-->\r\n                    <app-user-menu></app-user-menu> \r\n                </div>\r\n            </div>\r\n        </mat-toolbar>\r\n\r\n        <mat-toolbar color=\"primary\" *ngIf=\"settings.menu == 'horizontal'\" \r\n            class=\"horizontal-menu flex-p-x transition-2\" \r\n            [class.sticky]=\"isStickyMenu\" \r\n            [class.fixed-top]=\"!settings.fixedHeader\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"w-100\">            \r\n                <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\r\n            </div>            \r\n        </mat-toolbar>\r\n\r\n        <div id=\"main-content\" class=\"inner-sidenav-content transition-2\" perfectScrollbar [disabled]=\"!settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\" [class.horizontal-menu-hidden]=\"isStickyMenu\"> \r\n            <app-breadcrumb></app-breadcrumb>\r\n            <router-outlet></router-outlet>    \r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"options-icon\" (click)=\"options.toggle()\">\r\n            <mat-icon>settings</mat-icon>\r\n        </div>\r\n\r\n        <div *ngIf=\"showBackToTop\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top transition-2\" (click)=\"scrollToTop();\">\r\n            <mat-icon>arrow_upward</mat-icon>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n    \r\n    <mat-sidenav #options position=\"end\" class=\"options\">        \r\n       \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"control mat-elevation-z1\">\r\n            <h2>Settings</h2>\r\n        </div>  \r\n\r\n        <div perfectScrollbar>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Layout</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Fixed header</span>\r\n                    <mat-slide-toggle [checked]=\"settings.fixedHeader\" (change)=\"settings.fixedHeader = !settings.fixedHeader\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>                \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>RTL</span>\r\n                    <mat-slide-toggle [checked]=\"settings.rtl\" (change)=\"settings.rtl = !settings.rtl\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuOption\" (change)=\"chooseMenu()\">\r\n                    <mat-radio-button *ngFor=\"let menu of menus\" [value]=\"menu\">{{menu}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu type</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuTypeOption\" (change)=\"chooseMenuType()\">\r\n                    <mat-radio-button *ngFor=\"let menuType of menuTypes\" [value]=\"menuType\">{{menuType}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose theme skin</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\"> \r\n                    <div class=\"skin-primary indigo-light\" (click)=\"changeTheme('indigo-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary teal-light\" (click)=\"changeTheme('teal-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary red-light\" (click)=\"changeTheme('red-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary blue-dark\" (click)=\"changeTheme('blue-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary green-dark\" (click)=\"changeTheme('green-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary pink-dark\" (click)=\"changeTheme('pink-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Sidenav options</h4>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Opened sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsOpened\" (change)=\"settings.sidenavIsOpened = !settings.sidenavIsOpened\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Pinned sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsPinned\" (change)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Sidenav user info</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavUserBlock\" (change)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </mat-sidenav>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./ClientApp/app/pages/pages.component.scss":
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  width: 250px;\n  overflow: hidden; }\n\n.horizontal-menu {\n  padding: 0;\n  position: relative;\n  z-index: 9;\n  height: 0; }\n\n.horizontal-menu.sticky {\n    height: 0;\n    min-height: 0;\n    overflow: hidden; }\n\n.horizontal-menu.sticky.fixed-top {\n      position: fixed;\n      top: 0;\n      height: 56px;\n      overflow: visible; }\n\n.inner-sidenav-content {\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  min-height: calc(100% - (56px + 8px*2)); }\n\n.options {\n  position: fixed;\n  width: 250px;\n  overflow: hidden; }\n\n.options .control {\n    padding: 6px 14px; }\n\n.options .control div {\n      padding: 6px 0; }\n\n.options .control h4 {\n      border-bottom: 1px solid #ccc;\n      margin: 12px 0 6px 0; }\n\n.options .control .skin-primary {\n      width: 32px;\n      height: 32px;\n      padding: 0;\n      overflow: hidden;\n      cursor: pointer; }\n\n.options .control .skin-primary .skin-secondary {\n        width: 0;\n        height: 0;\n        padding: 0;\n        border-bottom: 32px solid;\n        border-left: 32px solid transparent; }\n\n.options .control .skin-primary.indigo-light {\n        background-color: #3F51B5;\n        border: 1px solid #3F51B5; }\n\n.options .control .skin-primary.indigo-light .skin-secondary {\n          border-bottom-color: #ececec; }\n\n.options .control .skin-primary.teal-light {\n        background-color: #009688;\n        border: 1px solid #009688; }\n\n.options .control .skin-primary.teal-light .skin-secondary {\n          border-bottom-color: #ececec; }\n\n.options .control .skin-primary.red-light {\n        background-color: #F44336;\n        border: 1px solid #F44336; }\n\n.options .control .skin-primary.red-light .skin-secondary {\n          border-bottom-color: #ececec; }\n\n.options .control .skin-primary.blue-dark {\n        background-color: #0277bd;\n        border: 1px solid #0277bd; }\n\n.options .control .skin-primary.blue-dark .skin-secondary {\n          border-bottom-color: #262626; }\n\n.options .control .skin-primary.green-dark {\n        background-color: #388E3C;\n        border: 1px solid #388E3C; }\n\n.options .control .skin-primary.green-dark .skin-secondary {\n          border-bottom-color: #262626; }\n\n.options .control .skin-primary.pink-dark {\n        background-color: #D81B60;\n        border: 1px solid #D81B60; }\n\n.options .control .skin-primary.pink-dark .skin-secondary {\n          border-bottom-color: #262626; }\n\n.options .mat-radio-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.options .mat-radio-group .mat-radio-button {\n      margin: 2px 0; }\n\n.options .mat-slide-toggle {\n    height: auto; }\n\n.options .ps {\n    height: calc(100% - 48px); }\n\n.op-image {\n  -webkit-box-shadow: 0 0 2px #ccc;\n          box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  -webkit-transition: 0.2s;\n  transition: 0.2s; }\n\n.options-icon {\n  position: fixed;\n  top: 110px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 999999; }\n\n.options-icon .mat-icon {\n    -webkit-animation: spin 8s linear infinite;\n    animation: spin 8s linear infinite; }\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: .5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px; }\n\n.back-to-top:hover {\n    opacity: 0.9; }\n\n.search-bar form input {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n\n.search-bar form input.show {\n    padding: 0 8px;\n    width: 250px; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/pages.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var menu_service_1 = __webpack_require__("./ClientApp/app/theme/components/menu/menu.service.ts");
var PagesComponent = /** @class */ (function () {
    function PagesComponent(appSettings, router, menuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.menuService = menuService;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.isStickyMenu = false;
        this.lastScrollTop = 0;
        this.showBackToTop = false;
        this.toggleSearchBar = false;
        this.settings = this.appSettings.settings;
    }
    PagesComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768) {
            this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
        }
        this.menuOption = this.settings.menu;
        this.menuTypeOption = this.settings.menuType;
        this.defaultMenu = this.settings.menu;
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.settings.loadingSpinner = false; }, 300);
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (!_this.settings.sidenavIsPinned) {
                    _this.sidenav.close();
                }
                if (window.innerWidth <= 768) {
                    _this.sidenav.close();
                }
            }
        });
        if (this.settings.menu == "vertical")
            this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
    };
    PagesComponent.prototype.chooseMenu = function () {
        this.settings.menu = this.menuOption;
        this.defaultMenu = this.menuOption;
        this.router.navigate(['/']);
    };
    PagesComponent.prototype.chooseMenuType = function () {
        this.settings.menuType = this.menuTypeOption;
    };
    PagesComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    PagesComponent.prototype.toggleSidenav = function () {
        this.sidenav.toggle();
    };
    PagesComponent.prototype.onPsScrollY = function (event) {
        this.scrolledContent = event.target;
        (this.scrolledContent.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
        if (this.settings.menu == 'horizontal') {
            if (this.settings.fixedHeader) {
                var currentScrollTop = (this.scrolledContent.scrollTop > 56) ? this.scrolledContent.scrollTop : 0;
                (currentScrollTop > this.lastScrollTop) ? this.isStickyMenu = true : this.isStickyMenu = false;
                this.lastScrollTop = currentScrollTop;
            }
            else {
                (this.scrolledContent.scrollTop > 56) ? this.isStickyMenu = true : this.isStickyMenu = false;
            }
        }
    };
    PagesComponent.prototype.scrollToTop = function () {
        var _this = this;
        var scrollDuration = 200;
        var scrollStep = -this.scrolledContent.scrollTop / (scrollDuration / 20);
        var scrollInterval = setInterval(function () {
            if (_this.scrolledContent.scrollTop != 0) {
                _this.scrolledContent.scrollBy(0, scrollStep);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            this.scrolledContent.scrollTop = 0;
        }
    };
    PagesComponent.prototype.onWindowResize = function () {
        if (window.innerWidth <= 768) {
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.settings.menu = 'vertical';
        }
        else {
            (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = true;
            this.settings.sidenavIsPinned = true;
        }
    };
    PagesComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    __decorate([
        core_1.ViewChild('sidenav'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "sidenav", void 0);
    __decorate([
        core_1.HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PagesComponent.prototype, "onWindowResize", null);
    PagesComponent = __decorate([
        core_1.Component({
            selector: 'app-pages',
            template: __webpack_require__("./ClientApp/app/pages/pages.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/pages.component.scss")],
            providers: [menu_service_1.MenuService]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, router_1.Router, menu_service_1.MenuService])
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;


/***/ }),

/***/ "./ClientApp/app/pages/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex class=\"flex-p\"> <h4>Search results...</h4></div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/search/search.component.ts":
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
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            template: __webpack_require__("./ClientApp/app/pages/search/search.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "./ClientApp/app/shared/dataService.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var order_1 = __webpack_require__("./ClientApp/app/shared/order.ts");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.order = new order_1.Order();
        this.products = [];
        this.camps = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .map(function (data) {
            _this.products = data;
            return true;
        });
    };
    DataService.prototype.loadCamps = function () {
        var _this = this;
        return this.http.get("/api/camps")
            .map(function (data) {
            _this.camps = data;
            return true;
        });
    };
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http
            .post("/api/auth/token", creds)
            .map(function (data) {
            _this.token = data.token;
            _this.tokenExpiration = data.expiration;
            return true;
        });
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.AddToOrder = function (newProduct) {
        var item = this.order.items.find(function (i) { return i.productId == newProduct.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new order_1.OrderItem();
            item.productId = newProduct.id;
            item.productArtist = newProduct.artist;
            item.productArtId = newProduct.artId;
            item.productCategory = newProduct.category;
            item.productSize = newProduct.size;
            item.productTitle = newProduct.title;
            item.unitPrice = newProduct.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./ClientApp/app/shared/order.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return _.sum(_.map(this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());
exports.Order = Order;
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;


/***/ }),

/***/ "./ClientApp/app/shared/shared.module.ts":
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
var flex_layout_1 = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                material_1.MatStepperModule
            ],
            exports: [
                flex_layout_1.FlexLayoutModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                material_1.MatStepperModule
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./ClientApp/app/theme/components/applications/applications.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"appsMenu\" #appsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>apps</mat-icon>\r\n</button>\r\n<mat-menu #appsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu applications\">\r\n    <span (mouseleave)=\"appsMenuTrigger.closeMenu()\">\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"header\">\r\n               Applications \r\n            </div>  \r\n        </mat-toolbar>\r\n        <mat-card>           \r\n            <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">person</mat-icon>\r\n                      <span>My account</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">search</mat-icon>\r\n                      <span>Search</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">play_arrow</mat-icon>\r\n                      <span>Player</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">settings</mat-icon>\r\n                      <span>Settings</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">event</mat-icon>\r\n                      <span>Calendar</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">image</mat-icon>\r\n                      <span>Gallery</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                 <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">library_books</mat-icon>\r\n                      <span>Documents</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">mail</mat-icon>\r\n                      <span>Mail</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">place</mat-icon>\r\n                      <span>Maps</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n        </mat-card>\r\n    </span>\r\n</mat-menu>"

/***/ }),

/***/ "./ClientApp/app/theme/components/applications/applications.component.scss":
/***/ (function(module, exports) {

module.exports = ".applications .mat-toolbar, .applications .mat-toolbar-row {\n  height: 40px !important;\n  min-height: 40px !important; }\n\n.applications .header {\n  width: 250px;\n  font-size: 16px; }\n\n.applications .mat-card {\n  padding: 0; }\n\n.applications .mat-card .mat-button {\n    height: 100%; }\n\n.applications .mat-card .mat-button .mat-button-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n"

/***/ }),

/***/ "./ClientApp/app/theme/components/applications/applications.component.ts":
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
var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = __decorate([
        core_1.Component({
            selector: 'app-applications',
            template: __webpack_require__("./ClientApp/app/theme/components/applications/applications.component.html"),
            styles: [__webpack_require__("./ClientApp/app/theme/components/applications/applications.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());
exports.ApplicationsComponent = ApplicationsComponent;


/***/ }),

/***/ "./ClientApp/app/theme/components/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/'\">\r\n    <div fxFlex=\"100\" class=\"flex-p\">\r\n        <mat-card fxLayout=\"row\" class=\"breadcrumb\">\r\n            <a *ngIf=\"router.url != '/'\" routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n                <mat-icon>home</mat-icon>\r\n                <span class=\"breadcrumb-title\">Home</span>\r\n            </a>\r\n            <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n                <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \r\n                <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\">{{breadcrumb.name}}</span>\r\n            </div> \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/theme/components/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\n  padding: 8px; }\n  .breadcrumb .mat-icon {\n    font-size: 20px;\n    height: 20px;\n    width: 20px;\n    padding: 0 6px; }\n  .breadcrumb .breadcrumb-title.active {\n    text-transform: uppercase;\n    font-weight: 500; }\n  .breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n    display: inline-block;\n    padding-right: .5rem;\n    padding-left: .5rem;\n    content: \"/\"; }\n"

/***/ }),

/***/ "./ClientApp/app/theme/components/breadcrumb/breadcrumb.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(appSettings, router, activatedRoute, title) {
        var _this = this;
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this.router.routerState.snapshot.root);
                _this.pageTitle = "";
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.pageTitle += ' > ' + breadcrumb.name;
                });
                _this.title.setTitle(_this.settings.name + _this.pageTitle);
            }
        });
    }
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    BreadcrumbComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: 'app-breadcrumb',
            template: __webpack_require__("./ClientApp/app/theme/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__("./ClientApp/app/theme/components/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings,
            router_1.Router,
            router_1.ActivatedRoute,
            platform_browser_1.Title])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;


/***/ }),

/***/ "./ClientApp/app/theme/components/flags-menu/flags-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>flag</mat-icon>\r\n</button>\r\n<!--<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n</button>-->\r\n<mat-menu #flagsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu flags\">\r\n    <span (mouseleave)=\"flagsMenuTrigger.closeMenu()\">      \r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n            English\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/de.svg\" width=\"20\" alt=\"german\"> \r\n            German\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/fr.svg\" width=\"20\" alt=\"french\"> \r\n            French\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/ru.svg\" width=\"20\" alt=\"russian\"> \r\n            Russian\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/tr.svg\" width=\"20\" alt=\"turkish\"> \r\n            Turkish\r\n        </button>\r\n    </span>\r\n</mat-menu>"

/***/ }),

/***/ "./ClientApp/app/theme/components/flags-menu/flags-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".flags img {\n  vertical-align: middle;\n  margin-right: 8px; }\n\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px; }\n"

/***/ }),

/***/ "./ClientApp/app/theme/components/flags-menu/flags-menu.component.ts":
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
var FlagsMenuComponent = /** @class */ (function () {
    function FlagsMenuComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    FlagsMenuComponent.prototype.ngOnInit = function () {
    };
    FlagsMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-flags-menu',
            template: __webpack_require__("./ClientApp/app/theme/components/flags-menu/flags-menu.component.html"),
            styles: [__webpack_require__("./ClientApp/app/theme/components/flags-menu/flags-menu.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], FlagsMenuComponent);
    return FlagsMenuComponent;
}());
exports.FlagsMenuComponent = FlagsMenuComponent;


/***/ }),

/***/ "./ClientApp/app/theme/components/fullscreen/fullscreen.component.ts":
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
var FullScreenComponent = /** @class */ (function () {
    function FullScreenComponent() {
        this.toggle = false;
    }
    FullScreenComponent.prototype.requestFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.exitFullscreen = function () {
        var document = window.document;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.getFullscreen = function () {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    };
    FullScreenComponent.prototype.onFullScreenChange = function () {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    };
    __decorate([
        core_1.ViewChild('expand'),
        __metadata("design:type", core_1.ElementRef)
    ], FullScreenComponent.prototype, "expand", void 0);
    __decorate([
        core_1.ViewChild('compress'),
        __metadata("design:type", core_1.ElementRef)
    ], FullScreenComponent.prototype, "compress", void 0);
    __decorate([
        core_1.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "getFullscreen", null);
    __decorate([
        core_1.HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "onFullScreenChange", null);
    FullScreenComponent = __decorate([
        core_1.Component({
            selector: 'app-fullscreen',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n    <button mat-icon-button class=\"full-screen\">\n        <mat-icon *ngIf=\"!toggle\" #expand>fullscreen</mat-icon>\n        <mat-icon *ngIf=\"toggle\" #compress>fullscreen_exit</mat-icon>\n    </button> \n  "
        })
    ], FullScreenComponent);
    return FullScreenComponent;
}());
exports.FullScreenComponent = FullScreenComponent;


/***/ }),

/***/ "./ClientApp/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div [fxLayout]=\"(menuParentId == 0) ? 'row' : 'column'\" fxLayoutAlign=\"start center\">\r\n    <div *ngFor=\"let menu of menuItems\" class=\"horizontal-menu-item w-100\">\r\n        <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n\r\n        <div *ngIf=\"menu.hasSubMenu\" class=\"horizontal-sub-menu\" [id]=\"'horizontal-sub-menu-'+menu.id\">\r\n            <app-horizontal-menu [menuParentId]=\"menu.id\"></app-horizontal-menu>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".horizontal-menu-item {\n  position: relative; }\n  .horizontal-menu-item .mat-button {\n    height: 56px;\n    font-weight: 400; }\n  .horizontal-menu-item .horizontal-menu-icon {\n    margin-right: 5px; }\n  .horizontal-menu-item .horizontal-sub-menu {\n    position: absolute;\n    width: 190px;\n    max-height: 0;\n    overflow: hidden;\n    -webkit-transition: max-height 0.25s ease-out;\n    transition: max-height 0.25s ease-out; }\n  .horizontal-menu-item .horizontal-sub-menu .mat-button {\n      width: 100%;\n      height: 36px; }\n  .horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible; }\n  .horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0; }\n"

/***/ }),

/***/ "./ClientApp/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var menu_service_1 = __webpack_require__("./ClientApp/app/theme/components/menu/menu.service.ts");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(appSettings, menuService, router) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = this.menuService.getHorizontalMenuItems();
        this.menuItems = this.menuItems.filter(function (item) { return item.parentId == _this.menuParentId; });
    };
    HorizontalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (_this.settings.fixedHeader) {
                    var mainContent = document.getElementById('main-content');
                    if (mainContent) {
                        mainContent.scrollTop = 0;
                    }
                }
                else {
                    document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
            }
        });
    };
    __decorate([
        core_1.Input('menuParentId'),
        __metadata("design:type", Object)
    ], HorizontalMenuComponent.prototype, "menuParentId", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatMenuTrigger),
        __metadata("design:type", material_1.MatMenuTrigger)
    ], HorizontalMenuComponent.prototype, "trigger", void 0);
    HorizontalMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-horizontal-menu',
            template: __webpack_require__("./ClientApp/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"),
            styles: [__webpack_require__("./ClientApp/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [menu_service_1.MenuService]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, menu_service_1.MenuService, router_1.Router])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
}());
exports.HorizontalMenuComponent = HorizontalMenuComponent;


/***/ }),

/***/ "./ClientApp/app/theme/components/menu/menu.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Menu = /** @class */ (function () {
    function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
    return Menu;
}());
exports.Menu = Menu;


/***/ }),

/***/ "./ClientApp/app/theme/components/menu/menu.service.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var menu_1 = __webpack_require__("./ClientApp/app/theme/components/menu/menu.ts");
var MenuService = /** @class */ (function () {
    function MenuService(location, router) {
        this.location = location;
        this.router = router;
    }
    MenuService.prototype.getVerticalMenuItems = function () {
        return menu_1.verticalMenuItems;
    };
    MenuService.prototype.getHorizontalMenuItems = function () {
        return menu_1.horizontalMenuItems;
    };
    MenuService.prototype.expandActiveSubMenu = function (menu) {
        var url = this.location.path();
        var routerLink = url; // url.substring(1, url.length);
        var activeMenuItem = menu.filter(function (item) { return item.routerLink === routerLink; });
        if (activeMenuItem[0]) {
            var menuItem_1 = activeMenuItem[0];
            while (menuItem_1.parentId != 0) {
                var parentMenuItem = menu.filter(function (item) { return item.id == menuItem_1.parentId; })[0];
                menuItem_1 = parentMenuItem;
                this.toggleMenuItem(menuItem_1.id);
            }
        }
    };
    MenuService.prototype.toggleMenuItem = function (menuId) {
        var menuItem = document.getElementById('menu-item-' + menuId);
        var subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    };
    MenuService.prototype.closeOtherSubMenus = function (menu, menuId) {
        var currentMenuItem = menu.filter(function (item) { return item.id == menuId; })[0];
        if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach(function (item) {
                if (item.id != menuId) {
                    var subMenu = document.getElementById('sub-menu-' + item.id);
                    var menuItem = document.getElementById('menu-item-' + item.id);
                    if (subMenu) {
                        if (subMenu.classList.contains('show')) {
                            subMenu.classList.remove('show');
                            menuItem.classList.remove('expanded');
                        }
                    }
                }
            });
        }
    };
    MenuService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.Router])
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;


/***/ }),

/***/ "./ClientApp/app/theme/components/menu/menu.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var menu_model_1 = __webpack_require__("./ClientApp/app/theme/components/menu/menu.model.ts");
exports.verticalMenuItems = [
    new menu_model_1.Menu(1, 'CodeCamps', null, null, 'code', null, true, 0),
    new menu_model_1.Menu(2, 'Camps', '/camps', null, 'bug_report', null, false, 1),
    new menu_model_1.Menu(3, 'Speakers', '/speakers', null, 'perm_contact_calendar', null, false, 1),
    new menu_model_1.Menu(4, 'Talks', '/talks', null, 'record_voice_over', null, false, 1),
    new menu_model_1.Menu(5, 'Schedule', '/schedule', null, 'event', null, false, 1),
    new menu_model_1.Menu(6, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new menu_model_1.Menu(7, 'Analytics Dashboard', '/', null, 'dashboard', null, false, 0),
    new menu_model_1.Menu(8, 'About Me', '/about-me', null, 'work', null, false, 0)
];
exports.horizontalMenuItems = [
    new menu_model_1.Menu(1, 'CodeCamps', null, null, 'code', null, true, 0),
    new menu_model_1.Menu(2, 'Camps', '/camps', null, 'bug_report', null, false, 1),
    new menu_model_1.Menu(3, 'Speakers', '/speakers', null, 'perm_contact_calendar', null, false, 1),
    new menu_model_1.Menu(4, 'Talks', '/talks', null, 'record_voice_over', null, false, 1),
    new menu_model_1.Menu(5, 'Schedule', '/schedule', null, 'event', null, false, 1),
    new menu_model_1.Menu(6, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new menu_model_1.Menu(7, 'Analytics Dashboard', '/', null, 'dashboard', null, false, 0),
    new menu_model_1.Menu(8, 'About Me', '/about-me', null, 'work', null, false, 0)
];
//new Menu(1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
//    new Menu(2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
//    new Menu(3, 'UI Features', null, null, 'computer', null, true, 0),
//    new Menu(4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),
//    new Menu(5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3),
//    new Menu(6, 'Lists', '/ui/lists', null, 'list', null, false, 3),
//    new Menu(7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3),
//    new Menu(8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3),
//    new Menu(9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3),
//    new Menu(10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
//    new Menu(11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3),
//    new Menu(12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3),
//    new Menu(13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3),
//    new Menu(14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
//    new Menu(16, 'Mailbox', '/mailbox', null, 'email', null, false, 40),
//    new Menu(17, 'Chat', '/chat', null, 'chat', null, false, 40),
//    new Menu(20, 'Form Controls', null, null, 'dvr', null, true, 0),
//    new Menu(21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20),
//    new Menu(22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20),
//    new Menu(23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20),
//    new Menu(24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20),
//    new Menu(25, 'Input', '/form-controls/input', null, 'input', null, false, 20),
//    new Menu(26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20),
//    new Menu(27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20),
//    new Menu(28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20),
//    new Menu(29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),
//    new Menu(30, 'Tables', null, null, 'view_module', null, true, 0),
//    new Menu(31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30),
//    new Menu(32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30),
//    new Menu(33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
//    new Menu(34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
//    new Menu(35, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30),
//    new Menu(70, 'Charts', null, null, 'multiline_chart', null, true, 0),
//    new Menu(71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
//    new Menu(72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
//    new Menu(73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
//    new Menu(74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70),
//    new Menu(66, 'Maps', null, null, 'map', null, true, 70),
//    new Menu(67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66),
//    new Menu(68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66),
//    new Menu(81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 3),
//    new Menu(85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 3),
//    new Menu(40, 'Pages', null, null, 'library_books', null, true, 0),
//    new Menu(43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
//    new Menu(44, 'Register', '/register', null, 'person_add', null, false, 40),
//    new Menu(45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
//    new Menu(46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
//    new Menu(47, 'Error', '/error', null, 'warning', null, false, 40),
//    new Menu(48, 'Landing', '/landing', null, 'filter', null, false, 40),
//    new Menu(50, 'Schedule', '/schedule', null, 'event', null, false, 40),
//    new Menu(200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 40) 


/***/ }),

/***/ "./ClientApp/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\r\n    <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-vertical-menu>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".menu-icon {\n  margin-right: 12px; }\n\n.menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  width: 100%;\n  font-weight: 400; }\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg); }\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px; }\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: max-height 0.25s ease-out;\n  transition: max-height 0.25s ease-out; }\n\n.sub-menu .sub-menu .mat-button {\n    padding-left: 40px; }\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 60px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 80px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 100px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 120px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 140px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 160px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 180px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 200px; }\n\n.sub-menu .mat-button {\n    padding-left: 20px; }\n\n.sub-menu.show {\n    max-height: 500px;\n    -webkit-transition: max-height 0.25s ease-in;\n    transition: max-height 0.25s ease-in; }\n"

/***/ }),

/***/ "./ClientApp/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var menu_service_1 = __webpack_require__("./ClientApp/app/theme/components/menu/menu.service.ts");
var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(appSettings, menuService, router) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentMenu = this.menuItems.filter(function (item) { return item.parentId == _this.menuParentId; });
    };
    VerticalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (_this.settings.fixedHeader) {
                    var mainContent = document.getElementById('main-content');
                    if (mainContent) {
                        mainContent.scrollTop = 0;
                    }
                }
                else {
                    document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
            }
        });
    };
    VerticalMenuComponent.prototype.onClick = function (menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuItems, menuId);
    };
    __decorate([
        core_1.Input('menuItems'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuItems", void 0);
    __decorate([
        core_1.Input('menuParentId'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuParentId", void 0);
    VerticalMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-vertical-menu',
            template: __webpack_require__("./ClientApp/app/theme/components/menu/vertical-menu/vertical-menu.component.html"),
            styles: [__webpack_require__("./ClientApp/app/theme/components/menu/vertical-menu/vertical-menu.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [menu_service_1.MenuService]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, menu_service_1.MenuService, router_1.Router])
    ], VerticalMenuComponent);
    return VerticalMenuComponent;
}());
exports.VerticalMenuComponent = VerticalMenuComponent;


/***/ }),

/***/ "./ClientApp/app/theme/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"messagesMenu\" (click)=\"openMessagesMenu()\">\r\n    <mat-icon>notifications</mat-icon>\r\n</button>\r\n<mat-menu #messagesMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu messages\">\r\n    <!--<span (mouseleave)=\"onMouseLeave()\">-->\r\n        <mat-tab-group backgroundColor=\"primary\" (click)=\"stopClickPropagate($event)\" [selectedIndex]=\"selectedTab\">\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>message</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let message of messages\">\r\n                          <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\" width=\"50\">   \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{message.name}}</span>\r\n                                  <span class=\"info\"><mat-icon>access_time</mat-icon> {{message.time}}</span>\r\n                              </div>\r\n                              <span class=\"text muted-text\">{{message.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>description</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let file of files\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{file.text}}</span>\r\n                                  <span class=\"info\">{{file.size}}</span>\r\n                              </div>\r\n                              <mat-progress-bar\r\n                                  class=\"example-margin\"\r\n                                  [color]=\"file.color\"\r\n                                  mode=\"indeterminate\"\r\n                                  [value]=\"file.value\">\r\n                              </mat-progress-bar>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>event</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let meeting of meetings\">  \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"row-1\">\r\n                              <span class=\"name\">{{meeting.day}}</span>\r\n                              <span class=\"name\">{{meeting.month}}</span>\r\n                          </div>\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                              <span class=\"name\">{{meeting.title}}</span>\r\n                              <span class=\"text muted-text\">{{meeting.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    <!--</span>-->\r\n</mat-menu>"

/***/ }),

/***/ "./ClientApp/app/theme/components/messages/messages.component.scss":
/***/ (function(module, exports) {

module.exports = ".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px; }\n\n.messages .content {\n  padding: 0;\n  height: 250px; }\n\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px; }\n\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px; }\n\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px; }\n\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left; }\n\n.messages .mat-button {\n  padding: 8px; }\n\n.messages .mat-button .mat-button-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: start; }\n\n.messages .mat-button .mat-icon {\n    height: 16px;\n    font-size: 12px;\n    width: 12px;\n    vertical-align: middle; }\n\n.messages .row-1 {\n  -webkit-box-shadow: 0 0 5px #ccc;\n          box-shadow: 0 0 5px #ccc;\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px; }\n"

/***/ }),

/***/ "./ClientApp/app/theme/components/messages/messages.component.ts":
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
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var messages_service_1 = __webpack_require__("./ClientApp/app/theme/components/messages/messages.service.ts");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
        this.selectedTab = 1;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.openMessagesMenu = function () {
        this.trigger.openMenu();
        this.selectedTab = 0;
    };
    MessagesComponent.prototype.onMouseLeave = function () {
        this.trigger.closeMenu();
    };
    MessagesComponent.prototype.stopClickPropagate = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    __decorate([
        core_1.ViewChild(material_1.MatMenuTrigger),
        __metadata("design:type", material_1.MatMenuTrigger)
    ], MessagesComponent.prototype, "trigger", void 0);
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./ClientApp/app/theme/components/messages/messages.component.html"),
            styles: [__webpack_require__("./ClientApp/app/theme/components/messages/messages.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [messages_service_1.MessagesService]
        }),
        __metadata("design:paramtypes", [messages_service_1.MessagesService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./ClientApp/app/theme/components/messages/messages.service.ts":
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
var MessagesService = /** @class */ (function () {
    function MessagesService() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'gradus.zip',
                size: '~6.2 MB',
                value: '47',
                color: 'primary'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33',
                color: 'accent'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60',
                color: 'warn'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80',
                color: 'primary'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55',
                color: 'warn'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75',
                color: 'accent'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                color: 'danger'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                color: 'primary'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                color: 'info'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                color: 'warning'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                color: 'success'
            }
        ];
    }
    MessagesService.prototype.getMessages = function () {
        return this.messages;
    };
    MessagesService.prototype.getFiles = function () {
        return this.files;
    };
    MessagesService.prototype.getMeetings = function () {
        return this.meetings;
    };
    MessagesService = __decorate([
        core_1.Injectable()
    ], MessagesService);
    return MessagesService;
}());
exports.MessagesService = MessagesService;


/***/ }),

/***/ "./ClientApp/app/theme/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" [fxLayoutAlign]=\"(settings.menuType != 'mini') ? 'space-between center' : 'center center'\" class=\"sidenav-header\">\r\n    <a color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\"><img src=\"{{settings.logoShape}}\" alt=\"HalcyonPattern\" /></a>\r\n    <a *ngIf=\"settings.menuType == 'default'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\"> <img src=\"{{settings.logoText}}\" alt=\"HalcyonPattern\"/></a> \r\n    <svg *ngIf=\"settings.menuType != 'mini'\" class=\"pin\" (click)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\">\r\n        <path *ngIf=\"!settings.sidenavIsPinned\" d=\"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z\" />\r\n        <path *ngIf=\"settings.sidenavIsPinned\" d=\"M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z\" />\r\n    </svg>  \r\n</mat-toolbar>\r\n\r\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-block transition-2\" [class.show]=\"settings.sidenavUserBlock\"> \r\n    <div [fxLayout]=\"(settings.menuType != 'default') ? 'column' : 'row'\" \r\n         [fxLayoutAlign]=\"(settings.menuType != 'default') ? 'center center' : 'space-around center'\" class=\"user-info-wrapper\">\r\n        <img [src]=\"userImage\" alt=\"user-image\">\r\n        <div class=\"user-info\">\r\n            <p class=\"name\">Tom Biagioni</p>\r\n            <p *ngIf=\"settings.menuType == 'default'\" class=\"position\">Web developer <br> <small class=\"muted-text\">Member since May. 2016</small></p>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"settings.menuType != 'mini'\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"w-100 muted-text\">\r\n        <button mat-icon-button><mat-icon>person_outline</mat-icon></button>\r\n        <a mat-icon-button routerLink=\"/mailbox\">\r\n            <mat-icon>mail_outline</mat-icon>\r\n        </a>\r\n        <a mat-icon-button routerLink=\"/login\">\r\n            <mat-icon>power_settings_new</mat-icon>\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"sidenav-menu-outer\" class=\"sidenav-menu-outer\" perfectScrollbar [class.user-block-show]=\"settings.sidenavUserBlock\">    \r\n    <span *ngIf=\"!menuItems\">loading....</span>\r\n    <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"0\"></app-vertical-menu> \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/theme/components/sidenav/sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ".pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor; }\n\n.sidenav-header {\n  padding: 0 10px !important; }\n\n.user-block {\n  height: 0;\n  position: relative;\n  z-index: 1;\n  overflow: hidden; }\n\n.user-block img {\n    width: 80px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 50%; }\n\n.user-block .user-info-wrapper {\n    padding: 0 6px;\n    margin: 6px 0;\n    width: 100%; }\n\n.user-block .user-info-wrapper .user-info {\n      text-align: center; }\n\n.user-block .user-info-wrapper .user-info .name {\n        font-size: 15px; }\n\n.user-block .user-info-wrapper .user-info .position {\n        font-size: 13px; }\n\n.user-block.show {\n    height: 156px; }\n\n.sidenav-menu-outer {\n  height: calc(100% - 56px); }\n\n.sidenav-menu-outer.user-block-show {\n    height: calc(100% - 212px); }\n"

/***/ }),

/***/ "./ClientApp/app/theme/components/sidenav/sidenav.component.ts":
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
var menu_service_1 = __webpack_require__("./ClientApp/app/theme/components/menu/menu.service.ts");
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.userImage = '../assets/img/users/user.jpg';
        this.settings = this.appSettings.settings;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.menuItems = this.menuService.getVerticalMenuItems();
    };
    SidenavComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav',
            template: __webpack_require__("./ClientApp/app/theme/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("./ClientApp/app/theme/components/sidenav/sidenav.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [menu_service_1.MenuService]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, menu_service_1.MenuService])
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;


/***/ }),

/***/ "./ClientApp/app/theme/components/user-menu/user-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\r\n    <mat-icon>account_circle</mat-icon>\r\n</button>\r\n\r\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu user-menu\">\r\n    <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">\r\n                <img [src]=\"userImage\" alt=\"user-image\" width=\"80\" class=\"rounded mat-elevation-z6\">\r\n                <p>Emilio Verdines <br> <small>Web developer</small></p>\r\n            </div>  \r\n        </mat-toolbar>\r\n        <a mat-menu-item routerLink=\"profile\"> \r\n            <mat-icon>person</mat-icon>\r\n            <span>Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"settings\"> \r\n            <mat-icon>settings</mat-icon>\r\n            <span>Settings</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/\"> \r\n            <mat-icon>lock</mat-icon>\r\n            <span>Lock screen</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"help\"> \r\n            <mat-icon>help</mat-icon>\r\n            <span>Help</span> \r\n        </a>\r\n        <div class=\"divider\"></div>\r\n        <a mat-menu-item routerLink=\"/login\"> \r\n            <mat-icon>power_settings_new</mat-icon>\r\n            <span>Log out</span> \r\n        </a>\r\n    <!--</span>-->\r\n</mat-menu>"

/***/ }),

/***/ "./ClientApp/app/theme/components/user-menu/user-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important; }\n\n.user-menu .user-info {\n  width: 230px; }\n\n.user-menu .user-info p {\n    font-size: 16px;\n    line-height: 22px;\n    text-align: center; }\n\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px; }\n"

/***/ }),

/***/ "./ClientApp/app/theme/components/user-menu/user-menu.component.ts":
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
var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent() {
        this.userImage = '../assets/img/users/user.jpg';
    }
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-user-menu',
            template: __webpack_require__("./ClientApp/app/theme/components/user-menu/user-menu.component.html"),
            styles: [__webpack_require__("./ClientApp/app/theme/components/user-menu/user-menu.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [])
    ], UserMenuComponent);
    return UserMenuComponent;
}());
exports.UserMenuComponent = UserMenuComponent;


/***/ }),

/***/ "./ClientApp/app/theme/pipes/pagination/pagination.pipe.ts":
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
var PaginationPipe = /** @class */ (function () {
    function PaginationPipe() {
    }
    PaginationPipe.prototype.transform = function (data, args) {
        if (!args) {
            args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
            };
        }
        return this.paginate(data, args.pageSize, args.pageIndex);
    };
    PaginationPipe.prototype.paginate = function (array, page_size, page_number) {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    PaginationPipe = __decorate([
        core_1.Pipe({
            name: 'pagination'
        })
    ], PaginationPipe);
    return PaginationPipe;
}());
exports.PaginationPipe = PaginationPipe;


/***/ }),

/***/ "./ClientApp/app/theme/pipes/pipes.module.ts":
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
var pagination_pipe_1 = __webpack_require__("./ClientApp/app/theme/pipes/pagination/pagination.pipe.ts");
var profilePicture_pipe_1 = __webpack_require__("./ClientApp/app/theme/pipes/profilePicture/profilePicture.pipe.ts");
var chat_person_search_pipe_1 = __webpack_require__("./ClientApp/app/theme/pipes/search/chat-person-search.pipe.ts");
var user_search_pipe_1 = __webpack_require__("./ClientApp/app/theme/pipes/search/user-search.pipe.ts");
var truncate_pipe_1 = __webpack_require__("./ClientApp/app/theme/pipes/truncate/truncate.pipe.ts");
var mail_search_pipe_1 = __webpack_require__("./ClientApp/app/theme/pipes/search/mail-search.pipe.ts");
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                pagination_pipe_1.PaginationPipe,
                profilePicture_pipe_1.ProfilePicturePipe,
                chat_person_search_pipe_1.ChatPersonSearchPipe,
                user_search_pipe_1.UserSearchPipe,
                truncate_pipe_1.TruncatePipe,
                mail_search_pipe_1.MailSearchPipe
            ],
            exports: [
                pagination_pipe_1.PaginationPipe,
                profilePicture_pipe_1.ProfilePicturePipe,
                chat_person_search_pipe_1.ChatPersonSearchPipe,
                user_search_pipe_1.UserSearchPipe,
                truncate_pipe_1.TruncatePipe,
                mail_search_pipe_1.MailSearchPipe
            ]
        })
    ], PipesModule);
    return PipesModule;
}());
exports.PipesModule = PipesModule;


/***/ }),

/***/ "./ClientApp/app/theme/pipes/profilePicture/profilePicture.pipe.ts":
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
var ProfilePicturePipe = /** @class */ (function () {
    function ProfilePicturePipe() {
    }
    ProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'jpg'; }
        return 'img/profile/' + input + '.' + ext;
    };
    ProfilePicturePipe = __decorate([
        core_1.Pipe({ name: 'profilePicture' })
    ], ProfilePicturePipe);
    return ProfilePicturePipe;
}());
exports.ProfilePicturePipe = ProfilePicturePipe;


/***/ }),

/***/ "./ClientApp/app/theme/pipes/search/chat-person-search.pipe.ts":
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
var ChatPersonSearchPipe = /** @class */ (function () {
    function ChatPersonSearchPipe() {
    }
    ChatPersonSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (message) {
                if (message.author) {
                    return message.author.search(searchText) !== -1;
                }
            });
        }
    };
    ChatPersonSearchPipe = __decorate([
        core_1.Pipe({ name: 'ChatPersonSearchPipe' })
    ], ChatPersonSearchPipe);
    return ChatPersonSearchPipe;
}());
exports.ChatPersonSearchPipe = ChatPersonSearchPipe;


/***/ }),

/***/ "./ClientApp/app/theme/pipes/search/mail-search.pipe.ts":
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
var MailSearchPipe = /** @class */ (function () {
    function MailSearchPipe() {
    }
    MailSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    };
    MailSearchPipe = __decorate([
        core_1.Pipe({
            name: 'MailSearch'
        })
    ], MailSearchPipe);
    return MailSearchPipe;
}());
exports.MailSearchPipe = MailSearchPipe;


/***/ }),

/***/ "./ClientApp/app/theme/pipes/search/user-search.pipe.ts":
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
var UserSearchPipe = /** @class */ (function () {
    function UserSearchPipe() {
    }
    UserSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (user) {
                if (user.profile.name) {
                    return user.profile.name.search(searchText) !== -1;
                }
                else {
                    return user.username.search(searchText) !== -1;
                }
            });
        }
    };
    UserSearchPipe = __decorate([
        core_1.Pipe({ name: 'UserSearchPipe', pure: false })
    ], UserSearchPipe);
    return UserSearchPipe;
}());
exports.UserSearchPipe = UserSearchPipe;


/***/ }),

/***/ "./ClientApp/app/theme/pipes/truncate/truncate.pipe.ts":
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
var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args > 0 ? parseInt(args) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    };
    TruncatePipe = __decorate([
        core_1.Pipe({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());
exports.TruncatePipe = TruncatePipe;


/***/ }),

/***/ "./ClientApp/app/theme/utils/custom-overlay-container.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var overlay_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
var CustomOverlayContainer = /** @class */ (function (_super) {
    __extends(CustomOverlayContainer, _super);
    function CustomOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    };
    CustomOverlayContainer = __decorate([
        core_1.Injectable()
    ], CustomOverlayContainer);
    return CustomOverlayContainer;
}(overlay_1.OverlayContainer));
exports.CustomOverlayContainer = CustomOverlayContainer;


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__("./ClientApp/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map