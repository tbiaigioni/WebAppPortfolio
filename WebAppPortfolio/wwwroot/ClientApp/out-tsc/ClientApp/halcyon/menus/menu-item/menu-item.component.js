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
var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
        this.item = null; // see angular-cli issue #2034
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "item", void 0);
    MenuItemComponent = __decorate([
        core_1.Component({
            selector: 'halcyon-menu-item',
            templateUrl: './menu-item.component.html',
            styleUrls: ['./menu-item.component.css'],
            animations: [
                core_1.trigger('visibilityChanged', [
                    core_1.transition(':enter', [
                        core_1.style({ opacity: 0 }),
                        core_1.animate(250, core_1.style({ opacity: 1 }))
                    ]),
                    core_1.transition(':leave', [
                        core_1.animate(100, core_1.style({ opacity: 0 }))
                    ])
                ])
            ]
        })
    ], MenuItemComponent);
    return MenuItemComponent;
}());
exports.MenuItemComponent = MenuItemComponent;
//# sourceMappingURL=menu-item.component.js.map