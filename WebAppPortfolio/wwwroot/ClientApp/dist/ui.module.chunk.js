webpackJsonp(["ui.module"],{

/***/ "./ClientApp/app/pages/ui/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-button>Basic</button>\r\n                <button mat-button color=\"primary\">Primary</button>\r\n                <button mat-button color=\"accent\">Accent</button>\r\n                <button mat-button color=\"warn\">Warn</button>\r\n                <button mat-button disabled>Disabled</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Raised Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-raised-button>Basic</button>\r\n                <button mat-raised-button color=\"primary\">Primary</button>\r\n                <button mat-raised-button color=\"accent\">Accent</button>\r\n                <button mat-raised-button color=\"warn\">Warn</button>\r\n                <button mat-raised-button disabled>Disabled</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Fab Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-fab>Basic</button>\r\n                <button mat-fab color=\"primary\">Primary</button>\r\n                <button mat-fab color=\"accent\">Accent</button>\r\n                <button mat-fab color=\"warn\">Warn</button>\r\n                <button mat-fab disabled>Disabled</button>\r\n                <button mat-fab>\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <a mat-fab routerLink=\".\">Link</a>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Mini Fab Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-mini-fab>Basic</button>\r\n                <button mat-mini-fab color=\"primary\">Primary</button>\r\n                <button mat-mini-fab color=\"accent\">Accent</button>\r\n                <button mat-mini-fab color=\"warn\">Warn</button>\r\n                <button mat-mini-fab disabled>Disabled</button>\r\n                <button mat-mini-fab>\r\n                  <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <a mat-mini-fab routerLink=\".\">Link</a>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Icon Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-icon-button>\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button color=\"primary\">\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button color=\"accent\">\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button color=\"warn\">\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button disabled>\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Toggle Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n                    <mat-button-toggle value=\"left\">\r\n                        <mat-icon>format_align_left</mat-icon>\r\n                    </mat-button-toggle>\r\n                    <mat-button-toggle value=\"center\">\r\n                        <mat-icon>format_align_center</mat-icon>\r\n                    </mat-button-toggle>\r\n                    <mat-button-toggle value=\"right\">\r\n                        <mat-icon>format_align_right</mat-icon>\r\n                    </mat-button-toggle>\r\n                    <mat-button-toggle value=\"justify\" disabled>\r\n                        <mat-icon>format_align_justify</mat-icon>\r\n                    </mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>           \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/buttons/buttons.component.ts":
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
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ButtonsComponent = __decorate([
        core_1.Component({
            selector: 'app-buttons',
            template: __webpack_require__("./ClientApp/app/pages/ui/buttons/buttons.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], ButtonsComponent);
    return ButtonsComponent;
}());
exports.ButtonsComponent = ButtonsComponent;


/***/ }),

/***/ "./ClientApp/app/pages/ui/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"33.3\" class=\"flex-p\"> \r\n        <mat-card class=\"custom-card\">\r\n            <mat-card-header class=\"bg-primary p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-title class=\"m-0\"><h3>Primary Card</h3></mat-card-title>\r\n                <button mat-icon-button><mat-icon>more_vert</mat-icon></button>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/img/app/5.jpg\" alt=\"5\">\r\n            <mat-card-content class=\"p-\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nihil quis mollitia odio magni eaque id porro unde inventore recusandae. Debitis necessitatibus voluptates magnam eveniet odit distinctio odio provident sit.\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions fxLayoutAlign=\"end center\">\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"33.3\" class=\"flex-p\">\r\n        <mat-card class=\"custom-card\">\r\n            <mat-card-header class=\"bg-accent p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-title class=\"m-0\"><h3>Accent Card</h3></mat-card-title>\r\n                <button mat-icon-button><mat-icon>more_vert</mat-icon></button>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/img/app/7.jpg\" alt=\"7\">\r\n            <mat-card-content class=\"p-\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nihil quis mollitia odio magni eaque id porro unde inventore recusandae. Debitis necessitatibus voluptates magnam eveniet odit distinctio odio provident sit.\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions fxLayoutAlign=\"end center\">\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"33.3\" class=\"flex-p\"> \r\n        <mat-card class=\"custom-card\">\r\n            <mat-card-header class=\"bg-warn p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-title class=\"m-0\"><h3>Warn Card</h3></mat-card-title>\r\n                <button mat-icon-button><mat-icon>more_vert</mat-icon></button>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/img/app/2.jpg\" alt=\"2\">\r\n            <mat-card-content class=\"p-\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nihil quis mollitia odio magni eaque id porro unde inventore recusandae. Debitis necessitatibus voluptates magnam eveniet odit distinctio odio provident sit.\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions fxLayoutAlign=\"end center\">\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <img mat-card-image src=\"assets/img/app/1.jpg\" alt=\"Photo 1\">\r\n            <mat-card-content>\r\n                <p>\r\n                  The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                  bred for hunting.\r\n                </p>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facilis optio nihil eos perferendis a ut,\r\n                   iste quae eaque distinctio voluptate officia doloremque, ab, fugiat nemo. Maiores, quasi laboriosam amet?\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions>\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Basic Card Title</mat-card-title>\r\n                <mat-card-subtitle>Subtitle</mat-card-subtitle>\r\n            </mat-card-header> \r\n            <img mat-card-image src=\"assets/img/app/6.jpg\" alt=\"Photo 6\">        \r\n            <mat-card-content>\r\n                <p>\r\n                  The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                  bred for hunting.\r\n                </p>                \r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions>\r\n                <button mat-button>LIKE</button>\r\n                <button mat-button>SHARE</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n            \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/cards/cards.component.ts":
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
var CardsComponent = /** @class */ (function () {
    function CardsComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    CardsComponent = __decorate([
        core_1.Component({
            selector: 'app-cards',
            template: __webpack_require__("./ClientApp/app/pages/ui/cards/cards.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;


/***/ }),

/***/ "./ClientApp/app/pages/ui/chips/chips.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic chips</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-chip-list>\r\n                    <mat-chip>One fish</mat-chip>\r\n                    <mat-chip>Two fish</mat-chip>\r\n                    <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n                    <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n                    <mat-chip color=\"warn\" selected=\"true\">Warn fish</mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Chips with input</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field class=\"w-100\">\r\n                    <mat-chip-list #chipList>\r\n                      <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\r\n                              [removable]=\"removable\" (remove)=\"remove(fruit)\">\r\n                        {{fruit.name}}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                      </mat-chip>\r\n                      <input placeholder=\"New fruit...\"\r\n                            [matChipInputFor]=\"chipList\"\r\n                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                            [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                            (matChipInputTokenEnd)=\"add($event)\" />\r\n                    </mat-chip-list>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Vertical chips</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-chip-list class=\"mat-chip-list-stacked\" aria-orientation=\"vertical\">\r\n                    <mat-chip class=\"custom-chip\">Default chip</mat-chip>\r\n                    <mat-chip color=\"primary\" selected=\"true\" class=\"custom-chip\">Primary chip</mat-chip>\r\n                    <mat-chip color=\"accent\" selected=\"true\" class=\"custom-chip\">Accent chip</mat-chip>\r\n                    <mat-chip color=\"warn\" selected=\"true\" class=\"custom-chip\">Warn chip</mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/chips/chips.component.scss":
/***/ (function(module, exports) {

module.exports = ".custom-chip {\n  max-width: 150px; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/ui/chips/chips.component.ts":
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
var keycodes_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var COMMA = 188;
var ChipsComponent = /** @class */ (function () {
    function ChipsComponent(appSettings) {
        this.appSettings = appSettings;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [keycodes_1.ENTER, COMMA];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' }
        ];
        this.settings = this.appSettings.settings;
    }
    ChipsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    };
    ChipsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsComponent = __decorate([
        core_1.Component({
            selector: 'app-chips',
            template: __webpack_require__("./ClientApp/app/pages/ui/chips/chips.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/ui/chips/chips.component.scss")]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], ChipsComponent);
    return ChipsComponent;
}());
exports.ChipsComponent = ChipsComponent;


/***/ }),

/***/ "./ClientApp/app/pages/ui/dialog/dialog-overview-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\r\n<div mat-dialog-content>\r\n  <p>What's your favorite animal?</p>\r\n  <mat-form-field>\r\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.animal\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.animal\" tabindex=\"2\">Ok</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Dialog Overview</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field>\r\n                    <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\r\n                </mat-form-field>\r\n                <p>\r\n                    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n                </p>\r\n                <p *ngIf=\"animal\" class=\"py-1\">You chose: <i>{{animal}}</i></p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/dialog/dialog.component.ts":
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var DialogComponent = /** @class */ (function () {
    function DialogComponent(appSettings, dialog) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.settings = this.appSettings.settings;
    }
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog',
            template: __webpack_require__("./ClientApp/app/pages/ui/dialog/dialog.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, material_1.MatDialog])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        core_1.Component({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__("./ClientApp/app/pages/ui/dialog/dialog-overview-example-dialog.html"),
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());
exports.DialogOverviewExampleDialog = DialogOverviewExampleDialog;


/***/ }),

/***/ "./ClientApp/app/pages/ui/expansion-panel/expansion-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Basic expansion panel</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-expansion-panel>\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>Personal data</mat-panel-title>\r\n                        <mat-panel-description>Type your name and age</mat-panel-description>\r\n                    </mat-expansion-panel-header>                    \r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"First name\">\r\n                    </mat-form-field>                    \r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Age\">\r\n                    </mat-form-field>\r\n                </mat-expansion-panel>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Expansion panel as accordion</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-accordion class=\"example-headers-align\">\r\n                    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>Personal data</mat-panel-title>\r\n                            <mat-panel-description fxLayoutAlign=\"space-between center\">Type your name and age<mat-icon>account_circle</mat-icon></mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"First name\">\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\r\n                        </mat-form-field>\r\n                        <mat-action-row>\r\n                            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                        </mat-action-row>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>Destination</mat-panel-title>\r\n                            <mat-panel-description fxLayoutAlign=\"space-between center\">Type the country name<mat-icon>map</mat-icon></mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Country\">\r\n                        </mat-form-field>\r\n                        <mat-action-row>\r\n                            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                        </mat-action-row>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>Day of the trip</mat-panel-title>\r\n                            <mat-panel-description fxLayoutAlign=\"space-between center\">Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\r\n                        </mat-form-field>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                        <mat-action-row>\r\n                            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                            <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n                        </mat-action-row>\r\n                    </mat-expansion-panel>\r\n                </mat-accordion>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/expansion-panel/expansion-panel.component.ts":
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
var ExpansionPanelComponent = /** @class */ (function () {
    function ExpansionPanelComponent(appSettings) {
        this.appSettings = appSettings;
        this.step = 0;
        this.settings = this.appSettings.settings;
    }
    ExpansionPanelComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionPanelComponent.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionPanelComponent.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionPanelComponent = __decorate([
        core_1.Component({
            selector: 'app-expansion-panel',
            template: __webpack_require__("./ClientApp/app/pages/ui/expansion-panel/expansion-panel.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], ExpansionPanelComponent);
    return ExpansionPanelComponent;
}());
exports.ExpansionPanelComponent = ExpansionPanelComponent;


/***/ }),

/***/ "./ClientApp/app/pages/ui/grids/grids.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Basic grid-list</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-grid-list cols=\"3\" rowHeight=\"2:1\">\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 1</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 2</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 3</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 4</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 5</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 6</mat-grid-tile>\r\n                </mat-grid-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Dynamic grid-list</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n                    <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\r\n                        {{tile.text}}\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/grids/grids.component.ts":
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
var GridsComponent = /** @class */ (function () {
    function GridsComponent(appSettings) {
        this.appSettings = appSettings;
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
        ];
        this.settings = this.appSettings.settings;
    }
    GridsComponent = __decorate([
        core_1.Component({
            selector: 'app-grids',
            template: __webpack_require__("./ClientApp/app/pages/ui/grids/grids.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], GridsComponent);
    return GridsComponent;
}());
exports.GridsComponent = GridsComponent;


/***/ }),

/***/ "./ClientApp/app/pages/ui/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic list</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item>Item 1</mat-list-item>\r\n                    <mat-list-item>Item 2</mat-list-item>\r\n                    <mat-list-item>Item 3</mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Navigation lists</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-nav-list>\r\n                    <mat-list-item *ngFor=\"let link of [1,2,3]\">\r\n                        <a matLine href=\"javascript:void(0)\">Link {{ link }}</a>\r\n                        <button mat-icon-button>\r\n                            <mat-icon>info</mat-icon>\r\n                        </button>\r\n                    </mat-list-item>\r\n                </mat-nav-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Selection lists</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-selection-list #shoes>\r\n                    <mat-list-option *ngFor=\"let option of [1,2,3,4]\">\r\n                      option {{option}}\r\n                    </mat-list-option>\r\n                </mat-selection-list>\r\n                <p>Options selected: {{shoes.selectedOptions.selected.length}}</p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Multi-line lists</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <h4>Two line list</h4>\r\n                <mat-divider></mat-divider>\r\n                <mat-list>\r\n                    <mat-list-item>\r\n                        <h3 matLine> Line 1 </h3>\r\n                        <p matLine>\r\n                          <span> Line 2 </span>\r\n                          <small> -- content </small>\r\n                        </p>\r\n                    </mat-list-item>\r\n                </mat-list>                \r\n                <h4>Three line list</h4>\r\n                <mat-divider></mat-divider>\r\n                <mat-list>\r\n                    <mat-list-item>\r\n                        <h3 matLine> Line 1 </h3>\r\n                        <p matLine> Line 2 </p>\r\n                        <p matLine> Line 3 </p>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Lists with icons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item *ngFor=\"let number of [1,2,3]\">\r\n                        <mat-icon matListIcon>folder</mat-icon>\r\n                        <h3 matLine> Title {{number}} </h3>\r\n                        <p matLine>\r\n                            <span> subject {{number}} </span>\r\n                            <small> -- content {{number}} </small>\r\n                        </p>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Lists with avatars</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item *ngFor=\"let number of [1,2,3]\">\r\n                        <img matListAvatar [src]=\"'assets/img/avatars/avatar-'+number+'.png'\" alt=\"image\">\r\n                        <h3 matLine> Title {{number}} </h3>\r\n                        <p matLine>\r\n                            <span> subject {{number}} </span>\r\n                            <small> -- content {{number}} </small>\r\n                        </p>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>               \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/lists/lists.component.ts":
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
var ListsComponent = /** @class */ (function () {
    function ListsComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ListsComponent = __decorate([
        core_1.Component({
            selector: 'app-lists',
            template: __webpack_require__("./ClientApp/app/pages/ui/lists/lists.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], ListsComponent);
    return ListsComponent;
}());
exports.ListsComponent = ListsComponent;


/***/ }),

/***/ "./ClientApp/app/pages/ui/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\"> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Progress Spinner Determinate</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-progress-spinner mode=\"determinate\" value=\"65\"></mat-progress-spinner>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>   \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Progress Spinner Indeterminate</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-spinner></mat-spinner>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>     \r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Progress bar</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <p class=\"py-1\">Determinate</p>\r\n                <mat-progress-bar value=\"65\" color=\"accent\"></mat-progress-bar>\r\n                <p class=\"py-1\">Indeterminate</p>\r\n                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n                <p class=\"py-1\">Buffer</p>\r\n                <mat-progress-bar mode=\"buffer\" value=\"40\" bufferValue=\"60\" color=\"warn\"></mat-progress-bar>\r\n                <p class=\"py-1\">Query</p>\r\n                <mat-progress-bar mode=\"query\" color=\"accent\"></mat-progress-bar>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>           \r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/progress/progress.component.ts":
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
var ProgressComponent = /** @class */ (function () {
    function ProgressComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ProgressComponent = __decorate([
        core_1.Component({
            selector: 'app-progress',
            template: __webpack_require__("./ClientApp/app/pages/ui/progress/progress.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], ProgressComponent);
    return ProgressComponent;
}());
exports.ProgressComponent = ProgressComponent;


/***/ }),

/***/ "./ClientApp/app/pages/ui/snack-bar/snack-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Snackbar Overview</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field>\r\n                  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\r\n                </mat-form-field>\r\n                <button mat-button color=\"primary\" (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/snack-bar/snack-bar.component.ts":
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
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var SnackBarComponent = /** @class */ (function () {
    function SnackBarComponent(appSettings, snackBar) {
        this.appSettings = appSettings;
        this.snackBar = snackBar;
        this.settings = this.appSettings.settings;
    }
    SnackBarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackBarComponent = __decorate([
        core_1.Component({
            selector: 'app-snack-bar',
            template: __webpack_require__("./ClientApp/app/pages/ui/snack-bar/snack-bar.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, material_1.MatSnackBar])
    ], SnackBarComponent);
    return SnackBarComponent;
}());
exports.SnackBarComponent = SnackBarComponent;


/***/ }),

/***/ "./ClientApp/app/pages/ui/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Basic tabs</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-tab-group>\r\n                    <mat-tab label=\"Tab 1\"><p class=\"py-1\">Vestibulum dapibus ut libero at vestibulum. Donec cursus vitae leo ut bibendum. Pellentesque ac sagittis elit. In hac habitasse platea dictumst. In sed sapien convallis, laoreet dolor at, ullamcorper eros. Vestibulum et urna vel ligula dignissim feugiat. Cras posuere eleifend nisi quis pharetra. Cras nec varius nulla. Morbi quis lacus eget tellus eleifend varius. Sed ornare imperdiet nibh, sed accumsan nisi feugiat facilisis.</p></mat-tab>\r\n                    <mat-tab label=\"Tab 2\"><p class=\"py-1\">Phasellus ac libero malesuada, hendrerit nibh sit amet, porttitor ex. Quisque nec commodo ipsum. Nam id interdum lacus, ac vulputate metus. Mauris congue, nunc in faucibus porta, leo sapien dignissim elit, ac dignissim nunc neque et arcu. Fusce facilisis finibus risus, ac pulvinar sem mattis at. Sed eu tempor justo. Duis pellentesque, leo ut euismod convallis, mi elit vulputate orci, a vestibulum orci erat at nunc. Fusce rutrum eget lacus eget malesuada.</p></mat-tab>\r\n                </mat-tab-group>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Complex Example</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-tab-group>\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <p class=\"py-1\">\r\n                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                          orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <ng-template mat-tab-label>\r\n                          ⭐\r\n                        </ng-template>\r\n                        <p class=\"py-1\">\r\n                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                          orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>  \r\n                    </mat-tab>\r\n                    <mat-tab label=\"Disabled Tab\" disabled>\r\n                        <p class=\"py-1\"> No content </p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p> \r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <p class=\"py-1\">No content in Tab 4</p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <p class=\"py-1\">No content in Tab 5</p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p> \r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>      \r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/ui/tabs/tabs.component.ts":
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
var TabsComponent = /** @class */ (function () {
    function TabsComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'app-tabs',
            template: __webpack_require__("./ClientApp/app/pages/ui/tabs/tabs.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;


/***/ }),

/***/ "./ClientApp/app/pages/ui/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Tooltip Overview</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <div matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\r\n                    <span>Show tooltip</span>\r\n                    <mat-form-field>\r\n                        <mat-select [(ngModel)]=\"position\">\r\n                            <mat-option value=\"before\">Before</mat-option>\r\n                            <mat-option value=\"after\">After</mat-option>\r\n                            <mat-option value=\"above\">Above</mat-option>\r\n                            <mat-option value=\"below\">Below</mat-option>\r\n                            <mat-option value=\"left\">Left</mat-option>\r\n                            <mat-option value=\"right\">Right</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/ui/tooltip/tooltip.component.ts":
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
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(appSettings) {
        this.appSettings = appSettings;
        this.position = 'before';
        this.settings = this.appSettings.settings;
    }
    TooltipComponent = __decorate([
        core_1.Component({
            selector: 'app-tooltip',
            template: __webpack_require__("./ClientApp/app/pages/ui/tooltip/tooltip.component.html")
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings])
    ], TooltipComponent);
    return TooltipComponent;
}());
exports.TooltipComponent = TooltipComponent;


/***/ }),

/***/ "./ClientApp/app/pages/ui/ui.module.ts":
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
var buttons_component_1 = __webpack_require__("./ClientApp/app/pages/ui/buttons/buttons.component.ts");
var cards_component_1 = __webpack_require__("./ClientApp/app/pages/ui/cards/cards.component.ts");
var lists_component_1 = __webpack_require__("./ClientApp/app/pages/ui/lists/lists.component.ts");
var grids_component_1 = __webpack_require__("./ClientApp/app/pages/ui/grids/grids.component.ts");
var tabs_component_1 = __webpack_require__("./ClientApp/app/pages/ui/tabs/tabs.component.ts");
var expansion_panel_component_1 = __webpack_require__("./ClientApp/app/pages/ui/expansion-panel/expansion-panel.component.ts");
var chips_component_1 = __webpack_require__("./ClientApp/app/pages/ui/chips/chips.component.ts");
var progress_component_1 = __webpack_require__("./ClientApp/app/pages/ui/progress/progress.component.ts");
var tooltip_component_1 = __webpack_require__("./ClientApp/app/pages/ui/tooltip/tooltip.component.ts");
var dialog_component_1 = __webpack_require__("./ClientApp/app/pages/ui/dialog/dialog.component.ts");
var snack_bar_component_1 = __webpack_require__("./ClientApp/app/pages/ui/snack-bar/snack-bar.component.ts");
exports.routes = [
    { path: '', redirectTo: 'buttons', pathMatch: 'full' },
    { path: 'buttons', component: buttons_component_1.ButtonsComponent, data: { breadcrumb: 'Buttons' } },
    { path: 'cards', component: cards_component_1.CardsComponent, data: { breadcrumb: 'Cards' } },
    { path: 'lists', component: lists_component_1.ListsComponent, data: { breadcrumb: 'Lists' } },
    { path: 'grids', component: grids_component_1.GridsComponent, data: { breadcrumb: 'Grids' } },
    { path: 'tabs', component: tabs_component_1.TabsComponent, data: { breadcrumb: 'Tabs' } },
    { path: 'expansion-panel', component: expansion_panel_component_1.ExpansionPanelComponent, data: { breadcrumb: 'Expansion Panel' } },
    { path: 'chips', component: chips_component_1.ChipsComponent, data: { breadcrumb: 'Chips' } },
    { path: 'progress', component: progress_component_1.ProgressComponent, data: { breadcrumb: 'Progress' } },
    { path: 'dialog', component: dialog_component_1.DialogComponent, data: { breadcrumb: 'Dialog' } },
    { path: 'tooltip', component: tooltip_component_1.TooltipComponent, data: { breadcrumb: 'Tooltip' } },
    { path: 'snack-bar', component: snack_bar_component_1.SnackBarComponent, data: { breadcrumb: 'Snackbar' } }
];
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                forms_1.FormsModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                buttons_component_1.ButtonsComponent,
                cards_component_1.CardsComponent,
                lists_component_1.ListsComponent,
                grids_component_1.GridsComponent,
                tabs_component_1.TabsComponent,
                expansion_panel_component_1.ExpansionPanelComponent,
                chips_component_1.ChipsComponent,
                progress_component_1.ProgressComponent,
                tooltip_component_1.TooltipComponent,
                dialog_component_1.DialogComponent,
                dialog_component_1.DialogOverviewExampleDialog,
                snack_bar_component_1.SnackBarComponent
            ],
            entryComponents: [
                dialog_component_1.DialogOverviewExampleDialog
            ]
        })
    ], UiModule);
    return UiModule;
}());
exports.UiModule = UiModule;


/***/ })

});
//# sourceMappingURL=ui.module.chunk.js.map