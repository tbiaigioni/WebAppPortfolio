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
var DashboardComponent = /** @class */ (function () {
    //myStyle: object = {};
    //myParams: object = {};
    //width: number = 800;
    //height: number = 800;
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //this.myStyle = {
        //    'position': 'fixed',
        //    'width': '100%',
        //    'height': '100%',
        //    'z-index': 1,
        //    'top': 0,
        //    'left': 0,
        //    'right': 0,
        //    'bottom': 0,
        //};
        //this.myParams = {
        //    particles: {
        //        number: {
        //            value: 6,
        //            density: {
        //                enable: true,
        //                value_area: 800
        //            }
        //        },
        //        color: {
        //            value: '#1b1e34'
        //        },
        //        shape: {
        //            type: 'circle',
        //            stroke: {
        //                width: 0,
        //                color: "#000"
        //            }
        //        },
        //        polygon: {
        //            nb_sides: 5
        //        },
        //        opacity: {
        //            value: 1,
        //            random: true,
        //            anim: {
        //                enable: true,
        //                speed: 1,
        //                opacity_min: 0,
        //                sync: false
        //            }
        //        },    size: {
        //            value: 3,
        //            random: false,
        //            anim: {
        //                enable: true,
        //                speed: 4,
        //                size_min: 0.3,
        //                sync: false
        //            }
        //        },
        //        line_linked: {
        //            enable: false,
        //            distance: 150,
        //            color: "#ffffff",
        //            opacity: 1,
        //            width: 1
        //        },
        //        move: {
        //            enable: true,
        //            speed: 1,
        //            direction: "none",
        //            random: true,
        //            straight: false,
        //            out_mode: "out",
        //            bounce: false,
        //            attract: {
        //                enable: false,
        //                rotateX: 600,
        //                rotateY: 600
        //            }
        //        },
        //        interactivity: {
        //            detect_on: "canvas",
        //            events: {
        //                onhover: {
        //                    enable: true,
        //                    mode: "bubble"
        //                },
        //                onclick: {
        //                    enable: true,
        //                    mode: "repulse"
        //                },
        //                resize: true
        //            },
        //            modes: {
        //                grab: {
        //                    distance: 400,
        //                    line_linked: {
        //                        opacity: 1
        //                    }
        //                },
        //                bubble: {
        //                    distance: 250,
        //                    size: 0,
        //                    duration: 2,
        //                    opacity: 0,
        //                    speed: 3
        //                },
        //                repulse: {
        //                    distance: 400,
        //                    duration: 0.4
        //                },
        //                push: {
        //                    particles_nb: 4
        //                },
        //                remove: {
        //                    particles_nb: 2
        //                }
        //            }
        //        },
        //        retina_detect: true
        //    }
        //};
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: "./dashboard.component.html",
            styleUrls: ["./dashboard.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map