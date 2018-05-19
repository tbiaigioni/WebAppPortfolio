webpackJsonp(["chat.module"],{

/***/ "./ClientApp/app/pages/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0 chat\">\r\n            <mat-sidenav-container>\r\n              <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"chat-sidenav mat-elevation-z1\">\r\n                  <mat-toolbar color=\"primary\" class=\"p-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                      <mat-list class=\"p-0\">\r\n                          <mat-list-item>\r\n                              <img matListAvatar [src]=\"userImage\">\r\n                          </mat-list-item>\r\n                      </mat-list>\r\n                      <button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\">\r\n                          <mat-icon>more_vert</mat-icon>\r\n                      </button>                                     \r\n                  </mat-toolbar>\r\n                  <mat-menu #userMenu=\"matMenu\" xPosition=\"before\">\r\n                      <span (mouseleave)=\"userMenuTrigger.closeMenu()\">\r\n                          <button mat-menu-item>\r\n                              <mat-icon>account_circle</mat-icon>\r\n                              <span>Profile</span>\r\n                          </button>\r\n                          <button mat-menu-item>\r\n                              <mat-icon>settings</mat-icon>\r\n                              <span>Settings</span>\r\n                          </button>\r\n                          <a mat-menu-item routerLink=\"/\"> \r\n                              <mat-icon>power_settings_new</mat-icon>\r\n                              <span>Exit chat</span>\r\n                          </a>\r\n                      </span>\r\n                  </mat-menu> \r\n                  <mat-nav-list class=\"p-0 chat-sidenav-list\" perfectScrollbar>\r\n                      <mat-list-item *ngFor=\"let chat of chats\" (click)=\"getChat(chat)\">\r\n                          <img matListAvatar [src]=\"chat.image\">\r\n                          <h6 matLine> {{chat.author}} </h6>\r\n                          <p matLine fxLayout=\"row\" fxLayoutAlign=\"none center\" class=\"muted-text\">\r\n                              <span [ngSwitch]=\"chat.authorStatus\">\r\n                                  <mat-icon *ngSwitchCase=\"'Online'\" class=\"chat-status-icon\">check_circle</mat-icon>\r\n                                  <mat-icon *ngSwitchCase=\"'Offline'\" class=\"chat-status-icon\">highlight_off</mat-icon>\r\n                                  <mat-icon *ngSwitchCase=\"'Away'\" class=\"chat-status-icon\">schedule</mat-icon>\r\n                                  <mat-icon *ngSwitchCase=\"'Do not disturb'\" class=\"chat-status-icon\">not_interested</mat-icon>\r\n                              </span>\r\n                              <span class=\"author-status\">{{chat.authorStatus}}</span>\r\n                          </p>\r\n                      </mat-list-item>\r\n                  </mat-nav-list>\r\n              </mat-sidenav>\r\n            \r\n              <div>\r\n                  <mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                          <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                              <mat-icon>list</mat-icon>\r\n                          </button>\r\n                          <mat-list *ngIf=\"currentChat\" class=\"p-0\">\r\n                              <mat-list-item>\r\n                                  <img matListAvatar [src]=\"currentChat.image\">\r\n                              </mat-list-item>\r\n                          </mat-list>\r\n                          <span *ngIf=\"currentChat\" class=\"author-name\">{{currentChat.author}}</span>\r\n                      </div>\r\n                      <button mat-icon-button [matMenuTriggerFor]=\"personMenu\" #personMenuTrigger=\"matMenuTrigger\">\r\n                          <mat-icon>more_vert</mat-icon>\r\n                      </button> \r\n                  </mat-toolbar>\r\n                  <mat-menu #personMenu=\"matMenu\" xPosition=\"before\">\r\n                      <span (mouseleave)=\"personMenuTrigger.closeMenu()\">\r\n                          <button mat-menu-item>\r\n                              <mat-icon>account_circle</mat-icon>\r\n                              <span>Contact info</span>\r\n                          </button>\r\n                          <button mat-menu-item>\r\n                              <mat-icon>volume_mute</mat-icon>\r\n                              <span>Mute</span>\r\n                          </button>\r\n                          <button mat-menu-item> \r\n                              <mat-icon>delete_forever</mat-icon>\r\n                              <span>Clear chat</span>\r\n                          </button>\r\n                      </span>\r\n                  </mat-menu> \r\n                  <div class=\"chat-content\" perfectScrollbar>\r\n                      <mat-list *ngIf=\"talks\" class=\"p-0\" >\r\n                          <mat-list-item *ngFor=\"let talk of talks\" class=\"talk-item\">\r\n                              <img matListAvatar [src]=\"talk.image\">\r\n                              <p matLine class=\"message\">\r\n                                  <span [ngClass]=\"(talk.my) ? 'bg-primary' : 'bg-accent'\">{{talk.text}}</span>\r\n                              </p>                             \r\n                              <p matLine class=\"message-date\">\r\n                                  <small>{{talk.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</small>\r\n                              </p> \r\n                          </mat-list-item>\r\n                      </mat-list>\r\n                      <div *ngIf=\"!talks\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"h-100 empty\">\r\n                          <mat-icon>chat</mat-icon>            \r\n                          <p>Select a interlocutor for talk</p>\r\n                      </div> \r\n                  </div>\r\n                  <mat-divider></mat-divider>\r\n                  <mat-card class=\"chat-actions\"> \r\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                          <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Enter your text...\" (keyup)=\"sendMessage($event)\" [(ngModel)]=\"newMessage\">\r\n                          </mat-form-field>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"scenter center\">\r\n                              <button mat-icon-button type=\"button\">\r\n                                  <mat-icon>attach_file</mat-icon>\r\n                              </button>\r\n                              <button mat-mini-fab color=\"primary\" type=\"button\" (click)=\"sendMessage($event)\">\r\n                                  <mat-icon>send</mat-icon>\r\n                              </button>\r\n                          </div>\r\n                        </div>\r\n                  </mat-card>\r\n              </div>\r\n            \r\n            </mat-sidenav-container>\r\n        </mat-card>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/chat/chat.component.scss":
/***/ (function(module, exports) {

module.exports = ".chat .chat-actions {\n  padding: 12px; }\n\n.chat .author-name {\n  font-size: 16px;\n  font-weight: 400; }\n\n.chat .talk-item {\n  padding: 6px 0;\n  height: 100%; }\n\n.chat .message {\n  white-space: unset;\n  text-overflow: unset; }\n\n.chat .message span {\n    padding: 6px 10px;\n    border-radius: 4px;\n    display: inline-block;\n    font-size: 14px; }\n\n.chat .message-date {\n  opacity: 0.8; }\n\n.chat .empty mat-icon {\n  font-size: 220px;\n  height: 220px;\n  width: 220px;\n  opacity: 0.4; }\n\n.chat .empty p {\n  font-size: 18px;\n  opacity: 0.8; }\n\n.chat-status-icon {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n  line-height: 22px;\n  margin-right: 6px; }\n\n.author-status {\n  font-size: 13px; }\n\n.chat-sidenav {\n  border-right: 1px solid transparent;\n  overflow: hidden; }\n\n.chat-content {\n  padding: 12px;\n  height: calc(100vh - (56px + 8px*2 + 238px)); }\n\n.chat-sidenav-list {\n  height: calc(100vh - (56px + 8px*2 + 132px)); }\n"

/***/ }),

/***/ "./ClientApp/app/pages/chat/chat.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_settings_1 = __webpack_require__("./ClientApp/app/app.settings.ts");
var chat_model_1 = __webpack_require__("./ClientApp/app/pages/chat/chat.model.ts");
var chat_service_1 = __webpack_require__("./ClientApp/app/pages/chat/chat.service.ts");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(appSettings, chatService) {
        this.appSettings = appSettings;
        this.chatService = chatService;
        this.userImage = 'assets/img/users/user.jpg';
        this.sidenavOpen = true;
        this.settings = this.appSettings.settings;
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.chats = this.chatService.getChats();
        if (window.innerWidth <= 768) {
            this.sidenavOpen = false;
        }
    };
    ChatComponent.prototype.onWindowResize = function () {
        (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
    };
    ChatComponent.prototype.getChat = function (obj) {
        if (this.talks) {
            this.talks.length = 2;
        }
        this.talks = this.chatService.getTalk();
        this.talks.push(obj);
        this.currentChat = obj;
        this.talks.forEach(function (talk) {
            if (!talk.my) {
                talk.image = obj.image;
            }
        });
        if (window.innerWidth <= 768) {
            this.sidenav.close();
        }
    };
    ChatComponent.prototype.sendMessage = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newMessage.trim() != '') {
            if (this.talks) {
                this.talks.push(new chat_model_1.Chat('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newMessage, new Date(), true));
                this.newMessage = '';
                var chatContainer_1 = document.querySelector('.chat-content');
                if (chatContainer_1) {
                    setTimeout(function () {
                        var nodes = chatContainer_1.querySelectorAll('.mat-list-item');
                        var newChatTextHeight = nodes[nodes.length - 1];
                        chatContainer_1.scrollTop = chatContainer_1.scrollHeight + newChatTextHeight.clientHeight;
                    });
                }
            }
        }
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.talks)
            this.talks.length = 2;
    };
    __decorate([
        core_1.ViewChild('sidenav'),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "sidenav", void 0);
    __decorate([
        core_1.HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChatComponent.prototype, "onWindowResize", null);
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            template: __webpack_require__("./ClientApp/app/pages/chat/chat.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/chat/chat.component.scss")],
            providers: [chat_service_1.ChatService]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, chat_service_1.ChatService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;


/***/ }),

/***/ "./ClientApp/app/pages/chat/chat.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Chat = /** @class */ (function () {
    function Chat(image, author, authorStatus, text, date, my) {
        this.image = image;
        this.author = author;
        this.authorStatus = authorStatus;
        this.text = text;
        this.date = date;
        this.my = my;
    }
    return Chat;
}());
exports.Chat = Chat;


/***/ }),

/***/ "./ClientApp/app/pages/chat/chat.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ngx_perfect_scrollbar_1 = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var chat_component_1 = __webpack_require__("./ClientApp/app/pages/chat/chat.component.ts");
exports.routes = [
    { path: '', component: chat_component_1.ChatComponent, pathMatch: 'full' }
];
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                forms_1.FormsModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                chat_component_1.ChatComponent
            ]
        })
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;


/***/ }),

/***/ "./ClientApp/app/pages/chat/chat.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var chat_model_1 = __webpack_require__("./ClientApp/app/pages/chat/chat.model.ts");
var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
// let chats = [
//     new Chat(
//         'assets/img/profile/ashley.jpg',
//         'Ashley Ahlberg', 
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/bruno.jpg',
//         'Bruno Vespa',
//         'Do not disturb',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/julia.jpg',
//         'Julia Aniston',
//         'Away',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/adam.jpg',
//         'Adam Sandler',
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/tereza.jpg',
//         'Tereza Stiles',
//         'Offline',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),  
//     new Chat(
//         'assets/img/profile/michael.jpg',
//         'Michael Blair',
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     )
// ]
var chats = [
    new chat_model_1.Chat('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new chat_model_1.Chat('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new chat_model_1.Chat('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new chat_model_1.Chat('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new chat_model_1.Chat('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new chat_model_1.Chat('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false)
];
var talks = [
    new chat_model_1.Chat('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?', new Date(year, month, day - 2, hour, minute + 3), false),
    new chat_model_1.Chat('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, Gradus is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), true)
];
var ChatService = /** @class */ (function () {
    function ChatService() {
    }
    ChatService.prototype.getChats = function () {
        return chats;
    };
    ChatService.prototype.getTalk = function () {
        return talks;
    };
    ChatService = __decorate([
        core_1.Injectable()
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;


/***/ })

});
//# sourceMappingURL=chat.module.chunk.js.map