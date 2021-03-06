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
var material_1 = require("@angular/material");
var app_settings_1 = require("../../../app.settings");
var tables_service_1 = require("../tables.service");
var FilteringComponent = /** @class */ (function () {
    function FilteringComponent(appSettings, tablesService) {
        this.appSettings = appSettings;
        this.tablesService = tablesService;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.settings = this.appSettings.settings;
        this.dataSource = new material_1.MatTableDataSource(this.tablesService.getData());
    }
    FilteringComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    FilteringComponent = __decorate([
        core_1.Component({
            selector: 'app-filtering',
            templateUrl: './filtering.component.html'
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, tables_service_1.TablesService])
    ], FilteringComponent);
    return FilteringComponent;
}());
exports.FilteringComponent = FilteringComponent;
//# sourceMappingURL=filtering.component.js.map