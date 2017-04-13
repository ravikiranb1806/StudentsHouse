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
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_1 = require("./home/home");
var login_1 = require("./login/login");
var signup_1 = require("./signup/signup");
var userhome_1 = require("./userhome/userhome");
var searchbox_1 = require("./userhome/searchbox");
var requests_1 = require("./userhome/requests");
var settings_1 = require("./userhome/settings");
var blocked_1 = require("./userhome/blocked");
var navbar_1 = require("./userhome/navbar");
var accommodators_1 = require("./userhome/accommodators");
var appRoutes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'signup', component: signup_1.SignupComponent },
    { path: 'userhome', component: userhome_1.UserhomeComponent },
    { path: 'requests', component: requests_1.RequestsComponent },
    { path: 'settings', component: settings_1.SettingsComponent },
    { path: 'blocked', component: blocked_1.BlockedComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            home_1.HomeComponent,
            login_1.LoginComponent,
            signup_1.SignupComponent,
            userhome_1.UserhomeComponent,
            searchbox_1.SearchBox,
            requests_1.RequestsComponent,
            settings_1.SettingsComponent,
            blocked_1.BlockedComponent,
            navbar_1.NavbarComponent,
            accommodators_1.AccommodatorsComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
