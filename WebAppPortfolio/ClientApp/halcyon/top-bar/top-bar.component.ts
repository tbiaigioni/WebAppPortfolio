import { Component, OnInit } from '@angular/core';
import * as Halcyonconfigservice from "../Services/halcyon-config.service";
import HalcyonConfigService = Halcyonconfigservice.HalcyonConfigService;

@Component({
    selector: 'halcyon-top-bar',
    templateUrl: "./top-bar.component.html",
    styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {

  constructor(private halcyonConfigService: HalcyonConfigService) { }

  ngOnInit() {
  }

}
