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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_1 = require("./home/home");
var login_1 = require("./login/login");
var signup_1 = require("./signup/signup");
var userhome_1 = require("./userhome/userhome");
var searchbox_1 = require("./userhome/searchbox");
var tabs_1 = require("./userhome/tabs");
var chat_1 = require("./chatwindow/chat");
var appRoutes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'signup', component: signup_1.SignupComponent },
    { path: 'userhome', component: userhome_1.UserhomeComponent },
    { path: 'tabs', component: tabs_1.Tabs },
    { path: 'chat', component: chat_1.ChatComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            home_1.HomeComponent,
            login_1.LoginComponent,
            signup_1.SignupComponent,
            userhome_1.UserhomeComponent,
            searchbox_1.SearchBox,
            tabs_1.Tabs,
            chat_1.ChatComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
