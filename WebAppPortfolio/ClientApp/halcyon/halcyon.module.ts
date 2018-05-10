import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Halcyonbodycomponent = require("./halcyon-body/halcyon-body.component");
import HalcyonBodyComponent = Halcyonbodycomponent.HalcyonBodyComponent;
import { ContentComponent } from "./Content/content.component";
import Titlebarcomponent = require("./title-bar/title-bar.component");
import TitleBarComponent = Titlebarcomponent.TitleBarComponent;


@NgModule({
  imports: [
      CommonModule
      
    ],
    exports: [
        HalcyonBodyComponent
    ],
    declarations: [
        HalcyonBodyComponent,
        ContentComponent,
        TitleBarComponent
  ]
})
export class HalcyonModule { }
