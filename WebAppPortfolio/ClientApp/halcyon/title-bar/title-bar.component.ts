import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../Services/screen.service';



@Component({
  selector: 'halcyon-title-bar',
  templateUrl: "./title-bar.component.html",
  styleUrls: ["./title-bar.component.css"]
})
export class TitleBarComponent implements OnInit {
    myStyle: object = {};
    myParams: object = {};
    width: number = 800;
    height: number = 80;


    constructor(private screenService: ScreenService) { }

    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': 0,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

        this.myParams = {
            particles: {
                number: {
                    value: 6,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#1b1e34'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: "#000"
                    }
                },
                polygon: {
                    nb_sides: 5
                },
                opacity: {
                    value: 1,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0,
                        sync: false
                    }
                }, size: {
                    value: 3,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 4,
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 250,
                            size: 0,
                            duration: 2,
                            opacity: 0,
                            speed: 3
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            }
        };
    }

}
