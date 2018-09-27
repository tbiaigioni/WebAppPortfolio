import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'HalcyonPattern',   //theme name
        true,       //loadingSpinner
        true,       //fixedHeader
        true,       //sidenavIsOpened
        true,       //sidenavIsPinned  
        false,       //sidenavUserBlock 
        'vertical', //horizontal , vertical
        'default',  //default, compact, mini
        'blue-dark',   //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
        false,       // true = rtl, false = ltr
        'img/white_logo_transparent_background_noShape_80px.png',  //logoText path
        'img/white_logo_transparent_background_noText_80px.png' //logoShape Path
    )
}