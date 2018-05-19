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
var forms_1 = require("@angular/forms");
var app_validators_1 = require("../../theme/utils/app-validators");
var app_settings_1 = require("../../app.settings");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(appSettings, fb, router) {
        this.appSettings = appSettings;
        this.fb = fb;
        this.router = router;
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'name': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, app_validators_1.emailValidator])],
            'password': ['', forms_1.Validators.required],
            'confirmPassword': ['', forms_1.Validators.required]
        }, { validator: app_validators_1.matchingPasswords('password', 'confirmPassword') });
    }
    RegisterComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            this.router.navigate(['/login']);
        }
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html'
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, forms_1.FormBuilder, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map