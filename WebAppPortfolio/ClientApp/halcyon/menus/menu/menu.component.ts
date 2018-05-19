import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../Services/menu.service';



@Component({
  selector: 'halcyon-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
