"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var halcyon_body_component_1 = require("./halcyon-body/halcyon-body.component");
var content_component_1 = require("./Content/content.component");
var title_bar_component_1 = require("./title-bar/title-bar.component");
var top_bar_component_1 = require("./top-bar/top-bar.component");
var status_bar_component_1 = require("./status-bar/status-bar.component");
var halcyon_config_service_1 = require("./Services/halcyon-config.service");
var screen_service_1 = require("./Services/screen.service");
var screen_large_directive_1 = require("./directives/screen-large.directive");
var screen_below_large_directive_1 = require("./directives/screen-below-large.directive");
var platform_browser_1 = require("@angular/platform-browser");
var ngx_responsive_1 = require("ngx-responsive");
var angular_font_awesome_1 = require("angular-font-awesome");
var menu_service_1 = require("./Services/menu.service");
var menu_component_1 = require("./menus/menu/menu.component");
var menu_item_component_1 = require("./menus/menu-item/menu-item.component");
var router_1 = require("@angular/router");
var angular_particle_1 = require("angular-particle");
var config = {
    breakPoints: {
        xs: { max: 600 },
        sm: { min: 601, max: 959 },
        md: { min: 960, max: 1279 },
        lg: { min: 1280, max: 1919 },
        xl: { min: 1920 }
    },
    debounceTime: 100
};
var HalcyonModule = /** @class */ (function () {
    function HalcyonModule() {
    }
    HalcyonModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                ngx_responsive_1.ResponsiveModule.forRoot(config),
                angular_font_awesome_1.AngularFontAwesomeModule,
                router_1.RouterModule,
                angular_particle_1.ParticlesModule
            ],
            declarations: [
                halcyon_body_component_1.HalcyonBodyComponent,
                content_component_1.ContentComponent,
                title_bar_component_1.TitleBarComponent,
                top_bar_component_1.TopBarComponent,
                status_bar_component_1.StatusBarComponent,
                menu_component_1.MenuComponent,
                menu_item_component_1.MenuItemComponent,
                screen_large_directive_1.ScreenLarge,
                screen_below_large_directive_1.ScreenBelowLarge,
            ],
            providers: [
                halcyon_config_service_1.HalcyonConfigService,
                screen_service_1.ScreenService,
                menu_service_1.MenuService
            ],
            exports: [
                halcyon_body_component_1.HalcyonBodyComponent
            ],
        })
    ], HalcyonModule);
    return HalcyonModule;
}());
exports.HalcyonModule = HalcyonModule;
//# sourceMappingURL=halcyon.module.js.map