import {
    Component, ElementRef, HostBinding, HostListener,
    Input, OnInit, Renderer,
    trigger, state, style, transition, animate
} from '@angular/core';
import { MenuItem, MenuService } from '../../services/menu.service';


@Component({
    selector: 'halcyon-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css'],
    animations: [
        trigger('visibilityChanged', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style({ opacity: 0 }),
                animate(250, style({ opacity: 1 }))
            ]),
            transition(':leave', [   // :leave is alias to '* => void'
                animate(100, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class MenuItemComponent implements OnInit {
    @Input()
    item = <MenuItem>null; // see angular-cli issue #2034

    ngOnInit(): void {
    }
}