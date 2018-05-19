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
var CodecampsComponent = /** @class */ (function () {
    function CodecampsComponent() {
    }
    CodecampsComponent.prototype.ngOnInit = function () {
    };
    CodecampsComponent = __decorate([
        core_1.Component({
            selector: 'app-codecamps',
            templateUrl: "./codecamps.component.html",
            styleUrls: ["./codecamps.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], CodecampsComponent);
    return CodecampsComponent;
}());
exports.CodecampsComponent = CodecampsComponent;
//# sourceMappingURL=codecamps.component.js.map