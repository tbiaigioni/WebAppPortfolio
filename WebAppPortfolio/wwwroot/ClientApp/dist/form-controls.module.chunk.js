webpackJsonp(["form-controls.module"],{

/***/ "./ClientApp/app/pages/form-controls/autocomplete/autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\"> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Simple autocomplete</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <form>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                                {{ option }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>   \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Filter autocomplete</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <form>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"filteredControl\" [matAutocomplete]=\"auto\">\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                              {{ option }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>           \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/autocomplete/autocomplete.component.ts":
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
var startWith_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(appSettings) {
        this.appSettings = appSettings;
        this.myControl = new forms_1.FormControl();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
        this.filteredControl = new forms_1.FormControl();
        this.settings = this.appSettings.settings;
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.filteredControl.valueChanges
            .pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.filter(val); }));
    };
    AutocompleteComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(val.toLowerCase()) === 0; });
    };
    AutocompleteComponent = __decorate([
        core_1.Component({
            selector: 'app-autocomplete',
            template: __webpack_require__("./ClientApp/app/pages/form-controls/autocomplete/autocomplete.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());
exports.AutocompleteComponent = AutocompleteComponent;


/***/ }),

/***/ "./ClientApp/app/pages/form-controls/checkbox/checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Checkbox configuration</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\r\n                </section>\r\n                <section class=\"py-1\">\r\n                    <label>Align:</label>\r\n                    <mat-radio-group [(ngModel)]=\"align\">\r\n                        <mat-radio-button value=\"start\">Start</mat-radio-button>\r\n                        <mat-radio-button value=\"end\">End</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </section>\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n                </section>\r\n                <hr>\r\n                <h2 class=\"py-1\">Result</h2>\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox\r\n                        [(ngModel)]=\"checked\"\r\n                        [(indeterminate)]=\"indeterminate\"\r\n                        [align]=\"align\"\r\n                        [disabled]=\"disabled\">\r\n                      I'm a checkbox\r\n                    </mat-checkbox>\r\n                </section>               \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/checkbox/checkbox.component.ts":
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
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(appSettings) {
        this.appSettings = appSettings;
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
        this.settings = this.appSettings.settings;
    }
    CheckboxComponent = __decorate([
        core_1.Component({
            selector: 'app-checkbox',
            template: __webpack_require__("./ClientApp/app/pages/form-controls/checkbox/checkbox.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], CheckboxComponent);
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;


/***/ }),

/***/ "./ClientApp/app/pages/form-controls/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\"> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Basic datepicker</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>   \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker start date</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker with min & max validation</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker3\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker3></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker with filter validation</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker4\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker4></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker input and change events</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker5\" placeholder=\"Input & change events\"\r\n                          (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker5></mat-datepicker>\r\n                </mat-form-field>                \r\n                <div class=\"w-100 mat-elevation-z4 p-1 events-list\" perfectScrollbar> \r\n                    <div *ngFor=\"let e of events\">{{e}}</div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Disabled datepicker</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">             \r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp1></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp2></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker touch UI</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker6\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n                    <mat-datepicker touchUi=\"true\" #picker6></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker open method</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker7\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker #picker7></mat-datepicker>\r\n                </mat-form-field>\r\n                <button mat-raised-button (click)=\"picker7.open()\">Open</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>                                 \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/datepicker/datepicker.component.scss":
/***/ (function(module, exports) {

module.exports = ".events-list {\n  height: 97px; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/datepicker/datepicker.component.ts":
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
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(appSettings) {
        this.appSettings = appSettings;
        //Datepicker start date
        this.startDate = new Date(1990, 0, 1);
        //Datepicker with min & max validation
        this.minDate = new Date(2010, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
        //Datepicker with filter validation
        this.myFilter = function (d) {
            var day = d.getDay();
            return day !== 0 && day !== 6;
        };
        //Datepicker input and change events
        this.events = [];
        this.settings = this.appSettings.settings;
    }
    DatepickerComponent.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerComponent = __decorate([
        core_1.Component({
            selector: 'app-datepicker',
            template: __webpack_require__("./ClientApp/app/pages/form-controls/datepicker/datepicker.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/form-controls/datepicker/datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;


/***/ }),

/***/ "./ClientApp/app/pages/form-controls/form-controls.module.ts":
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
var ngx_perfect_scrollbar_1 = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var autocomplete_component_1 = __webpack_require__("./ClientApp/app/pages/form-controls/autocomplete/autocomplete.component.ts");
var checkbox_component_1 = __webpack_require__("./ClientApp/app/pages/form-controls/checkbox/checkbox.component.ts");
var datepicker_component_1 = __webpack_require__("./ClientApp/app/pages/form-controls/datepicker/datepicker.component.ts");
var form_field_component_1 = __webpack_require__("./ClientApp/app/pages/form-controls/form-field/form-field.component.ts");
var input_component_1 = __webpack_require__("./ClientApp/app/pages/form-controls/input/input.component.ts");
var radio_button_component_1 = __webpack_require__("./ClientApp/app/pages/form-controls/radio-button/radio-button.component.ts");
var select_component_1 = __webpack_require__("./ClientApp/app/pages/form-controls/select/select.component.ts");
var slider_component_1 = __webpack_require__("./ClientApp/app/pages/form-controls/slider/slider.component.ts");
var slide_toggle_component_1 = __webpack_require__("./ClientApp/app/pages/form-controls/slide-toggle/slide-toggle.component.ts");
exports.routes = [
    { path: '', redirectTo: 'autocomplete', pathMatch: 'full' },
    { path: 'autocomplete', component: autocomplete_component_1.AutocompleteComponent, data: { breadcrumb: 'Autocomplete' } },
    { path: 'checkbox', component: checkbox_component_1.CheckboxComponent, data: { breadcrumb: 'Checkbox' } },
    { path: 'datepicker', component: datepicker_component_1.DatepickerComponent, data: { breadcrumb: 'Datepicker' } },
    { path: 'form-field', component: form_field_component_1.FormFieldComponent, data: { breadcrumb: 'Form Field' } },
    { path: 'input', component: input_component_1.InputComponent, data: { breadcrumb: 'Input' } },
    { path: 'radio-button', component: radio_button_component_1.RadioButtonComponent, data: { breadcrumb: 'Radio Button' } },
    { path: 'select', component: select_component_1.SelectComponent, data: { breadcrumb: 'Select' } },
    { path: 'slider', component: slider_component_1.SliderComponent, data: { breadcrumb: 'Slider' } },
    { path: 'slide-toggle', component: slide_toggle_component_1.SlideToggleComponent, data: { breadcrumb: 'Slide Toggle' } }
];
var FormControlsModule = /** @class */ (function () {
    function FormControlsModule() {
    }
    FormControlsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                autocomplete_component_1.AutocompleteComponent,
                checkbox_component_1.CheckboxComponent,
                datepicker_component_1.DatepickerComponent,
                form_field_component_1.FormFieldComponent,
                input_component_1.InputComponent,
                radio_button_component_1.RadioButtonComponent,
                select_component_1.SelectComponent,
                slider_component_1.SliderComponent,
                slide_toggle_component_1.SlideToggleComponent
            ]
        })
    ], FormControlsModule);
    return FormControlsModule;
}());
exports.FormControlsModule = FormControlsModule;


/***/ }),

/***/ "./ClientApp/app/pages/form-controls/form-field/form-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Simple form field</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Input\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <textarea matInput placeholder=\"Textarea\"></textarea>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Select\">\r\n                        <mat-option value=\"option\">Option</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>                               \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with placeholder</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <form [formGroup]=\"options\">\r\n                    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\r\n                    <div class=\"py-1\">\r\n                        <label>Float placeholder: </label>\r\n                        <mat-radio-group formControlName=\"floatPlaceholder\">\r\n                            <mat-radio-button value=\"auto\">Auto</mat-radio-button>\r\n                            <mat-radio-button value=\"always\">Always</mat-radio-button>\r\n                            <mat-radio-button value=\"never\">Never</mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </div>\r\n                </form>\r\n                <mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\"\r\n                                [floatPlaceholder]=\"options.value.floatPlaceholder\">\r\n                    <input matInput placeholder=\"Simple placeholder\" required>\r\n                </mat-form-field>\r\n                <mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\"\r\n                                [floatPlaceholder]=\"options.value.floatPlaceholder\">\r\n                    <mat-select required>\r\n                        <mat-option>-- None --</mat-option>\r\n                        <mat-option value=\"option\">Option</mat-option>\r\n                    </mat-select>\r\n                    <mat-placeholder><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> placeholder</i></mat-placeholder>\r\n                </mat-form-field>               \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with hints</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field hintLabel=\"Max 10 characters\">\r\n                    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\r\n                    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Select me\">\r\n                      <mat-option value=\"option\">Option</mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\r\n                </mat-form-field>                            \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with error messages</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n                    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n                </mat-form-field>                           \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with prefix & suffix</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\r\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Amount\" type=\"number\" [style.text-align]=\"'right'\">\r\n                    <span matPrefix>$&nbsp;</span>\r\n                    <span matSuffix>.00</span>\r\n                </mat-form-field>                        \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field theming</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form [formGroup]=\"themingForm\" [style.fontSize.px]=\"getFontSize()\" fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field [color]=\"themingForm.value.color\">\r\n                        <mat-select placeholder=\"Color\" formControlName=\"color\">\r\n                            <mat-option value=\"primary\">Primary</mat-option>\r\n                            <mat-option value=\"accent\">Accent</mat-option>\r\n                            <mat-option value=\"warn\">Warn</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field [color]=\"themingForm.value.color\">\r\n                        <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\r\n                        <mat-error *ngIf=\"themingForm.get('fontSize')?.invalid\">Min size: 10px</mat-error>\r\n                    </mat-form-field>\r\n                </form>     \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/form-field/form-field.component.ts":
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
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var FormFieldComponent = /** @class */ (function () {
    function FormFieldComponent(appSettings, formBuilder) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        this.hide = true;
        this.settings = this.appSettings.settings;
    }
    FormFieldComponent.prototype.ngOnInit = function () {
        this.options = this.formBuilder.group({
            hideRequired: false,
            floatPlaceholder: 'auto',
        });
        this.themingForm = this.formBuilder.group({
            'color': 'primary',
            'fontSize': [16, forms_1.Validators.min(10)],
        });
    };
    FormFieldComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormFieldComponent.prototype.getFontSize = function () {
        return Math.max(10, this.themingForm.value.fontSize);
    };
    FormFieldComponent = __decorate([
        core_1.Component({
            selector: 'app-form-field',
            template: __webpack_require__("./ClientApp/app/pages/form-controls/form-field/form-field.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, forms_1.FormBuilder])
    ], FormFieldComponent);
    return FormFieldComponent;
}());
exports.FormFieldComponent = FormFieldComponent;


/***/ }),

/***/ "./ClientApp/app/pages/form-controls/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Basic Inputs</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <textarea matInput placeholder=\"Leave a comment\"></textarea>\r\n                    </mat-form-field>\r\n                </form>                              \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Input with a custom ErrorStateMatcher</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\r\n                        <mat-hint>Errors appear instantly!</mat-hint>\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error>\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error>\r\n                    </mat-form-field>\r\n                </form>                              \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Auto-resizing textarea</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <textarea matInput \r\n                              placeholder=\"Autosize textarea\" \r\n                              matTextareaAutosize \r\n                              matAutosizeMinRows=\"2\"\r\n                              matAutosizeMaxRows=\"5\"></textarea>\r\n                </mat-form-field>                       \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Input with a clear button</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"/>\r\n                    <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                </mat-form-field>                       \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Inputs in a form</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                  \r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\r\n                    </mat-form-field>\r\n\r\n                    <table cellspacing=\"0\" class=\"w-100\">\r\n                        <tr>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"First name\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                    \r\n                    <mat-form-field class=\"w-100\">\r\n                        <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-100\">\r\n                        <textarea matInput placeholder=\"Address 2\"></textarea>\r\n                    </mat-form-field>                   \r\n\r\n                    <table cellspacing=\"0\" class=\"w-100\">\r\n                        <tr>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"City\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"State\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\r\n                                    <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                                </mat-form-field>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/input/input.component.ts":
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
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var InputComponent = /** @class */ (function () {
    function InputComponent(appSettings) {
        this.appSettings = appSettings;
        //Input with a custom ErrorStateMatcher
        this.emailFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        //Input with a clear button
        this.value = 'Clear me';
        this.settings = this.appSettings.settings;
    }
    InputComponent = __decorate([
        core_1.Component({
            selector: 'app-input',
            template: __webpack_require__("./ClientApp/app/pages/form-controls/input/input.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], InputComponent);
    return InputComponent;
}());
exports.InputComponent = InputComponent;
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
exports.MyErrorStateMatcher = MyErrorStateMatcher;


/***/ }),

/***/ "./ClientApp/app/pages/form-controls/radio-button/radio-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic radios</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-radio-group>\r\n                    <mat-radio-button value=\"1\">Option 1</mat-radio-button>\r\n                    <mat-radio-button value=\"2\">Option 2</mat-radio-button>\r\n                </mat-radio-group>   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Radios with ngModel</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-radio-group [(ngModel)]=\"favoriteSeason\" fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-radio-button *ngFor=\"let season of seasons\" [value]=\"season\" class=\"season-item\">\r\n                      {{season}}\r\n                    </mat-radio-button>\r\n                </mat-radio-group>\r\n                <div class=\"py-1\">Your favorite season is: <b> {{favoriteSeason}} </b></div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/radio-button/radio-button.component.scss":
/***/ (function(module, exports) {

module.exports = ".season-item {\n  margin-bottom: 6px; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/radio-button/radio-button.component.ts":
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
var RadioButtonComponent = /** @class */ (function () {
    function RadioButtonComponent(appSettings) {
        this.appSettings = appSettings;
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
        this.settings = this.appSettings.settings;
    }
    RadioButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-radio-button',
            template: __webpack_require__("./ClientApp/app/pages/form-controls/radio-button/radio-button.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/form-controls/radio-button/radio-button.component.scss")]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], RadioButtonComponent);
    return RadioButtonComponent;
}());
exports.RadioButtonComponent = RadioButtonComponent;


/***/ }),

/***/ "./ClientApp/app/pages/form-controls/select/select.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic select</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content >\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\r\n                        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                            {{food.viewValue}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n                <p class=\"py-1\"> Selected value: <b>{{selectedValue}}</b> </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Select with option groups</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content >\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\">\r\n                        <mat-option>-- None --</mat-option>\r\n                        <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\" [disabled]=\"group.disabled\">\r\n                            <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\r\n                                {{ pokemon.viewValue }}\r\n                            </mat-option>\r\n                        </mat-optgroup>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Select with multiple selection</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content >\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\r\n                        <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Select with custom trigger text</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content >\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Toppings\" [formControl]=\"toppings2\" multiple>\r\n                        <mat-select-trigger>\r\n                          {{toppings2.value ? toppings2.value[0] : ''}}\r\n                          <small *ngIf=\"toppings2.value?.length > 1\">\r\n                            (+{{toppings2.value.length - 1}} others)\r\n                          </small>\r\n                        </mat-select-trigger>\r\n                        <mat-option *ngFor=\"let topping of toppingList2\" [value]=\"topping\">{{topping}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/select/select.component.ts":
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
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var SelectComponent = /** @class */ (function () {
    function SelectComponent(appSettings) {
        this.appSettings = appSettings;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        //Select with option groups
        this.pokemonControl = new forms_1.FormControl();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
        //Select with multiple selection
        this.toppings = new forms_1.FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        //Select with custom trigger text
        this.toppings2 = new forms_1.FormControl();
        this.toppingList2 = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.settings = this.appSettings.settings;
    }
    SelectComponent = __decorate([
        core_1.Component({
            selector: 'app-select',
            template: __webpack_require__("./ClientApp/app/pages/form-controls/select/select.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;


/***/ }),

/***/ "./ClientApp/app/pages/form-controls/slide-toggle/slide-toggle.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Slide-toggle configuration</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <section class=\"py-1\">\r\n                    <label>Color:</label>\r\n                    <mat-radio-group [(ngModel)]=\"color\">\r\n                        <mat-radio-button value=\"primary\">Primary</mat-radio-button>\r\n                        <mat-radio-button value=\"accent\">Accent</mat-radio-button>\r\n                        <mat-radio-button value=\"warn\">Warn</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n                </section>\r\n\r\n                <hr>\r\n\r\n                <h2 class=\"py-1\">Result</h2>\r\n\r\n                <mat-slide-toggle\r\n                    [color]=\"color\"\r\n                    [checked]=\"checked\"\r\n                    [disabled]=\"disabled\">\r\n                  Slide me!\r\n                </mat-slide-toggle>\r\n                            \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/slide-toggle/slide-toggle.component.ts":
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
var SlideToggleComponent = /** @class */ (function () {
    function SlideToggleComponent(appSettings) {
        this.appSettings = appSettings;
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.settings = this.appSettings.settings;
    }
    SlideToggleComponent = __decorate([
        core_1.Component({
            selector: 'app-slide-toggle',
            template: __webpack_require__("./ClientApp/app/pages/form-controls/slide-toggle/slide-toggle.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], SlideToggleComponent);
    return SlideToggleComponent;
}());
exports.SlideToggleComponent = SlideToggleComponent;


/***/ }),

/***/ "./ClientApp/app/pages/form-controls/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Slider configuration</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <section class=\"py-1\">\r\n                    <mat-form-field>\r\n                        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\r\n                    </mat-form-field>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">Auto ticks</mat-checkbox>\r\n                    <mat-form-field *ngIf=\"showTicks && !autoTicks\">\r\n                        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\r\n                    </mat-form-field>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"invert\">Inverted</mat-checkbox>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n                </section>\r\n\r\n                <hr>\r\n\r\n                <h2 class=\"py-1\">Result</h2>\r\n\r\n                <mat-slider class=\"custom-slider\"\r\n                    [disabled]=\"disabled\"\r\n                    [invert]=\"invert\"\r\n                    [max]=\"max\"\r\n                    [min]=\"min\"\r\n                    [step]=\"step\"\r\n                    [thumb-label]=\"thumbLabel\"\r\n                    [tick-interval]=\"tickInterval\"\r\n                    [(ngModel)]=\"value\"\r\n                    [vertical]=\"vertical\">\r\n                </mat-slider>\r\n                            \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/slider/slider.component.scss":
/***/ (function(module, exports) {

module.exports = ".custom-slider {\n  width: 250px; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/form-controls/slider/slider.component.ts":
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
var SliderComponent = /** @class */ (function () {
    function SliderComponent(appSettings) {
        this.appSettings = appSettings;
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
        this.settings = this.appSettings.settings;
    }
    Object.defineProperty(SliderComponent.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'app-slider',
            template: __webpack_require__("./ClientApp/app/pages/form-controls/slider/slider.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/form-controls/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;


/***/ })

});
//# sourceMappingURL=form-controls.module.chunk.js.map