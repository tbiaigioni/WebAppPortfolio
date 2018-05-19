import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalcyonBodyComponent } from "./halcyon-body/halcyon-body.component";
import { ContentComponent } from "./Content/content.component";
import { TitleBarComponent } from "./title-bar/title-bar.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { StatusBarComponent } from "./status-bar/status-bar.component";
import { HalcyonConfigService } from './Services/halcyon-config.service';
import { ScreenService } from './Services/screen.service';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { BrowserModule } from '@angular/platform-browser';
import { ResponsiveModule, IResponsiveConfig } from "ngx-responsive";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuService } from './Services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ParticlesModule } from 'angular-particle';
import { MatButtonModule } from '@angular/material';





const config: IResponsiveConfig = {
    breakPoints: {
        xs: { max: 600 },
        sm: { min: 601, max: 959 },
        md: { min: 960, max: 1279 },
        lg: { min: 1280, max: 1919 },
        xl: { min: 1920 }
    },
    debounceTime: 100
};


@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      ResponsiveModule.forRoot(config),
      AngularFontAwesomeModule,
      RouterModule,
      ParticlesModule
      
    ],

    declarations: [
        HalcyonBodyComponent,
        ContentComponent,
        TitleBarComponent,
        TopBarComponent,
        StatusBarComponent,
        MenuComponent,
        MenuItemComponent,
        ScreenLarge,
        ScreenBelowLarge,
        
    ],
    providers: [
        HalcyonConfigService,
        ScreenService,
        MenuService
  ],
  exports: [
      HalcyonBodyComponent
    ],

})
export class HalcyonModule { }
