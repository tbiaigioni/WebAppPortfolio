webpackJsonp(["login.module"],{

/***/ "./ClientApp/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n       <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\" (click)=\"onSubmit(form.value);\">\r\n                        <mat-icon>exit_to_app</mat-icon>\r\n                    </button>\r\n                    <a mat-button routerLink=\"/register\">Don't have an account? Sign up now!</a>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <span class=\"box-content-header\">member login</span>  \r\n                        <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                            <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Password\" formControlName=\"password\">\r\n                            <mat-error *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                        </mat-form-field> \r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"submit\">SIGN IN</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n        </form>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./ClientApp/app/pages/login/login.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_validators_1 = __webpack_require__("./ClientApp/app/theme/utils/app-validators.ts");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appSettings, fb, router) {
        this.appSettings = appSettings;
        this.fb = fb;
        this.router = router;
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, app_validators_1.emailValidator])],
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])]
        });
    }
    LoginComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            this.router.navigate(['/']);
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./ClientApp/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, forms_1.FormBuilder, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./ClientApp/app/pages/login/login.module.ts":
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
var login_component_1 = __webpack_require__("./ClientApp/app/pages/login/login.component.ts");
exports.routes = [
    { path: '', component: login_component_1.LoginComponent, pathMatch: 'full' }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                login_component_1.LoginComponent
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;


/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map