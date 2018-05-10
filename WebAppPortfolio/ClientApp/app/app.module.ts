import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import {Login} from "./login/login.component";
import { DataService } from './shared/dataService';
import { HalcyonModule } from "../halcyon/halcyon.module";


let routes = [
    { path: "login", component: Login }
    ];


@NgModule({
    declarations: [
        AppComponent,
        Login
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HalcyonModule,
        FormsModule,
        RouterModule.forRoot(routes,
            {
                useHash: true,
                enableTracing: false
            })
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
