webpackJsonp(["users.module"],{

/***/ "./ClientApp/app/pages/users/user-dialog/user-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title><span *ngIf=\"!user.id\">Add</span><span *ngIf=\"user.id\">Edit</span> user</h1>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"form\" class=\"user-form\">      \r\n        <mat-tab-group class=\"vertical-tabs\">\r\n            <mat-tab label=\"Basic\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-placeholder><mat-icon>person</mat-icon> Username</mat-placeholder>\r\n                        <input matInput formControlName=\"username\" required>\r\n                        <mat-error *ngIf=\"form.controls.username.errors?.required\">Username is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.username.hasError('minlength')\">Username isn't long enough, minimum of 5 characters</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-placeholder><mat-icon>vpn_key</mat-icon> Password</mat-placeholder>\r\n                        <input matInput formControlName=\"password\" required [type]=\"passwordHide ? 'password' : 'text'\">\r\n                        <mat-icon matSuffix (click)=\"passwordHide = !passwordHide\">{{passwordHide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                        <mat-error *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Personal\" formGroupName=\"profile\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Surname\" formControlName=\"surname\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput [matDatepicker]=\"birthday\" placeholder=\"Birthday\" formControlName=\"birthday\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"birthday\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #birthday></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <mat-radio-group formControlName=\"gender\">\r\n                        <mat-radio-button value=\"male\" labelPosition=\"before\">Male</mat-radio-button>\r\n                        <mat-radio-button value=\"female\" labelPosition=\"before\">Female</mat-radio-button>\r\n                    </mat-radio-group>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Image url\" formControlName=\"image\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Work\" formGroupName=\"work\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Company\" formControlName=\"company\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Position\" formControlName=\"position\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Salary\" formControlName=\"salary\">\r\n                        <span matPrefix>$&nbsp;</span>\r\n                        <span matSuffix>.00</span>\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Contacts\" formGroupName=\"contacts\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Phone\" formControlName=\"phone\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Address\" formControlName=\"address\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Social life\" formGroupName=\"social\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Facebook\" formControlName=\"facebook\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Twitter\" formControlName=\"twitter\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Google\" formControlName=\"google\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Settings\" formGroupName=\"settings\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-checkbox formControlName=\"isActive\">Active</mat-checkbox>\r\n                    <mat-checkbox formControlName=\"isDeleted\">Blocked</mat-checkbox>\r\n                    <p *ngIf=\"user.id\"><span>Registration date:</span> <i>{{user.settings.registrationDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i></p> \r\n                    <p *ngIf=\"user.id\"><span>Last joined date:</span> <i>{{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i> </p>     \r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"form.value\" [disabled]=\"!form.valid\"><span *ngIf=\"!user.id\">Save</span><span *ngIf=\"user.id\">Update</span></button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"close()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/users/user-dialog/user-dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ".user-form .form-field-outer {\n  width: 280px; }\n\n.user-form .mat-radio-button {\n  margin-right: 12px; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/users/user-dialog/user-dialog.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var user_model_1 = __webpack_require__("./ClientApp/app/pages/users/user.model.ts");
var UserDialogComponent = /** @class */ (function () {
    function UserDialogComponent(dialogRef, user, fb) {
        this.dialogRef = dialogRef;
        this.user = user;
        this.fb = fb;
        this.passwordHide = true;
        this.form = this.fb.group({
            id: null,
            username: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])],
            password: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            profile: this.fb.group({
                name: null,
                surname: null,
                birthday: null,
                gender: null,
                image: null
            }),
            work: this.fb.group({
                company: null,
                position: null,
                salary: null
            }),
            contacts: this.fb.group({
                email: null,
                phone: null,
                address: null
            }),
            social: this.fb.group({
                facebook: null,
                twitter: null,
                google: null
            }),
            settings: this.fb.group({
                isActive: null,
                isDeleted: null,
                registrationDate: null,
                joinedDate: null
            })
        });
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        if (this.user) {
            this.form.setValue(this.user);
        }
        else {
            this.user = new user_model_1.User();
            this.user.profile = new user_model_1.UserProfile();
            this.user.work = new user_model_1.UserWork();
            this.user.contacts = new user_model_1.UserContacts();
            this.user.social = new user_model_1.UserSocial();
            this.user.settings = new user_model_1.UserSettings();
        }
    };
    UserDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    UserDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-user-dialog',
            template: __webpack_require__("./ClientApp/app/pages/users/user-dialog/user-dialog.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/users/user-dialog/user-dialog.component.scss")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef,
            user_model_1.User,
            forms_1.FormBuilder])
    ], UserDialogComponent);
    return UserDialogComponent;
}());
exports.UserDialogComponent = UserDialogComponent;


/***/ }),

/***/ "./ClientApp/app/pages/users/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());
exports.UserProfile = UserProfile;
var UserWork = /** @class */ (function () {
    function UserWork() {
    }
    return UserWork;
}());
exports.UserWork = UserWork;
var UserContacts = /** @class */ (function () {
    function UserContacts() {
    }
    return UserContacts;
}());
exports.UserContacts = UserContacts;
var UserSocial = /** @class */ (function () {
    function UserSocial() {
    }
    return UserSocial;
}());
exports.UserSocial = UserSocial;
var UserSettings = /** @class */ (function () {
    function UserSettings() {
    }
    return UserSettings;
}());
exports.UserSettings = UserSettings;


/***/ }),

/***/ "./ClientApp/app/pages/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"flex-p\">\r\n    <div fxLayout=\"row\">\r\n        <mat-button-toggle-group #controls=\"matButtonToggleGroup\">            \r\n            <mat-button-toggle value=\"add\" (click)=\"openUserDialog(null)\">\r\n                <mat-icon>person_add</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"search\">\r\n                <mat-icon>search</mat-icon>\r\n            </mat-button-toggle>           \r\n        </mat-button-toggle-group>            \r\n    </div>\r\n    <form class=\"user-search\" [class.show]=\"controls.value == 'search'\">\r\n        <mat-form-field class=\"user-search-input\">\r\n            <input matInput placeholder=\"Search user by name...\" [(ngModel)]=\"searchText\" name=\"search\">\r\n        </mat-form-field>\r\n    </form>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <mat-button-toggle-group #viewType=\"matButtonToggleGroup\">            \r\n            <mat-button-toggle value=\"grid\" checked=\"true\">\r\n                <mat-icon>view_module</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"list\">\r\n                <mat-icon>view_list</mat-icon>\r\n            </mat-button-toggle>           \r\n        </mat-button-toggle-group>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"viewType.value == 'grid'\" fxLayout=\"row wrap\">    \r\n    <div *ngFor=\"let user of users | UserSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: page }\" fxFlex=\"100\" fxFlex.gt-md=\"33.3\" fxFlex.md=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">  \r\n            <div class=\"bg-primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <h3 *ngIf=\"!user.settings.isDeleted\" class=\"user-name\">{{user.profile.name}} {{user.profile.surname}}</h3> \r\n                <h3 *ngIf=\"user.settings.isDeleted\" class=\"user-name\">User blocked</h3>\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n            </div>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n                <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                    <button mat-menu-item (click)=\"openUserDialog(user)\">\r\n                        <mat-icon>mode_edit</mat-icon>\r\n                        <span>Edit</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"deleteUser(user);\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Delete</span>\r\n                    </button>\r\n                </span>\r\n            </mat-menu>\r\n            <div class=\"user-content\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                <div fxFlex=\"30\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"user-img\">\r\n                        <img *ngIf=\"user.profile.image\" [src]=\"user.profile.image\" class=\"transition-2\" [class.blocked]=\"user.settings.isDeleted\">\r\n                        <img *ngIf=\"!user.profile.image\" src=\"assets/img/users/default-user.jpg\" class=\"transition-2\" [class.blocked]=\"user.settings.isDeleted\">  \r\n                        <mat-icon *ngIf=\"user.settings.isDeleted\" class=\"warn-color\">block</mat-icon>\r\n                    </div>                                            \r\n                    <div class=\"user-social\">\r\n                        <mat-slide-toggle color=\"primary\" [checked]=\"user.settings.isDeleted\" (change)=\"user.settings.isDeleted = !user.settings.isDeleted\"></mat-slide-toggle>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"70\" fxLayout=\"column\" class=\"user-details transition-2\" [class.blocked]=\"user.settings.isDeleted\">\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">card_membership</mat-icon>\r\n                        <span>{{user.work.position}}</span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">mail_outline</mat-icon>\r\n                        <span>{{user.contacts.email}}</span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">call</mat-icon>\r\n                        <span>{{user.contacts.phone}}</span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">location_on</mat-icon>\r\n                        <span>{{user.contacts.address}}</span>\r\n                    </p>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">date_range</mat-icon>\r\n                        <span>Joined {{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"viewType.value == 'list'\" fxLayout=\"row wrap\">\r\n    <div *ngFor=\"let user of users | UserSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: page }\" fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">  \r\n            <div class=\"bg-primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <h3 *ngIf=\"!user.settings.isDeleted\" class=\"user-name\">{{user.profile.name}} {{user.profile.surname}}</h3> \r\n                <h3 *ngIf=\"user.settings.isDeleted\" class=\"user-name\">User blocked</h3>\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n            </div>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n                <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                    <button mat-menu-item (click)=\"openUserDialog(user);\">\r\n                        <mat-icon>mode_edit</mat-icon>\r\n                        <span>Edit</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"deleteUser(user);\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Delete</span>\r\n                    </button>\r\n                </span>\r\n            </mat-menu>\r\n            <div class=\"user-content\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                <div fxFlex=\"20\" fxFlex.xs=\"30\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"user-img\">\r\n                        <img *ngIf=\"user.profile.image\" [src]=\"user.profile.image\" class=\"transition-2\" [class.blocked]=\"user.settings.isDeleted\"> \r\n                        <img *ngIf=\"!user.profile.image\" src=\"assets/img/users/default-user.jpg\" class=\"transition-2\" [class.blocked]=\"user.settings.isDeleted\">  \r\n                        <mat-icon *ngIf=\"user.settings.isDeleted\" class=\"warn-color\">block</mat-icon>   \r\n                    </div>                                            \r\n                    <div class=\"user-social\">\r\n                        <mat-slide-toggle color=\"primary\" [checked]=\"user.settings.isDeleted\" (change)=\"user.settings.isDeleted = !user.settings.isDeleted\"></mat-slide-toggle>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"80\" fxFlex.xs=\"70\" fxLayout=\"row\" fxLayout.xs=\"column\" class=\"user-details transition-2\" [class.blocked]=\"user.settings.isDeleted\">\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"100\" fxLayout=\"column\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"muted-text\">business</mat-icon>\r\n                            <span>{{user.work.company}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"muted-text\">card_membership</mat-icon>\r\n                            <span>{{user.work.position}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"muted-text\">attach_money</mat-icon>\r\n                            <span>{{user.work.salary}}</span>\r\n                        </p>                                               \r\n                    </div>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"100\" fxLayout=\"column\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"muted-text\">mail_outline</mat-icon>\r\n                            <span>{{user.contacts.email}}</span>\r\n                        </p> \r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"muted-text\">call</mat-icon>\r\n                            <span>{{user.contacts.phone}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"muted-text\">location_on</mat-icon>\r\n                            <span>{{user.contacts.address}}</span>\r\n                        </p>                        \r\n                    </div>\r\n                    <div fxFlex=\"40\" fxFlex.xs=\"100\" fxLayout=\"column\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"muted-text\">event_available</mat-icon>\r\n                            <span>Registration {{user.settings.registrationDate | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"muted-text\">date_range</mat-icon>\r\n                            <span>Joined {{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</span>\r\n                        </p> \r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon *ngIf=\"user.settings.isDeleted\" class=\"muted-text\">person_outline</mat-icon>\r\n                            <mat-icon *ngIf=\"!user.settings.isDeleted\" class=\"muted-text\">person</mat-icon>\r\n                            <span>{{ (user.settings.isDeleted) ? 'Blocked' : 'Active' }}</span>\r\n                        </p>                       \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"users\" fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0 text-center\">           \r\n            <pagination-controls class=\"gradus-pagination\" autoHide=\"true\" maxSize=\"3\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!users\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>    \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/users/users.component.scss":
/***/ (function(module, exports) {

module.exports = ".user-name {\n  padding: 0 12px;\n  font-weight: 400; }\n\n.user-content {\n  padding: 10px; }\n\n.user-content .user-img {\n    position: relative; }\n\n.user-content .user-img img {\n      border-radius: 50%;\n      width: 80px;\n      height: 80px; }\n\n.user-content .user-img img.blocked {\n        opacity: 0.5; }\n\n.user-content .user-img .mat-icon {\n      position: absolute;\n      top: -8px;\n      left: -8px;\n      font-size: 96px;\n      height: 96px;\n      width: 96px; }\n\n.user-content .mat-slide-toggle {\n    margin-top: 15px; }\n\n.user-content .user-details span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.user-content .user-details .mat-icon {\n    padding: 2px 10px; }\n\n.user-content .user-details.blocked {\n    opacity: 0.5; }\n\n.user-search {\n  width: 0;\n  overflow: hidden;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n\n.user-search .mat-form-field {\n    width: 100% !important;\n    text-align: center !important;\n    height: 36px; }\n\n.user-search .mat-form-field-infix {\n    padding: 5px; }\n\n.user-search .mat-input-element {\n    text-align: center; }\n\n.user-search.show {\n    width: 100%;\n    overflow: visible; }\n\n.user-spinner {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/users/users.component.ts":
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
var users_service_1 = __webpack_require__("./ClientApp/app/pages/users/users.service.ts");
var user_dialog_component_1 = __webpack_require__("./ClientApp/app/pages/users/user-dialog/user-dialog.component.ts");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(appSettings, dialog, usersService) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.usersService = usersService;
        this.settings = this.appSettings.settings;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.users = null; //for show spinner each time
        this.usersService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UsersComponent.prototype.addUser = function (user) {
        var _this = this;
        this.usersService.addUser(user).subscribe(function (user) { return _this.getUsers(); });
    };
    UsersComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.usersService.updateUser(user).subscribe(function (user) { return _this.getUsers(); });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.usersService.deleteUser(user.id).subscribe(function (user) { return _this.getUsers(); });
    };
    UsersComponent.prototype.onPageChanged = function (event) {
        this.page = event;
        this.getUsers();
        if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
        }
        else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    };
    UsersComponent.prototype.openUserDialog = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(user_dialog_component_1.UserDialogComponent, {
            data: user
        });
        dialogRef.afterClosed().subscribe(function (user) {
            if (user) {
                (user.id) ? _this.updateUser(user) : _this.addUser(user);
            }
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            template: __webpack_require__("./ClientApp/app/pages/users/users.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/users/users.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [users_service_1.UsersService]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings,
            material_1.MatDialog,
            users_service_1.UsersService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;


/***/ }),

/***/ "./ClientApp/app/pages/users/users.data.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UsersData = /** @class */ (function () {
    function UsersData() {
    }
    UsersData.prototype.createDb = function () {
        var users = [
            {
                id: 1,
                username: "pretty",
                password: "pretty123",
                profile: {
                    name: "Ashley",
                    surname: "Ahlberg",
                    birthday: new Date(1981, 2, 29),
                    gender: "female",
                    image: "assets/img/profile/ashley.jpg"
                },
                work: {
                    company: "Google",
                    position: "Product designer",
                    salary: 5000
                },
                contacts: {
                    email: "ashley@gmail.com",
                    phone: "(202) 756-9756",
                    address: "Washington"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-10-13T12:20:40.511Z",
                    joinedDate: "2017-04-21T18:25:43.511Z"
                }
            },
            {
                id: 2,
                username: "bruno.V",
                password: "bruno123",
                profile: {
                    name: "Bruno",
                    surname: "Vespa",
                    birthday: new Date(1992, 11, 20),
                    gender: "male",
                    image: "assets/img/profile/bruno.jpg"
                },
                work: {
                    company: "Dell EMC",
                    position: "Sale manager",
                    salary: 17000
                },
                contacts: {
                    email: "bruno@dell.com",
                    phone: "(415) 231-0332",
                    address: "San Francisco"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2011-01-05T08:45:23.511Z",
                    joinedDate: "2017-05-20T18:25:43.511Z"
                }
            },
            {
                id: 3,
                username: "andy.79",
                password: "andy123",
                profile: {
                    name: "Andy",
                    surname: "Warhol",
                    birthday: new Date(1979, 10, 21),
                    gender: "male",
                    image: "assets/img/avatars/avatar-3.png"
                },
                work: {
                    company: "Adecco",
                    position: "Product manager",
                    salary: 13000
                },
                contacts: {
                    email: "andy@adecco.com",
                    phone: "(212) 457-2308",
                    address: "New York"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2014-11-01T19:35:43.511Z",
                    joinedDate: "2017-06-28T15:25:43.511Z"
                }
            },
            {
                id: 4,
                username: "julia.a",
                password: "julia123",
                profile: {
                    name: "Julia",
                    surname: "Aniston",
                    birthday: new Date(1982, 6, 18),
                    gender: "female",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Apple",
                    position: "Sales manager",
                    salary: 18000
                },
                contacts: {
                    email: "julia@apple.com",
                    phone: "(224) 267-1346",
                    address: "Illinois, Chicago"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-06-29T15:15:40.511Z"
                }
            },
            {
                id: 5,
                username: "lusia.m",
                password: "lusia123",
                profile: {
                    name: "Lusia",
                    surname: "Manuel",
                    birthday: new Date(1992, 12, 2),
                    gender: "female",
                    image: "assets/img/avatars/avatar-7.png"
                },
                work: {
                    company: "Alphabet",
                    position: "Office manager",
                    salary: 10000
                },
                contacts: {
                    email: "lusia@alphabet.com",
                    phone: "(224) 267-1346",
                    address: "California, Los Angeles"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: true,
                    registrationDate: "2014-01-10T10:20:20.511Z",
                    joinedDate: "2017-06-28T12:20:40.511Z"
                }
            },
            {
                id: 6,
                username: "adam.82",
                password: "adam123",
                profile: {
                    name: "Adam",
                    surname: "Sandler",
                    birthday: new Date(1987, 12, 24),
                    gender: "male",
                    image: "assets/img/profile/adam.jpg"
                },
                work: {
                    company: "General Electric",
                    position: "Product manager",
                    salary: 21000
                },
                contacts: {
                    email: "adam@gen-el.com",
                    phone: "(224) 267-1346",
                    address: "Texas, Houston"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-06-27T14:20:40.511Z"
                }
            },
            {
                id: 7,
                username: "tereza.s",
                password: "tereza123",
                profile: {
                    name: "Tereza",
                    surname: "Stiles",
                    birthday: new Date(1979, 7, 9),
                    gender: "female",
                    image: "assets/img/profile/tereza.jpg"
                },
                work: {
                    company: "Southwest Airlines",
                    position: "Sale manager",
                    salary: 31000
                },
                contacts: {
                    email: "tereza@airlines.com",
                    phone: "(214) 617-2614",
                    address: "Texas, Dallas"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-06-29T15:20:40.511Z"
                }
            },
            {
                id: 8,
                username: "michael.b",
                password: "michael123",
                profile: {
                    name: "Michael",
                    surname: "Blair",
                    birthday: new Date(1978, 11, 15),
                    gender: "male",
                    image: "assets/img/profile/michael.jpg"
                },
                work: {
                    company: "Microsoft",
                    position: "Software developer",
                    salary: 50000
                },
                contacts: {
                    email: "michael@microsoft.com",
                    phone: "(267) 388-1637",
                    address: "Pennsylvania, Philadelphia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-06-30T11:30:40.511Z"
                }
            },
            {
                id: 9,
                username: "michelle.81",
                password: "michelle123",
                profile: {
                    name: "Michelle",
                    surname: "Ormond",
                    birthday: new Date(1981, 11, 18),
                    gender: "female",
                    image: "assets/img/avatars/avatar-5.png"
                },
                work: {
                    company: "Starbucks",
                    position: "Sale manager",
                    salary: 15000
                },
                contacts: {
                    email: "michelle@starbucks.com",
                    phone: "(267) 388-1637",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: true,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-03-29T17:20:40.511Z"
                }
            }
        ];
        return { users: users };
    };
    return UsersData;
}());
exports.UsersData = UsersData;


/***/ }),

/***/ "./ClientApp/app/pages/users/users.module.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var angular_in_memory_web_api_1 = __webpack_require__("./node_modules/angular-in-memory-web-api/index.js");
var ngx_pagination_1 = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var pipes_module_1 = __webpack_require__("./ClientApp/app/theme/pipes/pipes.module.ts");
var users_component_1 = __webpack_require__("./ClientApp/app/pages/users/users.component.ts");
var users_data_1 = __webpack_require__("./ClientApp/app/pages/users/users.data.ts");
var user_dialog_component_1 = __webpack_require__("./ClientApp/app/pages/users/user-dialog/user-dialog.component.ts");
exports.routes = [
    { path: '', component: users_component_1.UsersComponent, pathMatch: 'full' }
];
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forChild(exports.routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(users_data_1.UsersData, { delay: 500 }),
                ngx_pagination_1.NgxPaginationModule,
                shared_module_1.SharedModule,
                pipes_module_1.PipesModule
            ],
            declarations: [
                users_component_1.UsersComponent,
                user_dialog_component_1.UserDialogComponent
            ],
            entryComponents: [
                user_dialog_component_1.UserDialogComponent
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./ClientApp/app/pages/users/users.service.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.url = "api/users";
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.url);
    };
    UsersService.prototype.addUser = function (user) {
        return this.http.post(this.url, user);
    };
    UsersService.prototype.updateUser = function (user) {
        return this.http.put(this.url, user);
    };
    UsersService.prototype.deleteUser = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    UsersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;


/***/ }),

/***/ "./node_modules/@angular/http/esm5/http.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserXhr; });
/* unused harmony export JSONPBackend */
/* unused harmony export JSONPConnection */
/* unused harmony export CookieXSRFStrategy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return XHRBackend; });
/* unused harmony export XHRConnection */
/* unused harmony export BaseRequestOptions */
/* unused harmony export RequestOptions */
/* unused harmony export BaseResponseOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RequestMethod; });
/* unused harmony export ResponseContentType */
/* unused harmony export ResponseType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Headers; });
/* unused harmony export Http */
/* unused harmony export Jsonp */
/* unused harmony export HttpModule */
/* unused harmony export JsonpModule */
/* unused harmony export Connection */
/* unused harmony export ConnectionBackend */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return XSRFStrategy; });
/* unused harmony export Request */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Response; });
/* unused harmony export QueryEncoder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return URLSearchParams; });
/* unused harmony export VERSION */
/* unused harmony export ɵe */
/* unused harmony export ɵf */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/**
 * @license Angular v5.2.11
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated use \@angular/common/http instead
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = /**
     * @return {?}
     */
    function () { return /** @type {?} */ ((new XMLHttpRequest())); };
    BrowserXhr.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
var RequestMethod = {
    Get: 0,
    Post: 1,
    Put: 2,
    Delete: 3,
    Options: 4,
    Head: 5,
    Patch: 6,
};
RequestMethod[RequestMethod.Get] = "Get";
RequestMethod[RequestMethod.Post] = "Post";
RequestMethod[RequestMethod.Put] = "Put";
RequestMethod[RequestMethod.Delete] = "Delete";
RequestMethod[RequestMethod.Options] = "Options";
RequestMethod[RequestMethod.Head] = "Head";
RequestMethod[RequestMethod.Patch] = "Patch";
/** @enum {number} */
var ReadyState = {
    Unsent: 0,
    Open: 1,
    HeadersReceived: 2,
    Loading: 3,
    Done: 4,
    Cancelled: 5,
};
ReadyState[ReadyState.Unsent] = "Unsent";
ReadyState[ReadyState.Open] = "Open";
ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
ReadyState[ReadyState.Loading] = "Loading";
ReadyState[ReadyState.Done] = "Done";
ReadyState[ReadyState.Cancelled] = "Cancelled";
/** @enum {number} */
var ResponseType = {
    Basic: 0,
    Cors: 1,
    Default: 2,
    Error: 3,
    Opaque: 4,
};
ResponseType[ResponseType.Basic] = "Basic";
ResponseType[ResponseType.Cors] = "Cors";
ResponseType[ResponseType.Default] = "Default";
ResponseType[ResponseType.Error] = "Error";
ResponseType[ResponseType.Opaque] = "Opaque";
/** @enum {number} */
var ContentType = {
    NONE: 0,
    JSON: 1,
    FORM: 2,
    FORM_DATA: 3,
    TEXT: 4,
    BLOB: 5,
    ARRAY_BUFFER: 6,
};
ContentType[ContentType.NONE] = "NONE";
ContentType[ContentType.JSON] = "JSON";
ContentType[ContentType.FORM] = "FORM";
ContentType[ContentType.FORM_DATA] = "FORM_DATA";
ContentType[ContentType.TEXT] = "TEXT";
ContentType[ContentType.BLOB] = "BLOB";
ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
/** @enum {number} */
var ResponseContentType = {
    Text: 0,
    Json: 1,
    ArrayBuffer: 2,
    Blob: 3,
};
ResponseContentType[ResponseContentType.Text] = "Text";
ResponseContentType[ResponseContentType.Json] = "Json";
ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
ResponseContentType[ResponseContentType.Blob] = "Blob";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '\@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /**
         * \@internal header names are lower case
         */
        this._headers = new Map();
        /**
         * \@internal map lower case names to actual names
         */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var /** @type {?} */ values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    Headers.fromResponseHeaderString = /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    function (headersString) {
        var /** @type {?} */ headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var /** @type {?} */ index = line.indexOf(':');
            if (index > 0) {
                var /** @type {?} */ name_1 = line.slice(0, index);
                var /** @type {?} */ value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.append = /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.delete = /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Headers.prototype.forEach = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.get = /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.has = /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    /**
     * Returns the names of the headers
     * @return {?}
     */
    Headers.prototype.keys = /**
     * Returns the names of the headers
     * @return {?}
     */
    function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.set = /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    /**
     * Returns values of all headers.
     * @return {?}
     */
    Headers.prototype.values = /**
     * Returns values of all headers.
     * @return {?}
     */
    function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    /**
     * Returns string of all headers.
     * @return {?}
     */
    Headers.prototype.toJSON = /**
     * Returns string of all headers.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ serialized = {};
        this._headers.forEach(function (values, name) {
            var /** @type {?} */ split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[/** @type {?} */ ((_this._normalizedNames.get(name)))] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.getAll = /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    /**
     * This method is not implemented.
     * @return {?}
     */
    Headers.prototype.entries = /**
     * This method is not implemented.
     * @return {?}
     */
    function () { throw new Error('"entries" method is not implemented on Headers class'); };
    /**
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.mayBeSetNormalizedName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {\@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {\@link Response Responses} for
 * mock responses (see {\@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '\@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    ResponseOptions.prototype.merge = /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {\@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link ResponseOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create {\@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '\@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = function () { return []; };
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {\@link Request}.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());
/**
 * Interface for options to construct a RequestOptions, based on
 * [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
 *
 * @deprecated use \@angular/common/http instead
 * @record
 */

/**
 * Required structure when constructing new Request();
 * @record
 */

/**
 * Interface for options to construct a Response, based on
 * [ResponseInit](https://fetch.spec.whatwg.org/#responseinit) from the Fetch spec.
 *
 * @deprecated use \@angular/common/http instead
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} method
 * @return {?}
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
/**
 * @param {?} xhr
 * @return {?}
 */
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * @param {?} input
 * @return {?}
 */

/**
 * @param {?} input
 * @return {?}
 */
function stringToArrayBuffer(input) {
    var /** @type {?} */ view = new Uint16Array(input.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?=} rawParams
 * @return {?}
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var /** @type {?} */ map = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated use \@angular/common/http instead
 *
 */
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    QueryEncoder.prototype.encodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    QueryEncoder.prototype.encodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${\@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '\@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated use \@angular/common/http instead
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    /**
     * @return {?}
     */
    URLSearchParams.prototype.clone = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.has = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { return this.paramsMap.has(param); };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.get = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        var /** @type {?} */ storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.getAll = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { return this.paramsMap.get(param) || []; };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.set = /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.setAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.append = /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    function (param, val) {
        if (val === void 0 || val === null)
            return;
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.appendAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.replaceAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @return {?}
     */
    URLSearchParams.prototype.toString = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) {
                return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v));
            });
        });
        return paramsList.join('&');
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.delete = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {\@link Request} and {\@link Response}
 * https://fetch.spec.whatwg.org/#body
 * @abstract
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    Body.prototype.json = /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    function () {
        if (typeof this._body === 'string') {
            return JSON.parse(/** @type {?} */ (this._body));
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    Body.prototype.text = /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(/** @type {?} */ (this._body)));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    Body.prototype.arrayBuffer = /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    function () {
        if (this._body instanceof ArrayBuffer) {
            return /** @type {?} */ (this._body);
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    Body.prototype.blob = /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    function () {
        if (this._body instanceof Blob) {
            return /** @type {?} */ (this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated use \@angular/common/http instead
 */
var Response = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = /** @type {?} */ ((responseOptions.status));
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = /** @type {?} */ ((responseOptions.type));
        _this.url = /** @type {?} */ ((responseOptions.url));
        return _this;
    }
    /**
     * @return {?}
     */
    Response.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
/**
 * @return {?}
 */
function _getJsonpConnections() {
    var /** @type {?} */ w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    /**
     * @param {?} url
     * @return {?}
     */
    BrowserJsonp.prototype.build = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var /** @type {?} */ node = document.createElement('script');
        node.src = url;
        return node;
    };
    /**
     * @return {?}
     */
    BrowserJsonp.prototype.nextRequestID = /**
     * @return {?}
     */
    function () { return "__req" + _nextRequestId++; };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.requestCallback = /**
     * @param {?} id
     * @return {?}
     */
    function (id) { return JSONP_HOME + "." + id + ".finished"; };
    /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    BrowserJsonp.prototype.exposeConnection = /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    function (id, connection) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = connection;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.removeConnection = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.send = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
    // Remove <script> element from the DOM
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.cleanup = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(/** @type {?} */ ((node)));
        }
    };
    BrowserJsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserJsonp.ctorParameters = function () { return []; };
    return BrowserJsonp;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated use \@angular/common/http instead
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var /** @type {?} */ id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var /** @type {?} */ callback = _dom.requestCallback(_this._id);
            var /** @type {?} */ url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var /** @type {?} */ script = _this._script = _dom.build(url);
            var /** @type {?} */ onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var /** @type {?} */ responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var /** @type {?} */ onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection.prototype.finished = /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated use \@angular/common/http instead
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    JSONPBackend.prototype.createConnection = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    JSONPBackend.ctorParameters = function () { return [
        { type: BrowserJsonp, },
        { type: ResponseOptions, },
    ]; };
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {\@link MockConnection} may be interacted with in tests.
 *
 * @deprecated use \@angular/common/http instead
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (responseObserver) {
            var /** @type {?} */ _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var /** @type {?} */ onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var /** @type {?} */ status = _xhr.status === 1223 ? 204 : _xhr.status;
                var /** @type {?} */ body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var /** @type {?} */ headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var /** @type {?} */ url = getResponseURL(_xhr) || req.url;
                var /** @type {?} */ statusText = _xhr.statusText || 'OK';
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var /** @type {?} */ response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var /** @type {?} */ onError = function (err) {
                var /** @type {?} */ responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(/** @type {?} */ ((name)), values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    XHRConnection.prototype.setDetectedContentType = /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var /** @type {?} */ blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated use \@angular/common/http instead
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    CookieXSRFStrategy.prototype.configureRequest = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var /** @type {?} */ xsrfToken = Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {\@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
 * \@Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated use \@angular/common/http instead
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    XHRBackend.prototype.createConnection = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () { return [
        { type: BrowserXhr, },
        { type: ResponseOptions, },
        { type: XSRFStrategy, },
    ]; };
    return XHRBackend;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {\@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: /**
         * @deprecated from 4.0.0. Use params instead.
         * @return {?}
         */
        function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: /**
         * @deprecated from 4.0.0. Use params instead.
         * @param {?} params
         * @return {?}
         */
        function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    RequestOptions.prototype.merge = /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    /**
     * @param {?=} params
     * @return {?}
     */
    RequestOptions.prototype._mergeSearchParams = /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    /**
     * @param {?=} objParams
     * @return {?}
     */
    RequestOptions.prototype._parseParams = /**
     * @param {?=} objParams
     * @return {?}
     */
    function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var /** @type {?} */ params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var /** @type {?} */ value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    RequestOptions.prototype._appendParam = /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {\@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {\@link RequestMethod RequestMethod.Get}
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link RequestOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create and send {\@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '\@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {\@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = function () { return []; };
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {\@link Http} and
 * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {\@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '\@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
 *
 * \@Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Request = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var /** @type {?} */ url = requestOptions.url;
        _this.url = /** @type {?} */ ((requestOptions.url));
        var /** @type {?} */ paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var /** @type {?} */ params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var /** @type {?} */ prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(/** @type {?} */ ((requestOptions.method)));
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = /** @type {?} */ ((requestOptions.withCredentials));
        _this.responseType = /** @type {?} */ ((requestOptions.responseType));
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    Request.prototype.detectContentType = /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    Request.prototype.detectContentTypeFromBody = /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    Request.prototype.getBody = /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
/**
 * @param {?} params
 * @return {?}
 */
function urlEncodeParams(params) {
    var /** @type {?} */ searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var /** @type {?} */ value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['FormData'] || noop;
var Blob$1 = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['Blob'] || noop;
var ArrayBuffer$1 = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['ArrayBuffer'] || noop;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} backend
 * @param {?} request
 * @return {?}
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
/**
 * @param {?} defaultOpts
 * @param {?} providedOpts
 * @param {?} method
 * @param {?} url
 * @return {?}
 */
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var /** @type {?} */ newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return /** @type {?} */ (newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        })));
    }
    return /** @type {?} */ (newOptions.merge(new RequestOptions({ method: method, url: url })));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {\@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '\@angular/http';
 * import 'rxjs/add/operator/map'
 * \@Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {\@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '\@angular/http';
 * import {MockBackend} from '\@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.request = /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url))));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.get = /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.post = /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.put = /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.delete = /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.patch = /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.head = /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.options = /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Http.ctorParameters = function () { return [
        { type: ConnectionBackend, },
        { type: RequestOptions, },
    ]; };
    return Http;
}());
/**
 * @deprecated use \@angular/common/http instead
 */
var Jsonp = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Jsonp.prototype.request = /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url)));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = function () { return [
        { type: ConnectionBackend, },
        { type: RequestOptions, },
    ]; };
    return Jsonp;
}(Http));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
/**
 * @param {?} xhrBackend
 * @param {?} requestOptions
 * @return {?}
 */
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
/**
 * @param {?} jsonpBackend
 * @param {?} requestOptions
 * @return {?}
 */
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated use \@angular/common/http instead
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                        BrowserXhr,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        XHRBackend,
                        { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpModule.ctorParameters = function () { return []; };
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated use \@angular/common/http instead
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                        BrowserJsonp,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        JSONPBackend,
                    ],
                },] },
    ];
    /** @nocollapse */
    JsonpModule.ctorParameters = function () { return []; };
    return JsonpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated use \@angular/common/http instead
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('5.2.11');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/angular-in-memory-web-api/backend.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_util_isPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_status_codes__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-status-codes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__delay_response__ = __webpack_require__("./node_modules/angular-in-memory-web-api/delay-response.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interfaces__ = __webpack_require__("./node_modules/angular-in-memory-web-api/interfaces.js");










/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 */
var BackendService = (function () {
    function BackendService(inMemDbService, config) {
        if (config === void 0) { config = {}; }
        this.inMemDbService = inMemDbService;
        this.config = new __WEBPACK_IMPORTED_MODULE_9__interfaces__["a" /* InMemoryBackendConfig */]();
        this.requestInfoUtils = this.getRequestInfoUtils();
        var loc = this.getLocation('/');
        this.config.host = loc.host; // default to app web server host
        this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')
        Object.assign(this.config, config);
    }
    Object.defineProperty(BackendService.prototype, "dbReady", {
        ////  protected /////
        get: function () {
            if (!this.dbReadySubject) {
                // first time the service is called.
                this.dbReadySubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
                this.resetDb();
            }
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_first__["a" /* first */].call(this.dbReadySubject.asObservable(), function (r) { return r; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Process Request and return an Observable of Http Response object
     * in the manner of a RESTy web api.
     *
     * Expect URI pattern in the form :base/:collectionName/:id?
     * Examples:
     *   // for store with a 'customers' collection
     *   GET api/customers          // all customers
     *   GET api/customers/42       // the character with id=42
     *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
     *   GET api/customers.json/42  // ignores the ".json"
     *
     * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
     * Examples:
     *     POST commands/resetDb,
     *     GET/POST commands/config - get or (re)set the config
     *
     *   HTTP overrides:
     *     If the injected inMemDbService defines an HTTP method (lowercase)
     *     The request is forwarded to that method as in
     *     `inMemDbService.get(requestInfo)`
     *     which must return either an Observable of the response type
     *     for this http library or null|undefined (which means "keep processing").
     */
    BackendService.prototype.handleRequest = function (req) {
        var _this = this;
        //  handle the request when there is an in-memory database
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__["a" /* concatMap */].call(this.dbReady, function () { return _this.handleRequest_(req); });
    };
    BackendService.prototype.handleRequest_ = function (req) {
        var _this = this;
        var url = req.urlWithParams ? req.urlWithParams : req.url;
        // Try override parser
        // If no override parser or it returns nothing, use default parser
        var parser = this.bind('parseRequestUrl');
        var parsed = (parser && parser(url, this.requestInfoUtils)) ||
            this.parseRequestUrl(url);
        var collectionName = parsed.collectionName;
        var collection = this.db[collectionName];
        var reqInfo = {
            req: req,
            apiBase: parsed.apiBase,
            collection: collection,
            collectionName: collectionName,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            id: this.parseId(collection, collectionName, parsed.id),
            method: this.getRequestMethod(req),
            query: parsed.query,
            resourceUrl: parsed.resourceUrl,
            url: url,
            utils: this.requestInfoUtils
        };
        var resOptions;
        if (/commands\/?$/i.test(reqInfo.apiBase)) {
            return this.commands(reqInfo);
        }
        var methodInterceptor = this.bind(reqInfo.method);
        if (methodInterceptor) {
            // InMemoryDbService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else InMemoryDbService chose not to intercept; continue processing.
            var interceptorResponse = methodInterceptor(reqInfo);
            if (interceptorResponse) {
                return interceptorResponse;
            }
            ;
        }
        if (this.db[collectionName]) {
            // request is for a known collection of the InMemoryDbService
            return this.createResponse$(function () { return _this.collectionHandler(reqInfo); });
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(req);
        }
        // 404 - can't handle this request
        resOptions = this.createErrorResponseOptions(url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$(function () { return resOptions; });
    };
    /**
     * Add configured delay to response observable unless delay === 0
     */
    BackendService.prototype.addDelay = function (response) {
        var d = this.config.delay;
        return d === 0 ? response : Object(__WEBPACK_IMPORTED_MODULE_8__delay_response__["a" /* delayResponse */])(response, d || 500);
    };
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    BackendService.prototype.applyQuery = function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        var conditions = [];
        var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
        query.forEach(function (value, name) {
            value.forEach(function (v) { return conditions.push({ name: name, rx: new RegExp(decodeURI(v), caseSensitive) }); });
        });
        var len = conditions.length;
        if (!len) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter(function (row) {
            var ok = true;
            var i = len;
            while (ok && i) {
                i -= 1;
                var cond = conditions[i];
                ok = cond.rx.test(row[cond.name]);
            }
            return ok;
        });
    };
    /**
     * Get a method from the `InMemoryDbService` (if it exists), bound to that service
     */
    BackendService.prototype.bind = function (methodName) {
        var fn = this.inMemDbService[methodName];
        return fn ? fn.bind(this.inMemDbService) : undefined;
    };
    BackendService.prototype.bodify = function (data) {
        return this.config.dataEncapsulation ? { data: data } : data;
    };
    BackendService.prototype.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    BackendService.prototype.collectionHandler = function (reqInfo) {
        // const req = reqInfo.req;
        var resOptions;
        switch (reqInfo.method) {
            case 'get':
                resOptions = this.get(reqInfo);
                break;
            case 'post':
                resOptions = this.post(reqInfo);
                break;
            case 'put':
                resOptions = this.put(reqInfo);
                break;
            case 'delete':
                resOptions = this.delete(reqInfo);
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].METHOD_NOT_ALLOWED, 'Method not allowed');
                break;
        }
        // If `inMemDbService.responseInterceptor` exists, let it morph the response options
        var interceptor = this.bind('responseInterceptor');
        return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
    };
    /**
     * Commands reconfigure the in-memory web api service or extract information from it.
     * Commands ignore the latency delay and respond ASAP.
     *
     * When the last segment of the `apiBase` path is "commands",
     * the `collectionName` is the command.
     *
     * Example URLs:
     *   commands/resetdb (POST) // Reset the "database" to its original state
     *   commands/config (GET)   // Return this service's config object
     *   commands/config (POST)  // Update the config (e.g. the delay)
     *
     * Usage:
     *   http.post('commands/resetdb', undefined);
     *   http.get('commands/config');
     *   http.post('commands/config', '{"delay":1000}');
     */
    BackendService.prototype.commands = function (reqInfo) {
        var _this = this;
        var command = reqInfo.collectionName.toLowerCase();
        var method = reqInfo.method;
        var resOptions = {
            url: reqInfo.url
        };
        switch (command) {
            case 'resetdb':
                resOptions.status = __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NO_CONTENT;
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_concatMap__["a" /* concatMap */].call(this.resetDb(reqInfo), function () { return _this.createResponse$(function () { return resOptions; }, false /* no latency delay */); });
            case 'config':
                if (method === 'get') {
                    resOptions.status = __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].OK;
                    resOptions.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    var body = this.getJsonBody(reqInfo.req);
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    resOptions.status = __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NO_CONTENT;
                }
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }
        return this.createResponse$(function () { return resOptions; }, false /* no latency delay */);
    };
    BackendService.prototype.createErrorResponseOptions = function (url, status, message) {
        return {
            body: { error: "" + message },
            url: url,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            status: status
        };
    };
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    BackendService.prototype.createResponse$ = function (resOptionsFactory, withDelay) {
        if (withDelay === void 0) { withDelay = true; }
        var resOptions$ = this.createResponseOptions$(resOptionsFactory);
        var resp$ = this.createResponse$fromResponseOptions$(resOptions$);
        return withDelay ? this.addDelay(resp$) : resp$;
    };
    /**
     * Create a cold Observable of ResponseOptions.
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     */
    BackendService.prototype.createResponseOptions$ = function (resOptionsFactory) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */](function (responseObserver) {
            var resOptions;
            try {
                resOptions = resOptionsFactory();
            }
            catch (error) {
                var err = error.message || error;
                resOptions = _this.createErrorResponseOptions('', __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].INTERNAL_SERVER_ERROR, "" + err);
            }
            var status = resOptions.status;
            try {
                resOptions.statusText = Object(__WEBPACK_IMPORTED_MODULE_7__http_status_codes__["c" /* getStatusText */])(status);
            }
            catch (e) { }
            if (Object(__WEBPACK_IMPORTED_MODULE_7__http_status_codes__["d" /* isSuccess */])(status)) {
                responseObserver.next(resOptions);
                responseObserver.complete();
            }
            else {
                responseObserver.error(resOptions);
            }
            return function () { }; // unsubscribe function
        });
    };
    BackendService.prototype.delete = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, url = _a.url;
        // tslint:disable-next-line:triple-equals
        if (id == undefined) {
            return this.createErrorResponseOptions(url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }
        var exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NO_CONTENT : __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NOT_FOUND
        };
    };
    /**
     * Find first instance of item in collection by `item.id`
     * @param collection
     * @param id
     */
    BackendService.prototype.findById = function (collection, id) {
        return collection.find(function (item) { return item.id === id; });
    };
    /**
     * Generate the next available id for item in this collection
     * Use method from `inMemDbService` if it exists and returns a value,
     * else delegates to `genIdDefault`.
     * @param collection - collection of items with `id` key property
     */
    BackendService.prototype.genId = function (collection, collectionName) {
        var genId = this.bind('genId');
        if (genId) {
            var id = genId(collection, collectionName);
            // tslint:disable-next-line:triple-equals
            if (id != undefined) {
                return id;
            }
        }
        return this.genIdDefault(collection, collectionName);
    };
    /**
     * Default generator of the next available id for item in this collection
     * This default implementation works only for numeric ids.
     * @param collection - collection of items with `id` key property
     * @param collectionName - name of the collection
     */
    BackendService.prototype.genIdDefault = function (collection, collectionName) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            throw new Error("Collection '" + collectionName + "' id type is non-numeric or unknown. Can only generate numeric ids.");
        }
        var maxId = 0;
        collection.reduce(function (prev, item) {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, undefined);
        return maxId + 1;
    };
    BackendService.prototype.get = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, query = _a.query, url = _a.url;
        var data = collection;
        // tslint:disable-next-line:triple-equals
        if (id != undefined && id !== '') {
            data = this.findById(collection, id);
        }
        else if (query) {
            data = this.applyQuery(collection, query);
        }
        if (!data) {
            return this.createErrorResponseOptions(url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
        }
        return {
            body: this.bodify(this.clone(data)),
            headers: headers,
            status: __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].OK
        };
    };
    /**
     * Get location info from a url, even on server where `document` is not defined
     */
    BackendService.prototype.getLocation = function (url) {
        if (!url.startsWith('http')) {
            // get the document iff running in browser
            var doc = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
            url = url.startsWith('/') ? base + url : base + '/' + url;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_9__interfaces__["d" /* parseUri */])(url);
    };
    ;
    /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     */
    BackendService.prototype.getPassThruBackend = function () {
        return this.passThruBackend ?
            this.passThruBackend :
            this.passThruBackend = this.createPassThruBackend();
    };
    /**
     * Get utility methods from this service instance.
     * Useful within an HTTP method override
     */
    BackendService.prototype.getRequestInfoUtils = function () {
        var _this = this;
        return {
            createResponse$: this.createResponse$.bind(this),
            findById: this.findById.bind(this),
            isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
            getConfig: function () { return _this.config; },
            getDb: function () { return _this.db; },
            getJsonBody: this.getJsonBody.bind(this),
            getLocation: this.getLocation.bind(this),
            getPassThruBackend: this.getPassThruBackend.bind(this),
            parseRequestUrl: this.parseRequestUrl.bind(this),
        };
    };
    BackendService.prototype.indexOf = function (collection, id) {
        return collection.findIndex(function (item) { return item.id === id; });
    };
    /** Parse the id as a number. Return original value if not a number. */
    BackendService.prototype.parseId = function (collection, collectionName, id) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            // Can't confirm that `id` is a numeric type; don't parse as a number
            // or else `'42'` -> `42` and _get by id_ fails.
            return id;
        }
        var idNum = parseFloat(id);
        return isNaN(idNum) ? id : idNum;
    };
    /**
     * return true if can determine that the collection's `item.id` is a number
     * This implementation can't tell if the collection is empty so it assumes NO
     * */
    BackendService.prototype.isCollectionIdNumeric = function (collection, collectionName) {
        // collectionName not used now but override might maintain collection type information
        // so that it could know the type of the `id` even when the collection is empty.
        return !!(collection && collection[0]) && typeof collection[0].id === 'number';
    };
    /**
     * Parses the request URL into a `ParsedRequestUrl` object.
     * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
     *
     * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
     *   When apiBase=undefined and url='http://localhost/api/collection/42'
     *     {base: 'api/', collectionName: 'collection', id: '42', ...}
     *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
     *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
     *   When apiBase='/' and url='http://localhost/collection'
     *     {base: '/', collectionName: 'collection', id: undefined, ...}
     *
     * The actual api base segment values are ignored. Only the number of segments matters.
     * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
     *
     * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
     */
    BackendService.prototype.parseRequestUrl = function (url) {
        try {
            var loc = this.getLocation(url);
            var drop = this.config.rootPath.length;
            var urlRoot = '';
            if (loc.host !== this.config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = loc.protocol + '//' + loc.host + '/';
            }
            var path = loc.path.substring(drop);
            var pathSegments = path.split('/');
            var segmentIx = 0;
            // apiBase: the front part of the path devoted to getting to the api route
            // Assumes first path segment if no config.apiBase
            // else ignores as many path segments as are in config.apiBase
            // Does NOT care what the api base chars actually are.
            var apiBase = void 0;
            // tslint:disable-next-line:triple-equals
            if (this.config.apiBase == undefined) {
                apiBase = pathSegments[segmentIx++];
            }
            else {
                apiBase = Object(__WEBPACK_IMPORTED_MODULE_9__interfaces__["e" /* removeTrailingSlash */])(this.config.apiBase.trim());
                if (apiBase) {
                    segmentIx = apiBase.split('/').length;
                }
                else {
                    segmentIx = 0; // no api base at all; unwise but allowed.
                }
            }
            apiBase += '/';
            var collectionName = pathSegments[segmentIx++];
            // ignore anything after a '.' (e.g.,the "json" in "customers.json")
            collectionName = collectionName && collectionName.split('.')[0];
            var id = pathSegments[segmentIx++];
            var query = this.createQueryMap(loc.query);
            var resourceUrl = urlRoot + apiBase + collectionName + '/';
            return { apiBase: apiBase, collectionName: collectionName, id: id, query: query, resourceUrl: resourceUrl };
        }
        catch (err) {
            var msg = "unable to parse url '" + url + "'; original error: " + err.message;
            throw new Error(msg);
        }
    };
    // Create entity
    // Can update an existing entity too if post409 is false.
    BackendService.prototype.post = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, req = _a.req, resourceUrl = _a.resourceUrl, url = _a.url;
        var item = this.clone(this.getJsonBody(req));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (err) {
                var emsg = err.message || '';
                if (/id type is non-numeric/.test(emsg)) {
                    return this.createErrorResponseOptions(url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].UNPROCESSABLE_ENTRY, emsg);
                }
                else {
                    console.error(err);
                    return this.createErrorResponseOptions(url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].BAD_REQUEST, "Request id does not match item.id");
        }
        else {
            id = item.id;
        }
        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);
        if (existingIx === -1) {
            collection.push(item);
            headers.set('Location', resourceUrl + '/' + id);
            return { headers: headers, body: body, status: __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].CREATED };
        }
        else if (this.config.post409) {
            return this.createErrorResponseOptions(url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
        }
        else {
            collection[existingIx] = item;
            return this.config.post204 ?
                { headers: headers, status: __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NO_CONTENT } :
                { headers: headers, body: body, status: __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].OK }; // successful; return entity
        }
    };
    // Update existing entity
    // Can create an entity too if put404 is false.
    BackendService.prototype.put = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, req = _a.req, url = _a.url;
        var item = this.clone(this.getJsonBody(req));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponseOptions(url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NOT_FOUND, "Missing '" + collectionName + "' id");
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
        }
        else {
            id = item.id;
        }
        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);
        if (existingIx > -1) {
            collection[existingIx] = item;
            return this.config.put204 ?
                { headers: headers, status: __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NO_CONTENT } :
                { headers: headers, body: body, status: __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].OK }; // successful; return entity
        }
        else if (this.config.put404) {
            // item to update not found; use POST to create new item for this id.
            return this.createErrorResponseOptions(url, __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers: headers, body: body, status: __WEBPACK_IMPORTED_MODULE_7__http_status_codes__["a" /* STATUS */].CREATED };
        }
    };
    BackendService.prototype.removeById = function (collection, id) {
        var ix = this.indexOf(collection, id);
        if (ix > -1) {
            collection.splice(ix, 1);
            return true;
        }
        return false;
    };
    /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     */
    BackendService.prototype.resetDb = function (reqInfo) {
        var _this = this;
        this.dbReadySubject.next(false);
        var db = this.inMemDbService.createDb(reqInfo);
        var db$ = db instanceof __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */] ? db :
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_util_isPromise__["a" /* isPromise */])(db) ? Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__["a" /* fromPromise */])(db) :
                Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(db);
        __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_first__["a" /* first */].call(db$).subscribe(function (d) {
            _this.db = d;
            _this.dbReadySubject.next(true);
        });
        return this.dbReady;
    };
    return BackendService;
}());

//# sourceMappingURL=backend.service.js.map

/***/ }),

/***/ "./node_modules/angular-in-memory-web-api/delay-response.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delayResponse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");

// Replaces use of RxJS delay. See v0.5.4.
/** adds specified delay (in ms) to both next and error channels of the response observable */
function delayResponse(response$, delayMs) {
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */](function (observer) {
        var completePending = false;
        var nextPending = false;
        var subscription = response$.subscribe(function (value) {
            nextPending = true;
            setTimeout(function () {
                observer.next(value);
                if (completePending) {
                    observer.complete();
                }
            }, delayMs);
        }, function (error) { return setTimeout(function () { return observer.error(error); }, delayMs); }, function () {
            completePending = true;
            if (!nextPending) {
                observer.complete();
            }
        });
        return function () {
            return subscription.unsubscribe();
        };
    });
}
//# sourceMappingURL=delay-response.js.map

/***/ }),

/***/ "./node_modules/angular-in-memory-web-api/http-backend.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpBackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_status_codes__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-status-codes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces__ = __webpack_require__("./node_modules/angular-in-memory-web-api/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__backend_service__ = __webpack_require__("./node_modules/angular-in-memory-web-api/backend.service.js");
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






/**
 * For Angular `Http` simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create an in-memory data store class that implements `InMemoryDbService`.
 * Call `forRoot` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpModule } from '@angular/http';
 * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */
var HttpBackendService = (function (_super) {
    __extends(HttpBackendService, _super);
    function HttpBackendService(injector, inMemDbService, config) {
        var _this = _super.call(this, inMemDbService, config) || this;
        _this.injector = injector;
        return _this;
    }
    HttpBackendService.prototype.createConnection = function (req) {
        var response;
        try {
            response = this.handleRequest(req);
        }
        catch (error) {
            var err = error.message || error;
            var resOptions_1 = this.createErrorResponseOptions(req.url, __WEBPACK_IMPORTED_MODULE_3__http_status_codes__["a" /* STATUS */].INTERNAL_SERVER_ERROR, "" + err);
            response = this.createResponse$(function () { return resOptions_1; });
        }
        return {
            readyState: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ReadyState */].Done,
            request: req,
            response: response
        };
    };
    ////  protected overrides /////
    HttpBackendService.prototype.getJsonBody = function (req) {
        try {
            return req.json();
        }
        catch (e) {
            var msg = "'" + req.url + "' request body-to-json error\n" + JSON.stringify(e);
            throw new Error(msg);
        }
    };
    HttpBackendService.prototype.getRequestMethod = function (req) {
        return __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */][req.method || 0].toLowerCase();
    };
    HttpBackendService.prototype.createHeaders = function (headers) {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](headers);
    };
    HttpBackendService.prototype.createQueryMap = function (search) {
        return search ? new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */](search).paramsMap : new Map();
    };
    HttpBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__["a" /* map */].call(resOptions$, function (opts) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseOptions */](opts));
        });
    };
    HttpBackendService.prototype.createPassThruBackend = function () {
        try {
            // copied from @angular/http/backends/xhr_backend
            var browserXhr = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BrowserXhr */]);
            var baseResponseOptions = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseOptions */]);
            var xsrfStrategy = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_http__["i" /* XSRFStrategy */]);
            var xhrBackend_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* XHRBackend */](browserXhr, baseResponseOptions, xsrfStrategy);
            return {
                handle: function (req) { return xhrBackend_1.createConnection(req).response; }
            };
        }
        catch (e) {
            e.message = 'Cannot create passThru404 backend; ' + (e.message || '');
            throw e;
        }
    };
    return HttpBackendService;
}(__WEBPACK_IMPORTED_MODULE_5__backend_service__["a" /* BackendService */]));

HttpBackendService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
HttpBackendService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__interfaces__["c" /* InMemoryDbService */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__interfaces__["b" /* InMemoryBackendConfigArgs */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_4__interfaces__["a" /* InMemoryBackendConfig */],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
//# sourceMappingURL=http-backend.service.js.map

/***/ }),

/***/ "./node_modules/angular-in-memory-web-api/http-client-backend.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientBackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_status_codes__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-status-codes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces__ = __webpack_require__("./node_modules/angular-in-memory-web-api/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__backend_service__ = __webpack_require__("./node_modules/angular-in-memory-web-api/backend.service.js");
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






/**
 * For Angular `HttpClient` simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create an in-memory data store class that implements `InMemoryDbService`.
 * Call `config` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpClientModule } from '@angular/common/http';
 * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */
var HttpClientBackendService = (function (_super) {
    __extends(HttpClientBackendService, _super);
    function HttpClientBackendService(inMemDbService, config, xhrFactory) {
        var _this = _super.call(this, inMemDbService, config) || this;
        _this.xhrFactory = xhrFactory;
        return _this;
    }
    HttpClientBackendService.prototype.handle = function (req) {
        try {
            return this.handleRequest(req);
        }
        catch (error) {
            var err = error.message || error;
            var resOptions_1 = this.createErrorResponseOptions(req.url, __WEBPACK_IMPORTED_MODULE_3__http_status_codes__["a" /* STATUS */].INTERNAL_SERVER_ERROR, "" + err);
            return this.createResponse$(function () { return resOptions_1; });
        }
    };
    ////  protected overrides /////
    HttpClientBackendService.prototype.getJsonBody = function (req) {
        return req.body;
    };
    HttpClientBackendService.prototype.getRequestMethod = function (req) {
        return (req.method || 'get').toLowerCase();
    };
    HttpClientBackendService.prototype.createHeaders = function (headers) {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"](headers);
    };
    HttpClientBackendService.prototype.createQueryMap = function (search) {
        var map = new Map();
        if (search) {
            var params_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpParams"]({ fromString: search });
            params_1.keys().forEach(function (p) { return map.set(p, params_1.getAll(p)); });
        }
        return map;
    };
    HttpClientBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__["a" /* map */].call(resOptions$, function (opts) { return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpResponse"](opts); });
    };
    HttpClientBackendService.prototype.createPassThruBackend = function () {
        try {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpXhrBackend"](this.xhrFactory);
        }
        catch (ex) {
            ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
            throw ex;
        }
    };
    return HttpClientBackendService;
}(__WEBPACK_IMPORTED_MODULE_5__backend_service__["a" /* BackendService */]));

HttpClientBackendService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
HttpClientBackendService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__interfaces__["c" /* InMemoryDbService */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__interfaces__["b" /* InMemoryBackendConfigArgs */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_4__interfaces__["a" /* InMemoryBackendConfig */],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["XhrFactory"], },
]; };
//# sourceMappingURL=http-client-backend.service.js.map

/***/ }),

/***/ "./node_modules/angular-in-memory-web-api/http-client-in-memory-web-api.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = httpClientInMemBackendServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientInMemoryWebApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces__ = __webpack_require__("./node_modules/angular-in-memory-web-api/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_client_backend_service__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-client-backend.service.js");
////// HttpClient-Only version ////




// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
    var backend = new __WEBPACK_IMPORTED_MODULE_3__http_client_backend_service__["a" /* HttpClientBackendService */](dbService, options, xhrFactory);
    return backend;
}
var HttpClientInMemoryWebApiModule = (function () {
    function HttpClientInMemoryWebApiModule() {
    }
    /**
    *  Redirect the Angular `HttpClient` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * HttpInMemoryWebApiModule.forRoot(dbCreator);
    * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    HttpClientInMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: HttpClientInMemoryWebApiModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__interfaces__["c" /* InMemoryDbService */], useClass: dbCreator },
                { provide: __WEBPACK_IMPORTED_MODULE_2__interfaces__["a" /* InMemoryBackendConfig */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpBackend"],
                    useFactory: httpClientInMemBackendServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__interfaces__["c" /* InMemoryDbService */], __WEBPACK_IMPORTED_MODULE_2__interfaces__["a" /* InMemoryBackendConfig */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["XhrFactory"]] }
            ]
        };
    };
    /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
    HttpClientInMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return HttpClientInMemoryWebApiModule.forRoot(dbCreator, options);
    };
    return HttpClientInMemoryWebApiModule;
}());

HttpClientInMemoryWebApiModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{},] },
];
/** @nocollapse */
HttpClientInMemoryWebApiModule.ctorParameters = function () { return []; };
//# sourceMappingURL=http-client-in-memory-web-api.module.js.map

/***/ }),

/***/ "./node_modules/angular-in-memory-web-api/http-in-memory-web-api.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = httpInMemBackendServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInMemoryWebApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces__ = __webpack_require__("./node_modules/angular-in-memory-web-api/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_backend_service__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-backend.service.js");
////// Http-Only version ////




// Internal - Creates the in-mem backend for the Http module
// AoT requires factory to be exported
function httpInMemBackendServiceFactory(injector, dbService, options) {
    var backend = new __WEBPACK_IMPORTED_MODULE_3__http_backend_service__["a" /* HttpBackendService */](injector, dbService, options);
    return backend;
}
var HttpInMemoryWebApiModule = (function () {
    function HttpInMemoryWebApiModule() {
    }
    /**
    *  Redirect the Angular `Http` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * HttpInMemoryWebApiModule.forRoot(dbCreator);
    * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    HttpInMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: HttpInMemoryWebApiModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__interfaces__["c" /* InMemoryDbService */], useClass: dbCreator },
                { provide: __WEBPACK_IMPORTED_MODULE_2__interfaces__["a" /* InMemoryBackendConfig */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* XHRBackend */],
                    useFactory: httpInMemBackendServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__interfaces__["c" /* InMemoryDbService */], __WEBPACK_IMPORTED_MODULE_2__interfaces__["a" /* InMemoryBackendConfig */]] }
            ]
        };
    };
    /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
    HttpInMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return HttpInMemoryWebApiModule.forRoot(dbCreator, options);
    };
    return HttpInMemoryWebApiModule;
}());

HttpInMemoryWebApiModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{},] },
];
/** @nocollapse */
HttpInMemoryWebApiModule.ctorParameters = function () { return []; };
//# sourceMappingURL=http-in-memory-web-api.module.js.map

/***/ }),

/***/ "./node_modules/angular-in-memory-web-api/http-status-codes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STATUS_CODE_INFO; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getStatusText;
/* harmony export (immutable) */ __webpack_exports__["d"] = isSuccess;
var STATUS = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANTENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    UPGRADE_REQUIRED: 426,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    PROCESSING: 102,
    MULTI_STATUS: 207,
    IM_USED: 226,
    PERMANENT_REDIRECT: 308,
    UNPROCESSABLE_ENTRY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
/*tslint:disable:quotemark max-line-length one-line */
var STATUS_CODE_INFO = {
    '100': {
        'code': 100,
        'text': 'Continue',
        'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
        'spec_title': 'RFC7231#6.2.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.1'
    },
    '101': {
        'code': 101,
        'text': 'Switching Protocols',
        'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
        'spec_title': 'RFC7231#6.2.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.2'
    },
    '200': {
        'code': 200,
        'text': 'OK',
        'description': '\"The request has succeeded.\"',
        'spec_title': 'RFC7231#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
    },
    '201': {
        'code': 201,
        'text': 'Created',
        'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '202': {
        'code': 202,
        'text': 'Accepted',
        'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
        'spec_title': 'RFC7231#6.3.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
    },
    '203': {
        'code': 203,
        'text': 'Non-Authoritative Information',
        'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
        'spec_title': 'RFC7231#6.3.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
    },
    '204': {
        'code': 204,
        'text': 'No Content',
        'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
        'spec_title': 'RFC7231#6.3.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
    },
    '205': {
        'code': 205,
        'text': 'Reset Content',
        'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
        'spec_title': 'RFC7231#6.3.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
    },
    '206': {
        'code': 206,
        'text': 'Partial Content',
        'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
        'spec_title': 'RFC7233#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.1'
    },
    '300': {
        'code': 300,
        'text': 'Multiple Choices',
        'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
        'spec_title': 'RFC7231#6.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
    },
    '301': {
        'code': 301,
        'text': 'Moved Permanently',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
        'spec_title': 'RFC7231#6.4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
    },
    '302': {
        'code': 302,
        'text': 'Found',
        'description': '\"The target resource resides temporarily under a different URI.\"',
        'spec_title': 'RFC7231#6.4.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
    },
    '303': {
        'code': 303,
        'text': 'See Other',
        'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
        'spec_title': 'RFC7231#6.4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
    },
    '304': {
        'code': 304,
        'text': 'Not Modified',
        'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
        'spec_title': 'RFC7232#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.1'
    },
    '305': {
        'code': 305,
        'text': 'Use Proxy',
        'description': '*deprecated*',
        'spec_title': 'RFC7231#6.4.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
    },
    '307': {
        'code': 307,
        'text': 'Temporary Redirect',
        'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
        'spec_title': 'RFC7231#6.4.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
    },
    '400': {
        'code': 400,
        'text': 'Bad Request',
        'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
        'spec_title': 'RFC7231#6.5.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
    },
    '401': {
        'code': 401,
        'text': 'Unauthorized',
        'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
        'spec_title': 'RFC7235#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7235#section-3.1'
    },
    '402': {
        'code': 402,
        'text': 'Payment Required',
        'description': '*reserved*',
        'spec_title': 'RFC7231#6.5.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
    },
    '403': {
        'code': 403,
        'text': 'Forbidden',
        'description': '\"The server understood the request but refuses to authorize it.\"',
        'spec_title': 'RFC7231#6.5.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
    },
    '404': {
        'code': 404,
        'text': 'Not Found',
        'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
        'spec_title': 'RFC7231#6.5.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
    },
    '405': {
        'code': 405,
        'text': 'Method Not Allowed',
        'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
        'spec_title': 'RFC7231#6.5.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
    },
    '406': {
        'code': 406,
        'text': 'Not Acceptable',
        'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
        'spec_title': 'RFC7231#6.5.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
    },
    '407': {
        'code': 407,
        'text': 'Proxy Authentication Required',
        'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '408': {
        'code': 408,
        'text': 'Request Timeout',
        'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
        'spec_title': 'RFC7231#6.5.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
    },
    '409': {
        'code': 409,
        'text': 'Conflict',
        'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
        'spec_title': 'RFC7231#6.5.8',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
    },
    '410': {
        'code': 410,
        'text': 'Gone',
        'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
        'spec_title': 'RFC7231#6.5.9',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
    },
    '411': {
        'code': 411,
        'text': 'Length Required',
        'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
        'spec_title': 'RFC7231#6.5.10',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
    },
    '412': {
        'code': 412,
        'text': 'Precondition Failed',
        'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
        'spec_title': 'RFC7232#4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.2'
    },
    '413': {
        'code': 413,
        'text': 'Payload Too Large',
        'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
        'spec_title': 'RFC7231#6.5.11',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
    },
    '414': {
        'code': 414,
        'text': 'URI Too Long',
        'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
        'spec_title': 'RFC7231#6.5.12',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
    },
    '415': {
        'code': 415,
        'text': 'Unsupported Media Type',
        'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
        'spec_title': 'RFC7231#6.5.13',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
    },
    '416': {
        'code': 416,
        'text': 'Range Not Satisfiable',
        'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
        'spec_title': 'RFC7233#4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.4'
    },
    '417': {
        'code': 417,
        'text': 'Expectation Failed',
        'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
        'spec_title': 'RFC7231#6.5.14',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
    },
    '418': {
        'code': 418,
        'text': 'I\'m a teapot',
        'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
        'spec_title': 'RFC 2324',
        'spec_href': 'https://tools.ietf.org/html/rfc2324'
    },
    '426': {
        'code': 426,
        'text': 'Upgrade Required',
        'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
        'spec_title': 'RFC7231#6.5.15',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
    },
    '500': {
        'code': 500,
        'text': 'Internal Server Error',
        'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
        'spec_title': 'RFC7231#6.6.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
    },
    '501': {
        'code': 501,
        'text': 'Not Implemented',
        'description': '\"The server does not support the functionality required to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
    },
    '502': {
        'code': 502,
        'text': 'Bad Gateway',
        'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
    },
    '503': {
        'code': 503,
        'text': 'Service Unavailable',
        'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
        'spec_title': 'RFC7231#6.6.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
    },
    '504': {
        'code': 504,
        'text': 'Gateway Time-out',
        'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
        'spec_title': 'RFC7231#6.6.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
    },
    '505': {
        'code': 505,
        'text': 'HTTP Version Not Supported',
        'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
        'spec_title': 'RFC7231#6.6.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
    },
    '102': {
        'code': 102,
        'text': 'Processing',
        'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
        'spec_title': 'RFC5218#10.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.1'
    },
    '207': {
        'code': 207,
        'text': 'Multi-Status',
        'description': '\"Status for multiple independent operations.\"',
        'spec_title': 'RFC5218#10.2',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.2'
    },
    '226': {
        'code': 226,
        'text': 'IM Used',
        'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
        'spec_title': 'RFC3229#10.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
    },
    '308': {
        'code': 308,
        'text': 'Permanent Redirect',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
        'spec_title': 'RFC7238',
        'spec_href': 'http://tools.ietf.org/html/rfc7238'
    },
    '422': {
        'code': 422,
        'text': 'Unprocessable Entity',
        'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
        'spec_title': 'RFC5218#10.3',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.3'
    },
    '423': {
        'code': 423,
        'text': 'Locked',
        'description': '\"The source or destination resource of a method is locked.\"',
        'spec_title': 'RFC5218#10.4',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.4'
    },
    '424': {
        'code': 424,
        'text': 'Failed Dependency',
        'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
        'spec_title': 'RFC5218#10.5',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.5'
    },
    '428': {
        'code': 428,
        'text': 'Precondition Required',
        'description': '\"The origin server requires the request to be conditional.\"',
        'spec_title': 'RFC6585#3',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-3'
    },
    '429': {
        'code': 429,
        'text': 'Too Many Requests',
        'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
        'spec_title': 'RFC6585#4',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-4'
    },
    '431': {
        'code': 431,
        'text': 'Request Header Fields Too Large',
        'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
        'spec_title': 'RFC6585#5',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-5'
    },
    '451': {
        'code': 451,
        'text': 'Unavailable For Legal Reasons',
        'description': '\"The server is denying access to the resource in response to a legal demand.\"',
        'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
        'spec_href': 'http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
    },
    '506': {
        'code': 506,
        'text': 'Variant Also Negotiates',
        'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
        'spec_title': 'RFC2295#8.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2295#section-8.1'
    },
    '507': {
        'code': 507,
        'text': 'Insufficient Storage',
        'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
        'spec_title': 'RFC5218#10.6',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.6'
    },
    '511': {
        'code': 511,
        'text': 'Network Authentication Required',
        'description': '\"The client needs to authenticate to gain network access.\"',
        'spec_title': 'RFC6585#6',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-6'
    }
};
/**
 * get the status text from StatusCode
 */
function getStatusText(status) {
    return STATUS_CODE_INFO[status].text || 'Unknown Status';
}
/**
 * Returns true if the the Http Status Code is 200-299 (success)
 */
function isSuccess(status) { return status >= 200 && status < 300; }
;
//# sourceMappingURL=http-status-codes.js.map

/***/ }),

/***/ "./node_modules/angular-in-memory-web-api/in-memory-web-api.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryWebApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces__ = __webpack_require__("./node_modules/angular-in-memory-web-api/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_in_memory_web_api_module__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-in-memory-web-api.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_client_in_memory_web_api_module__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-client-in-memory-web-api.module.js");
////// For apps with both Http and HttpClient ////






var InMemoryWebApiModule = (function () {
    function InMemoryWebApiModule() {
    }
    /**
    *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * InMemoryWebApiModule.forRoot(dbCreator);
    * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    InMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: InMemoryWebApiModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__interfaces__["c" /* InMemoryDbService */], useClass: dbCreator },
                { provide: __WEBPACK_IMPORTED_MODULE_3__interfaces__["a" /* InMemoryBackendConfig */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* XHRBackend */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_4__http_in_memory_web_api_module__["b" /* httpInMemBackendServiceFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_3__interfaces__["c" /* InMemoryDbService */], __WEBPACK_IMPORTED_MODULE_3__interfaces__["a" /* InMemoryBackendConfig */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpBackend"],
                    useFactory: __WEBPACK_IMPORTED_MODULE_5__http_client_in_memory_web_api_module__["b" /* httpClientInMemBackendServiceFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_3__interfaces__["c" /* InMemoryDbService */], __WEBPACK_IMPORTED_MODULE_3__interfaces__["a" /* InMemoryBackendConfig */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["XhrFactory"]] }
            ]
        };
    };
    /**
     *
     * Enable and configure the in-memory web api in a lazy-loaded feature module.
     * Same as `forRoot`.
     * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
     */
    InMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return InMemoryWebApiModule.forRoot(dbCreator, options);
    };
    return InMemoryWebApiModule;
}());

InMemoryWebApiModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{},] },
];
/** @nocollapse */
InMemoryWebApiModule.ctorParameters = function () { return []; };
//# sourceMappingURL=in-memory-web-api.module.js.map

/***/ }),

/***/ "./node_modules/angular-in-memory-web-api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__backend_service__ = __webpack_require__("./node_modules/angular-in-memory-web-api/backend.service.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return __WEBPACK_IMPORTED_MODULE_0__backend_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_status_codes__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-status-codes.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return __WEBPACK_IMPORTED_MODULE_1__http_status_codes__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "STATUS_CODE_INFO", function() { return __WEBPACK_IMPORTED_MODULE_1__http_status_codes__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getStatusText", function() { return __WEBPACK_IMPORTED_MODULE_1__http_status_codes__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isSuccess", function() { return __WEBPACK_IMPORTED_MODULE_1__http_status_codes__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_backend_service__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-backend.service.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HttpBackendService", function() { return __WEBPACK_IMPORTED_MODULE_2__http_backend_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_client_backend_service__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-client-backend.service.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HttpClientBackendService", function() { return __WEBPACK_IMPORTED_MODULE_3__http_client_backend_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__in_memory_web_api_module__ = __webpack_require__("./node_modules/angular-in-memory-web-api/in-memory-web-api.module.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "InMemoryWebApiModule", function() { return __WEBPACK_IMPORTED_MODULE_4__in_memory_web_api_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_in_memory_web_api_module__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-in-memory-web-api.module.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "httpInMemBackendServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_5__http_in_memory_web_api_module__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HttpInMemoryWebApiModule", function() { return __WEBPACK_IMPORTED_MODULE_5__http_in_memory_web_api_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_client_in_memory_web_api_module__ = __webpack_require__("./node_modules/angular-in-memory-web-api/http-client-in-memory-web-api.module.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "httpClientInMemBackendServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_6__http_client_in_memory_web_api_module__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HttpClientInMemoryWebApiModule", function() { return __WEBPACK_IMPORTED_MODULE_6__http_client_in_memory_web_api_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interfaces__ = __webpack_require__("./node_modules/angular-in-memory-web-api/interfaces.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "InMemoryDbService", function() { return __WEBPACK_IMPORTED_MODULE_7__interfaces__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfigArgs", function() { return __WEBPACK_IMPORTED_MODULE_7__interfaces__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfig", function() { return __WEBPACK_IMPORTED_MODULE_7__interfaces__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "parseUri", function() { return __WEBPACK_IMPORTED_MODULE_7__interfaces__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeTrailingSlash", function() { return __WEBPACK_IMPORTED_MODULE_7__interfaces__["e"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-in-memory-web-api/interfaces.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InMemoryDbService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InMemoryBackendConfigArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryBackendConfig; });
/* harmony export (immutable) */ __webpack_exports__["d"] = parseUri;
/* harmony export (immutable) */ __webpack_exports__["e"] = removeTrailingSlash;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/**
* Interface for a class that creates an in-memory database
*
* Its `createDb` method creates a hash of named collections that represents the database
*
* For maximum flexibility, the service may define HTTP method overrides.
* Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
* If a request has a matching method, it will be called as in
* `get(info: requestInfo, db: {})` where `db` is the database object described above.
*/
var InMemoryDbService = (function () {
    function InMemoryDbService() {
    }
    return InMemoryDbService;
}());

/**
* Interface for InMemoryBackend configuration options
*/
var InMemoryBackendConfigArgs = (function () {
    function InMemoryBackendConfigArgs() {
    }
    return InMemoryBackendConfigArgs;
}());

/////////////////////////////////
/**
*  InMemoryBackendService configuration options
*  Usage:
*    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
*
*  or if providing separately:
*    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
*/
var InMemoryBackendConfig = (function () {
    function InMemoryBackendConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, {
            // default config:
            caseSensitiveSearch: false,
            dataEncapsulation: false,
            delay: 500,
            delete404: false,
            passThruUnknownUrl: false,
            post204: true,
            post409: false,
            put204: true,
            put404: false,
            apiBase: undefined,
            host: undefined,
            rootPath: undefined // default value is actually set in InMemoryBackendService ctor
        }, config);
    }
    return InMemoryBackendConfig;
}());

InMemoryBackendConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
InMemoryBackendConfig.ctorParameters = function () { return [
    { type: InMemoryBackendConfigArgs, },
]; };
/** Return information (UriInfo) about a URI  */
function parseUri(str) {
    // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
    // tslint:disable-next-line:max-line-length
    var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var m = URL_REGEX.exec(str);
    var uri = {
        source: '',
        protocol: '',
        authority: '',
        userInfo: '',
        user: '',
        password: '',
        host: '',
        port: '',
        relative: '',
        path: '',
        directory: '',
        file: '',
        query: '',
        anchor: ''
    };
    var keys = Object.keys(uri);
    var i = keys.length;
    while (i--) {
        uri[keys[i]] = m[i] || '';
    }
    return uri;
}
function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map